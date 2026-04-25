# FreshBakes Report Revision Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Upgrade `FreshBakes_System_Design_Report.md` from partially complete to submission-ready by adding the missing lecture-aligned analysis and design content without changing the overall report structure.

**Architecture:** This is a content-only revision of one Markdown report. The work preserves the existing four-phase structure, inserts targeted subsections where the brief and lectures are currently under-covered, and finishes with a coherence pass so the document reads as one polished academic submission rather than a set of patches.

**Tech Stack:** Markdown, Mermaid (existing embedded diagrams), Git, ripgrep

---

## File Structure

- **Modify:** `FreshBakes_System_Design_Report.md`
  - Phase 2 (`## Phase 2 — Feasibility Study (TELOS)`) needs wording updates that explicitly label economic figures as estimates/assumptions.
  - Phase 3 (`## Phase 3 — Requirements Engineering`) needs new subsections for stakeholder analysis, elicitation/validation, and use case specifications.
  - Phase 4 (`## Phase 4 — System Design Specification`) needs a new architecture/module design subsection plus stronger explanatory text around existing design artefacts.
- **Reference only:** `Lectures.md`
  - Used to keep terminology aligned with stakeholder analysis, requirements validation, use case specifications, and design architecture expectations.
- **Reference only:** `docs/superpowers/specs/2026-04-25-freshbakes-report-revision-design.md`
  - Source-of-truth design spec for scope and boundaries.

### Task 1: Tighten Phase 2 feasibility wording

**Files:**
- Modify: `FreshBakes_System_Design_Report.md:129-228`

- [ ] **Step 1: Update the economic feasibility section so financial figures are clearly presented as estimates**

Insert wording near the setup cost and savings tables that makes the assumptions explicit. Use language in this style:

```md
> **Assumption note:** The following figures are planning estimates prepared for feasibility evaluation. They are intended to test economic viability for FreshBakes, not to represent vendor quotations or guaranteed revenue.
```

Also soften any absolute claims in the cost-benefit discussion so they read as justified projections rather than certainties.

- [ ] **Step 2: Tighten the planning-context language in the feasibility verdicts**

Adjust the short verdict lines so they remain confident but sound like academic feasibility conclusions. Use wording in this style where needed:

```md
**Verdict: Economically feasible, based on the stated planning assumptions and projected operating benefits.**
```

- [ ] **Step 3: Verify the new assumption framing is present**

Run:

```bash
rg -n "Assumption note|planning estimates|projected operating benefits" FreshBakes_System_Design_Report.md
```

Expected: at least one match in the economic feasibility section.

- [ ] **Step 4: Commit the feasibility wording revision**

```bash
git add FreshBakes_System_Design_Report.md
git commit -m "docs: clarify feasibility assumptions"
```

### Task 2: Add stakeholder analysis and requirements process coverage

**Files:**
- Modify: `FreshBakes_System_Design_Report.md:232-346`
- Reference: `Lectures.md:134-183`
- Reference: `Lectures.md:253-286`

- [ ] **Step 1: Insert a stakeholder analysis subsection before the current system requirements section**

Add a new subsection after `### 3.1 User Requirements` and before `### 3.2 System Requirements`. Include a compact table with these rows:

```md
### 3.2 Stakeholder Analysis

| Stakeholder | Role in the System | Key Needs / Concerns |
|---|---|---|
| Customer | Places online orders for collection or delivery | Fast ordering, secure payment, accurate order status, loyalty visibility |
| Baker | Prepares products and updates order progress | Clear queue visibility, custom order detail, low-stock awareness |
| Admin/Owner | Oversees products, stock, customers, reports, and delivery allocation | Operational oversight, reporting accuracy, easy product/inventory control |
| Delivery Staff | Completes assigned deliveries via mobile device | Clear route details, contact visibility, simple status updates |
| Stripe | External payment processor | Reliable payment confirmation and clear transaction handling |
| Email Service | Sends transactional notifications | Accurate trigger events and timely confirmation dispatch |
```

Keep the tone academic and explicitly connect this subsection to the lecture emphasis on stakeholders and concerns.

- [ ] **Step 2: Add a requirements elicitation and validation subsection**

Insert a new subsection immediately after stakeholder analysis with content in this structure:

