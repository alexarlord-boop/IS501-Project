# FreshBakes Report Revision Design

## Problem

The current `FreshBakes_System_Design_Report.md` is strong in methodology comparison, feasibility, requirements listing, diagrams, prototypes, and release planning, but it is still only partially aligned with the expected IS501 deliverables. The largest gaps are in lecture-aligned analysis content: stakeholder coverage, requirements elicitation and validation, use case specifications, and an explicit architecture/module design section.

The goal of this revision is to improve the report's academic completeness without rewriting it. The result should read as a complete submission that better matches the case study brief and the lecture background in `Lectures.md`.

## Scope

This design covers **content-only revisions** to `FreshBakes_System_Design_Report.md`.

### In scope

- Add missing lecture-aligned sections to the report
- Tighten wording where the report currently undershoots the brief
- Clarify assumptions in feasibility content
- Strengthen the explanation of existing diagrams and their role in the design

### Out of scope

- Rebuilding or redrawing the existing diagrams
- Changing prototype assets in `stitch prototype/`
- Rewriting the report structure from scratch
- Updating `.tex` or `.pdf` outputs

## Recommended Approach

Use a **coverage-first revision**. This means preserving the current four-phase structure and inserting the missing content into the most natural places, rather than performing a full editorial rewrite.

This approach is recommended because:

- the report already has a solid structure and substantial content
- the missing pieces are specific and identifiable
- targeted additions reduce the risk of weakening sections that are already strong
- the revised report will be easier to keep internally consistent

## Design Overview

The revised report will remain organized around:

1. Methodology Evaluation
2. Feasibility Study
3. Requirements Engineering
4. System Design Specification

The revision will strengthen Phases 2 to 4 while keeping Phase 1 largely intact.

## Planned Report Changes

### 1. Phase 2 - Feasibility Study adjustments

The feasibility section will remain TELOS-based, but it will be tightened in two ways:

- financial figures such as setup cost, annual savings, payback period, and ROI will be stated more clearly as **estimates/assumptions**
- wording will better connect the feasibility criteria to the bakery context and the lecture framing of planning deliverables

This is a wording and framing improvement, not a structural rewrite.

### 2. Phase 3 - Stakeholder analysis subsection

Add a short subsection that identifies the main stakeholders and their concerns.

Core stakeholders:

- Customer
- Baker
- Admin/Owner
- Delivery Staff

Supporting/external stakeholders:

- Stripe
- Email/notification service

For each stakeholder, the report should briefly state:

- their role in the system
- what they need from the system
- the main risks or concerns tied to their involvement

This addition is intended to align the report with lecture emphasis on people, stakeholders, and stakeholder concerns.

### 3. Phase 3 - Requirements elicitation and validation subsection

Add a concise requirements process subsection covering how the requirements were derived and how they are validated.

#### Elicitation content

The report should describe a realistic combination of:

- stakeholder interviews
- observation of the current manual workflow using notebooks and spreadsheets
- analysis of operational pain points such as stockouts, order mix-ups, and delivery coordination
- feedback from low-fidelity prototypes and wireframes

#### Validation content

The report should explicitly assess requirements against the lecture criteria:

- validity
- consistency
- completeness
- realism
- verifiability

The section should also mention traceability between user requirements, system requirements, and design elements already present in the report.

### 4. Phase 3 or early Phase 4 - Use case specifications

Add short text specifications for the key use cases, not just the diagram.

Recommended use cases:

- Place Order
- Manage Inventory
- Assign Deliveries
- Track Order Status

Each use case specification should include:

- goal/purpose
- primary actor
- preconditions
- main success flow
- alternate or exception flow
- outcome/postcondition

These should remain concise and academic, serving as the explanatory layer that the diagram alone does not provide.

### 5. Phase 4 - Architecture/module design subsection

Add an explicit architecture/module design subsection to strengthen the design specification.

Recommended modules:

- Ordering Management
- Payment Processing
- Inventory Management
- Loyalty Management
- Delivery Management
- Notification Services
- Reporting/Admin Dashboard

For each module, the report should describe:

- its main responsibility
- the primary data it handles
- how it supports identified requirements
- any important interaction with other modules

This section should connect the requirements and the ERD/DFD work into a clearer system design narrative.

### 6. Phase 4 - Stronger design narrative around existing diagrams

Do not redraw the diagrams, but improve the surrounding explanation so the report makes clearer academic use of them.

This includes:

- clarifying how the DFD supports process-centered analysis
- clarifying how the use case diagram captures external behavior and actor goals
- clarifying how the ERD supports the database definition side of the design
- linking the flowchart and prototypes back to user requirements and iterative design decisions

## Revision Boundaries

The implementation should remain conservative:

- keep the current heading hierarchy unless a small insertion requires a new subsection
- preserve the strong existing content in methodology evaluation, feasibility structure, prototype descriptions, and release plan
- prefer insertion and targeted wording changes over large rewrites

## Success Criteria

The revision is successful when:

1. the report still reads as one coherent document rather than a patched collection of notes
2. all four activities remain clearly covered
3. the report explicitly addresses stakeholder analysis, elicitation, validation, use case specifications, and architecture/module design
4. the report better reflects the terminology and expectations in `Lectures.md`
5. the submission shifts from "partially complete" to "submission-ready" without broad scope expansion

## Risks and Mitigations

### Risk: over-expanding the report

Mitigation: keep each new subsection concise and directly tied to the brief or lecture content.

### Risk: duplicating existing material

Mitigation: reference current requirements, diagrams, and release sections rather than restating them in full.

### Risk: uneven academic tone

Mitigation: write new sections in the same formal style already used in the report and keep terminology consistent across phases.

## Implementation Notes for the Next Step

When this design is executed, the editing work should prioritize:

1. inserting missing subsections in Phase 3 and Phase 4
2. tightening feasibility wording in Phase 2
3. improving cross-references between requirements and design artefacts
4. preserving the diagrams, prototypes, and release plan as-is unless a minor explanatory adjustment is needed nearby
