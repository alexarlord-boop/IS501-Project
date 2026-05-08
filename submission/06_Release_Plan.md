# Release Plan

**FreshBakes Bakery | IS501 Project**

**Methodology:** Agile (Scrum) with Waterfall-style governance for Inventory & Payment modules
**Team:** Two-person freelance development team
**Total Duration:** 16 weeks (4 months) — targeting go-live before peak summer tourism season

**Tooling**
| Purpose | Tool |
|---------|------|
| Prototyping / Wireframes | Google Stitch / Figma |
| Diagrams (UML, DFD, ERD) | Mermaid (embedded in Markdown); Lucidchart for exports |
| Version control | Git |
| Project management | Jira / Trello (sprint board) |
| Payment integration | Stripe API |
| Frontend | React / Next.js |
| Backend | Node.js |
| Hosting | AWS / DigitalOcean (Cyprus-region) |
| Mobile delivery app | Progressive Web App (PWA) |

---

## Phase 1 — MVP Ordering (Weeks 1–8)

*Goal: Replace notebooks and spreadsheets with a working digital ordering system.*

| Sprint | Weeks | Deliverables |
|--------|-------|-------------|
| Sprint 0 | 1–2 | DB schema, cloud environment, Stripe webhook integration, inventory API (Waterfall-governed) |
| Sprint 1 | 3–4 | Customer product browsing, order form, email confirmations |
| Sprint 2 | 5–6 | Baker order queue dashboard, order status workflow |
| Sprint 3 | 7–8 | Admin inventory management, low-stock alerts, basic admin dashboard |

### MVP Success Criteria
- Customer can place and pay for an order online ✓
- Baker receives and processes the order digitally ✓
- Inventory deducts automatically on payment ✓
- Admin can manage stock and view orders ✓

---

## Phase 2 — Payments, Loyalty & Delivery (Weeks 9–16)

*Goal: Add loyalty programme, delivery optimisation, and reporting — differentiate from competitors.*

| Sprint | Weeks | Deliverables |
|--------|-------|-------------|
| Sprint 4 | 9–10 | Loyalty points system (earn + redeem), customer account history |
| Sprint 5 | 11–12 | Mobile Delivery PWA — assignment, status updates, map integration |
| Sprint 6 | 13–14 | Delivery route clustering, drag-to-reorder, estimated delivery times |
| Sprint 7 | 15–16 | Sales & inventory reports, UAT, staff training, go-live |

### Phase 2 Success Criteria
- Loyalty programme active with 50+ enrolled customers ✓
- Delivery staff operating exclusively via mobile app ✓
- Admin generating weekly sales reports ✓
- System live and handling real orders at full capacity ✓

---

## Module Methodology Mapping

| Module | Methodology | Justification |
|--------|-------------|---------------|
| Inventory management | Waterfall (Sprint 0) | Fixed, auditable rules; no UX iteration needed |
| Stripe payment integration | Waterfall (Sprint 0) | Regulatory and deterministic; tested against a written spec |
| Online ordering / UX | Agile Scrum | Customer-driven and evolving; needs real feedback each sprint |
| Custom cake configurator | Agile Scrum | Inherently iterative; high UX complexity with emergent requirements |
| Delivery route scheduling | Agile Scrum | Optimisation logic improves progressively with real usage data |
| Loyalty programme | Agile Scrum | Business rules evolve with promotion cycles and customer behaviour |
| Admin dashboard | Agile Scrum | Baker and admin needs best discovered through hands-on use |

---

## Delivery Route Optimisation — Iterative Sprint Breakdown

Demonstrating Agile's advantage over Waterfall for this specific module:

| Sprint | Feature |
|--------|---------|
| Sprint 1 | Drivers see assigned orders as cards; "Open in Google Maps" button per stop |
| Sprint 2 | All stops plotted as pins on a single in-app map view |
| Sprint 3 | Google Route Optimization API integrated; auto-generates fastest route |
| Sprint 4 | Drag-and-drop reordering overlay; drivers can tweak sequence before starting |

---

## Key Milestones

| Milestone | Target Week |
|-----------|-------------|
| Architecture sign-off & environment live | End of Week 2 |
| First working order placed end-to-end | End of Week 4 |
| Baker dashboard live in kitchen | End of Week 6 |
| Stripe payments live | End of Week 8 |
| Loyalty programme beta | End of Week 10 |
| Delivery PWA in driver hands | End of Week 12 |
| Full UAT complete | End of Week 15 |
| **Go-live** | **Week 16** |