```md
### 3.3 Requirements Elicitation and Validation

The requirements for the FreshBakes system were derived through a combination of stakeholder interviews, observation of the bakery's current notebook-and-spreadsheet workflow, analysis of recurring operational problems, and review of low-fidelity interface prototypes.

#### Elicitation Approach

- Interviews with the owner/admin clarified reporting, stock control, and delivery assignment needs.
- Observation of the manual process exposed implicit requirements around order handoff, stock visibility, and confirmation accuracy.
- Baker and delivery workflows informed queue management, delay handling, and route support requirements.
- Prototype-oriented feedback helped refine ordering, dashboard, and mobile delivery expectations.

#### Validation Approach

- **Validity:** requirements address the bakery's stated problems of stockouts, order mix-ups, and missing loyalty tracking.
- **Consistency:** user and system requirements avoid direct conflict and follow one shared order-status model.
- **Completeness:** customer, baker, admin, and delivery staff needs are all represented.
- **Realism:** requirements remain achievable within the feasibility assumptions and SME-scale technology stack.
- **Verifiability:** each major requirement can be checked through system behavior, response time, or process outcome.
```

Finish the subsection with one short paragraph linking user requirements, system requirements, and later design artefacts for traceability.

- [ ] **Step 3: Renumber downstream Phase 3 headings to keep the section coherent**

After inserting the new subsections, update the existing Phase 3 headings so the numbering remains sequential and readable. The final Phase 3 headings should follow this order:

```md
### 3.1 User Requirements
### 3.2 Stakeholder Analysis
### 3.3 Requirements Elicitation and Validation
### 3.4 System Requirements
### 3.5 Why Agile is Superior for Delivery Route Optimisation
```

- [ ] **Step 4: Verify the new Phase 3 headings**

Run:

```bash
rg -n "^### 3\\." FreshBakes_System_Design_Report.md
```

Expected: five Phase 3 subsection headings in the order listed above.

- [ ] **Step 5: Commit the Phase 3 stakeholder and validation work**

```bash
git add FreshBakes_System_Design_Report.md
git commit -m "docs: add stakeholder and requirements process sections"
```

### Task 3: Add use case specifications

**Files:**
- Modify: `FreshBakes_System_Design_Report.md:321-475`
- Reference: `Lectures.md:473-477`

- [ ] **Step 1: Insert a use case specifications subsection adjacent to the use case discussion**

Add a new subsection either at the end of Phase 3 or immediately before `### 4.3 Use Case Diagram`. Use this heading and keep all four use cases concise:

```md
### 3.6 Key Use Case Specifications
```

- [ ] **Step 2: Add the four required use case text specifications**

Write short specifications for these cases:

```md
#### Use Case 1: Place Order
- **Primary Actor:** Customer
- **Preconditions:** Customer has selected one or more products and provided required order details.
- **Main Flow:** Customer reviews basket, selects delivery or collection, enters required details, proceeds to Stripe checkout, and receives confirmation after successful payment.
- **Alternate Flow:** If stock is unavailable or payment fails, the system displays a clear message and prompts the customer to revise or retry.
- **Postcondition:** A confirmed order is recorded and routed for fulfilment.

#### Use Case 2: Manage Inventory
- **Primary Actor:** Admin/Owner
- **Preconditions:** Admin is authenticated and product inventory data exists.
- **Main Flow:** Admin reviews stock levels, updates quantities or thresholds, and saves changes for operational use.
- **Alternate Flow:** If invalid stock data is entered, the system rejects the update and prompts for correction.
- **Postcondition:** Current stock and threshold information is stored for ordering and alert processes.

#### Use Case 3: Assign Deliveries
- **Primary Actor:** Admin/Owner
- **Preconditions:** Delivery-type orders exist and delivery staff are available.
- **Main Flow:** Admin reviews ready deliveries, assigns an order to a delivery staff member, and the mobile delivery queue updates accordingly.
- **Alternate Flow:** If no driver is available, the order remains pending assignment and is flagged for follow-up.
- **Postcondition:** Delivery responsibility is recorded and visible to staff.

#### Use Case 4: Track Order Status
- **Primary Actor:** Customer
- **Preconditions:** A valid order has been created.
- **Main Flow:** Customer accesses the order reference or account view and sees the latest order status as it moves through fulfilment.
- **Alternate Flow:** If the order reference is invalid, the system returns an error message and requests a valid lookup.
- **Postcondition:** Customer receives an up-to-date status view without contacting the bakery manually.
```

- [ ] **Step 3: Ensure the use case text points back to the diagram rather than duplicating it**

Add one short transition sentence such as:

```md
The following textual specifications provide the detailed flow-of-events context that complements the use case diagram in Phase 4.
```

- [ ] **Step 4: Verify all four use case headings are present**

Run:

```bash
rg -n "^#### Use Case [1-4]:" FreshBakes_System_Design_Report.md
```

Expected: four matches covering Place Order, Manage Inventory, Assign Deliveries, and Track Order Status.

- [ ] **Step 5: Commit the use case specification addition**

