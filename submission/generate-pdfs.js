#!/usr/bin/env node
/**
 * Converts all submission Markdown files to PDFs with Mermaid diagrams rendered.
 * Uses puppeteer (bundled with md-to-pdf) + Mermaid CDN injected into the page.
 */

const fs = require('fs');
const path = require('path');

const MD2PDF_MODULES = '/Users/alex.petrunin/.nvm/versions/node/v24.13.0/lib/node_modules/md-to-pdf/node_modules';
const { marked } = require(path.join(MD2PDF_MODULES, 'marked'));
const puppeteer = require(path.join(MD2PDF_MODULES, 'puppeteer'));

const CHROME = '/Users/alex.petrunin/.cache/puppeteer/chrome/mac_arm-148.0.7778.97/chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing';

const FILES = [
  'FreshBakes_System_Design_Report.md',
  '01_DFD_Context_Level0.md',
  '02_DFD_Level1_OrderFlow.md',
  '03_Use_Case_Diagram.md',
  '04_ERD.md',
  '05_Flowchart_Order_Fulfillment.md',
  '06_Release_Plan.md',
];

const SUBMISSION_DIR = __dirname;
const PDFS_DIR = path.join(SUBMISSION_DIR, 'pdfs');

function mdToHtml(mdContent) {
  const body = marked.parse(mdContent);
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, Arial, sans-serif; max-width: 960px; margin: 40px auto; padding: 0 24px; font-size: 14px; line-height: 1.6; color: #1a1a1a; }
    h1 { font-size: 22px; } h2 { font-size: 18px; margin-top: 32px; } h3 { font-size: 15px; }
    table { border-collapse: collapse; width: 100%; margin: 16px 0; font-size: 13px; }
    th, td { border: 1px solid #ccc; padding: 6px 10px; text-align: left; }
    th { background: #f5f5f5; }
    pre { background: #f5f5f5; padding: 12px; border-radius: 4px; overflow-x: auto; font-size: 12px; }
    code { font-size: 12px; }
    blockquote { border-left: 4px solid #ddd; margin: 0; padding: 0 16px; color: #555; }
    .mermaid { text-align: center; margin: 24px 0; }
    svg { max-width: 100%; }
  </style>
</head>
<body>
${body}
<script src="https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js"></script>
<script>
  // Convert <code class="language-mermaid"> blocks to <div class="mermaid">
  document.querySelectorAll('code.language-mermaid').forEach(function(el) {
    var div = document.createElement('div');
    div.className = 'mermaid';
    div.textContent = el.textContent;
    el.closest('pre').replaceWith(div);
  });
  mermaid.initialize({ startOnLoad: true, theme: 'default', securityLevel: 'loose' });
</script>
</body>
</html>`;
}

async function convertFile(mdFile) {
  const mdPath = path.join(SUBMISSION_DIR, mdFile);
  const pdfName = mdFile.replace(/\.md$/, '.pdf');
  const pdfPath = path.join(PDFS_DIR, pdfName);

  console.log(`Converting ${mdFile} ...`);
  const mdContent = fs.readFileSync(mdPath, 'utf8');
  const html = mdToHtml(mdContent);

  const browser = await puppeteer.launch({ executablePath: CHROME, args: ['--no-sandbox'] });
  const page = await browser.newPage();

  await page.setContent(html, { waitUntil: 'networkidle0' });

  // Wait for Mermaid to finish rendering all diagrams
  await page.waitForFunction(() => {
    const divs = document.querySelectorAll('.mermaid');
    if (divs.length === 0) return true;
    return Array.from(divs).every(d => d.querySelector('svg') !== null);
  }, { timeout: 30000 });

  await page.pdf({
    path: pdfPath,
    format: 'A4',
    margin: { top: '20mm', bottom: '20mm', left: '15mm', right: '15mm' },
    printBackground: true,
  });

  await browser.close();
  console.log(`  ✔ saved pdfs/${pdfName}`);
}

(async () => {
  fs.mkdirSync(PDFS_DIR, { recursive: true });
  for (const f of FILES) {
    await convertFile(f);
  }
  console.log('\nDone — all PDFs in submission/pdfs/');
})().catch(err => { console.error(err); process.exit(1); });