```bash
git add FreshBakes_System_Design_Report.md
git commit -m "docs: add use case specifications"
```

### Task 4: Add architecture/module design and strengthen design narrative

**Files:**
- Modify: `FreshBakes_System_Design_Report.md:350-796`
- Reference: `Lectures.md:47-49`

- [ ] **Step 1: Insert a system architecture subsection near the start of Phase 4**

Add a new subsection before the current DFD content with a heading like:

```md
### 4.1 System Architecture and Module Design
```

Then shift the current Phase 4 subsection numbering down by one. In the new subsection, include a module table using content in this shape:

```md
| Module | Primary Responsibility | Key Data / Interfaces | Requirement Links |
|---|---|---|---|
| Ordering Management | Captures customer orders and order details | Order, Order_Item, customer inputs | UR-C01-UR-C06, SR-F03, SR-F08 |
| Payment Processing | Handles Stripe checkout and payment confirmation | Payment, Stripe webhook | UR-C04, SR-F01, SR-F10 |
| Inventory Management | Tracks stock availability and reorder thresholds | Product, Inventory | UR-A02, UR-B05, SR-F05, SR-F08 |
| Loyalty Management | Awards and redeems points | Customer loyalty balance, payment outcomes | UR-C07, UR-C08, SR-F06, SR-F07 |
| Delivery Management | Assigns, tracks, and completes deliveries | Delivery, Staff, route details | UR-A05, UR-D01-UR-D04 |
| Notification Services | Sends confirmation and status messages | Email triggers, order status events | UR-C05, UR-C06, SR-F02 |
| Reporting/Admin Dashboard | Supports monitoring and control by the owner | Sales, stock alerts, order summaries | UR-A03, UR-A06 |
```

Close the subsection with a short paragraph explaining that the architecture links the requirements model to the DFD and ERD.

- [ ] **Step 2: Update the Phase 4 subsection numbering**

After adding the architecture subsection, the Phase 4 headings should read in this order:

```md
### 4.1 System Architecture and Module Design
### 4.2 Context Diagram (DFD Level 0)
### 4.3 DFD Level 1 — Order Flow
### 4.4 Use Case Diagram
### 4.5 Entity Relationship Diagram (ERD)
### 4.6 Order Fulfillment Flowchart
### 4.7 UI Wireframe Descriptions
### 4.8 Release Plan
### 4.9 Design Effectiveness Assessment
```

- [ ] **Step 3: Strengthen the explanatory text around existing design artefacts**

Add or revise one short paragraph around the DFD, use case, and ERD sections so each artefact is explicitly tied to lecture language:

```md
The DFDs present the system from a process-centered perspective, showing how external actors, core processes, and data stores interact during ordering and fulfilment.

The use case diagram captures the system's external behavior by mapping actor goals to the services provided by the FreshBakes platform.

The ERD supports the database design by defining the persistent entities, attributes, and relationships needed to implement the required business processes.
```

- [ ] **Step 4: Verify the revised Phase 4 heading order**

Run:

```bash
rg -n "^### 4\\." FreshBakes_System_Design_Report.md
```

Expected: nine Phase 4 subsection headings in the order listed in Step 2.

- [ ] **Step 5: Commit the Phase 4 architecture and narrative improvements**

```bash
git add FreshBakes_System_Design_Report.md
git commit -m "docs: add architecture section and strengthen design narrative"
```

### Task 5: Final coherence pass and submission-readiness check

**Files:**
- Modify: `FreshBakes_System_Design_Report.md`
- Reference: `docs/superpowers/specs/2026-04-25-freshbakes-report-revision-design.md`

- [ ] **Step 1: Read the updated report end-to-end and smooth any abrupt transitions**

Focus on:

```md
- keeping the tone formal and consistent
- avoiding repeated explanations of the same requirement
- making sure new subsections refer naturally to the existing diagrams, prototypes, and release plan
- preserving the existing strong material in Phase 1 and the core of Phase 2
```

- [ ] **Step 2: Run a coverage check for the required additions**

Run:

```bash
rg -n "Stakeholder Analysis|Requirements Elicitation and Validation|Use Case 1: Place Order|System Architecture and Module Design|Assumption note" FreshBakes_System_Design_Report.md
```

Expected: one or more matches for each required addition.

- [ ] **Step 3: Review the final diff before committing**

Run:

```bash
git --no-pager diff -- FreshBakes_System_Design_Report.md
```

Expected: changes are limited to the report content and align with the design spec scope.

- [ ] **Step 4: Commit the final polished report revision**

```bash
git add FreshBakes_System_Design_Report.md
git commit -m "docs: complete FreshBakes report coverage revision"
```
