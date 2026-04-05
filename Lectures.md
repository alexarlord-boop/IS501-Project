# 🟢 IS501 IS – Information Systems Analysis and Design

## Week 1 Feb 13, 2026

1\. Core Concepts: Information and Systems

* **Information vs. Data:** Information is data that has been transformed into an output that is valuable to users.  
* **Information System (IS) Purpose:** An IS deals with organizational data to (1)process inputs, (2)maintain data, (3)handle queries, (4)generate reports, and (5)support online transactions.

**The 5 Components of an Information System:**

1. **Hardware:** The physical layer (servers, workstations, fiber-optic cables, mobile devices, etc.).  
2. **Software:** Programs that control hardware. Includes *System Software* (manages hardware/networks) and *Application Software* (supports day-to-day business functions).  
3. **Data:** The raw material transformed into useful information.  
4. **Processes:** Tasks and business functions performed to achieve specific results.  
5. **People:** Also known as stakeholders, these are the individuals with an interest in the system.

**Levels of Information Systems:**

* **Top Managers:** Strategic Planning → Decision Support Systems.  
* **Middle Managers & Knowledge Workers:** Management Control → Management Information Systems (MIS).  
* **Supervisors & Operational Employees:** Operational Control → Transaction Support / Processing Systems.

---

2\. Primary System Development Methods

| Feature | Structured Analysis | Object-Oriented (O-O) Analysis | Agile / Adaptive Methods |
| :---- | :---- | :---- | :---- |
| **Core Concept** | Represents system via data and processes that act on it. Process-centered. | Views system as objects combining data \+ processes representing real-world things/events. | Incremental development by building prototypes and iterating based on feedback. |
| **Tools Used** | Data Flow Diagrams (DFDs). | O-O diagrams (depicting actors, methods, messages). | Collaborative software, brainstorming, whiteboards. |
| **Pros** | Time-tested; well-suited to project management; relies on written documentation. | Modular/reusable code reduces cost/time; easy to maintain and expand via inheritance. | Highly flexible with change; stresses team interaction; frequent deliverables reduce risk. |
| **Cons** | Changes are costly later on; requirements defined too early; users struggle to visualize needs. | Newer method; complex interaction of objects/classes in large systems. | Requires high technical/communication skills; lack of documentation adds risk; high scope-creep risk. |

3\. The System Development Life Cycle (SDLC)

The SDLC is the series of phases used to plan, analyze, design, implement, and support an IS.

* **Phase 1: Planning**   
  * **Goal:** Identify the problem, gather initial requirements, and perform a feasibility study.  
  * **Feasibility Types:** Technical (can we build it?), Economic (is it valuable?), Organizational (is it usable?).  
  * **Deliverables:** Feasibility Analysis, Project Plan, Gantt Chart, Cost and Benefit Report.  
* **Phase 2: Analysis**  
  * **Goal:** Detail functional and non-functional requirements.  
  * **Tasks:** Develop use cases, DFDs, and Entity Relationship Models (ER-D).  
  * **Deliverable:** Software Requirement Specification (SRS).  
* **Phase 3: Design**  
  * **Goal:** Create the architecture, UI layout, database relationships, and select programming languages/frameworks.  
  * **Deliverables:** Software Design Definition (SDD) and Database Definition Documentation (DDD).  
* **Phase 4: Development**  
  * **Goal:** Operation team sets up physical hardware while developers write the actual code.  
* **Phase 5: Testing**  
  * **Goal:** Run test cases to validate requirements and find bugs.  
  * **Deliverables:** Test Cases, Test Plan, Test Result.  
* **Phase 6: Implementation**  
  * **Goal:** Setup production server, configure URLs/DB, pilot launch, and Go-Live for real users.  
  * **Deliverable:** Complete Functioning System.  
* **Phase 7: Maintenance**  
  * **Goal:** Monitor server load/performance, address user bug reports, scale databases if needed.  
  * **Deliverable:** Operational Information System.

---

4\. Specialized Life Cycle Models

* **Waterfall Model:** A sequential, 6-stage process where each phase must finish before the next begins. It's inflexible and bad for complex projects, but simple, easy to track, and works best when requirements are fixed and well-understood.  
* **Spiral Model:** Highly focused on risk analysis. It's excellent for large, mission-critical projects but very costly and highly dependent on risk analysis expertise.  
* **Iterative & Incremental:** Generates working software quickly. It is easier to test/debug and highly flexible, but total costs can run higher than Waterfall, and it requires complete system definition before breaking into increments.  
* **Agile Model:** Emphasizes people, face-to-face interaction, and daily cooperation over processes and tools. Drawbacks include a lack of necessary documentation and a high risk of the project getting taken off track.  
* **Prototyping Model:** Actively involves users so they deeply understand the system, catching errors early. However, it can lead to an "implement and then repair" mentality and easily inflate the project scope.  
* **Rapid Application Development (RAD):** A 5-step model emphasizing fast delivery through user design and prototyping. It delivers quickly but requires highly skilled teams and risks quality reduction due to speed.  
* **Joint Application Development (JAD):** Allows key users to participate directly, resulting in highly accurate requirements and strong user commitment. The major downside is that it is expensive and cumbersome for large groups.

---

5\. Project Management Basics

* **Key Roles:**   
  * *Project Manager/Leader:* Usually a senior analyst who guides and coordinates the team.  
  * *Project Coordinator:* Handles administration and negotiates with users regarding conflicting requirements, time, and expenses.  
* **Four Managerial Activities:** Planning, Scheduling, Monitoring, and Reporting.  
* **Scheduling Tools:**   
  * *Gantt Chart:* A horizontal bar chart that represents a set of tasks.  
  * *PERT/CPM Chart:* Critical Path Method, developed by private industry, used for mapping task dependencies.  
* **Work Breakdown Structure (WBS):** The process of breaking a project down into smaller tasks, arranged in logical sequences called "task patterns" (dependent tasks, multiple successors, etc.).

---

Extra

**Business Categories:**

* **B2C (Business-to-Consumer):** E-commerce like Amazon.  
* **B2B (Business-to-Business):** Electronic Data Interchange (EDI) and supply chain management.

**Types of IT Groups/Systems:**

* **Enterprise Computing:** Systems that support the whole company (ERP).  
* **Transaction Processing (TP):** Processes operational data (e.g., sales orders).  
* **Business Support:** Provides job-related info to users (Management Information Systems).  
* **Knowledge Management:** Uses "Expert Systems" and "Fuzzy Logic" to simulate human reasoning.

**Software Acquisition Options:**

* **Software as a Service (SaaS):** Hosting applications via the web.  
* **The Software Carrot/Build vs. Buy:** Deciding whether to develop in-house or purchase a commercial package.

## Week 2 Feb 20, 2026

1\. Soft Systems Methodology (SSM)  
**Core Concepts & Philosophy**

* **Origin:** Developed by Peter Checkland to solve messy, confusing, and ill-structured management problems.  
* **Systems View:** Views the world as an open, dynamic, and interconnected system where parts interact in nonlinear ways.  
* **Soft vs. Hard Sciences:** Unlike hard sciences that rely on controlled, analytical processes, SSM incorporates human ("soft") elements like social interactions, corporate politics, and diverse perspectives.  
* **Purpose:** It is a cyclic learning system and problem-structuring method (PSM) designed to bridge the gap between the "real" world and the "systems" (conceptual) world.  
* **Goal:** Does not dictate a final design; rather, it facilitates dialogue among stakeholders to achieve a shared understanding and reach an "accommodation" (compromise/consensus) on feasible changes, even if complete consensus is impossible.  
* **Soft OR Characteristics:** Soft approaches prioritize "what" questions before "how" questions, and process is emphasized equally alongside content.

**The 7 Iterative Steps of SSM**

1. **Explore the Problematical Situation:** Recognize the unstructured problem and identify the client, practitioner, and affected stakeholders.  
2. **Describe the Situation:** Express the problem by creating a "rich picture" or mind map showing organizations, relationships, politics, and the various "worldviews" involved.  
3. **Formulate Root Definitions:** Define the relevant purposeful activities using two key tools:  
   * **PQR Formula:** Do **P** (What?), by doing **Q** (How?), to help achieve **R** (Why?).  
   * **CATWOE Analysis:** Defines **C**ustomers (receivers of output), **A**ctors (workers), **T**ransformation (what is affected/done), **W**orldview (big picture), **O**wner (owns process), and **E**nvironment (restrictions/limits).  
4. **Compose Conceptual Models:** Develop models of purposeful activities based on the root definitions.  
5. **Compare Models with Reality:** Discuss the models to see if they accurately represent reality and evaluate if activities are efficacious, efficient, and effective.  
6. **Define Feasible Changes:** Agree on actions to improve the situation. Changes usually involve things (easiest), processes, or people (most difficult, involves culture/attitude).  
7. **Take Action:** Implement the planned changes in the organization. If problems arise, the iterative cycle begins again at step one.

---

2\. Stakeholders in Systems Design  
**Stakeholder Identification & Risks**

* **Reality Check:** Identification is often too casual. A stakeholder is not necessarily beneficial or benign.  
* **Risks:** Stakeholders can sue, regulate, or even be competitors.

**Elicitation Methods**

* **Casual Methods:** Studying business ecosystems, asking current users, "following the money," and basic mapping.  
* **Deeper Dives:** Unpacking transactions, studying policy groups in Active Directory/LDAP, dataflow modeling, and acceptance testing.

**Model-Based Systems Engineering (MBSE) & SysML**

* **SysML Definition:** A graphical modeling language extending UML, used to specify, analyze, and verify complex systems (hardware, software, personnel).  
* **SysML 1.4 Stakeholder Elements:** A "stakeholder" extends the UML classifier and has a list of concerns represented as "comment" model elements.  
* **Viewpoints:** Used to address stakeholder concerns, containing derived properties like *concernList* and specifying the format/style of the view.

**Other Stakeholder Contexts**

* **Agile:** Stakeholders are integrated into canonical/domain-specific user stories, or act in proxy roles for QA and testing.  
* **Mapping:** Stakeholders should be mapped to value matrices, risk matrices, safety measures, compliance, and specific software components.

---

3\. Participatory Design  
**Core Concepts**

* **Definition:** Bringing customers directly into the product development process to create more informed product solutions.  
* **Alternate Names:** Cooperative Design, Co-Design, Co-Creation, Co-Production.  
* **Phases:** The methodology follows a cycle of **Learn** (understanding needs) \-\> **Create** (designing solutions) \-\> **Test** (ensuring solutions fit needs).

**Participatory Design Activities**

* **1\. Narration (Explicit Knowledge \- What people say/do):**  
  * *Love/Break-up Letter:* Helps understand the human relationship participants have with existing products. Used for finding value propositions and user pain points.  
  * *Day in the Life:* Shows daily rituals and interactions with services. Used to create User Journey Maps.  
* **2\. Creation (Tacit Knowledge \- What people make):**  
  * *User Interface Toolkit:* Enables users to build ideal solutions via low-fidelity prototypes to reveal their priorities. Used to understand user preferences, feature needs, and mental models.  
* **3\. Prioritization:**  
  * *Card Sort:* Participants group items to find relationships. Used for mental models and info classifications.  
  * *Ranking:* Participants rank product concepts from most to least desirable. Used for feature prioritization and brand value scaling.  
* **4\. Contextualization:**  
  * *Scenario Creation:* Users react to and revise a story containing their ideas. Used to understand user stories, needs, and flows.  
  * *Simulations:* Users try an early product idea in real-life situations. Used to get feedback on use cases and product usability.

**Implementation Tips for Teams**

* If your team already does UX research, you do not need to ask for permission to use participatory design; just add these methods to your ongoing customer interviews.  
* These activities can be conducted either in-person or remotely.  
* The ultimate goal is not just to build and measure, but to ask better questions and empower customers to help answer them.

Extra  
1\. Illustrative Case Studies & Anecdotes

* **What was skipped:** The specific examples of participatory design in action, such as redesigning GE Energy's enterprise software and bringing hidden features to the front of Google Maps.  
* **Why:** Exams in information systems typically test your understanding of the *methodology* (how and why to use Narration or Prioritization) rather than the specific details of a corporate case study used as an example in a lecture.

2\. The Exhaustive List of Alternate Methodologies

* **What was skipped:** A massive list of 15 other soft systems methodologies developed since the 1950s, including "Strategic assumption surfacing," "Hypergame analysis," "Drama theory," and "Robustness analysis". I also skipped the specific historical origins of these, such as Kurt Lewin's work in action research.  
* **Why:** Unless your professor specifically asked you to memorize the history of operations research, memorizing 15 alternate frameworks is usually a waste of cognitive space. The slides clearly position Checkland's SSM as the primary, testable framework.

3\. Tangential "Related Fields" Lists

* **What was skipped:** Long lists of related initiatives, NGOs (like the Electronic Freedom Foundation), professional associations (like the Society for Business Ethics), and related professions (like Marketing or Cybersecurity).  
* **Why:** While interesting context for how stakeholder design fits into the broader world, it is highly unlikely you will be tested on naming specific NGOs or related career paths.

4\. Highly Specific Meta-Diagrams

* **What was skipped:** The literal breakdown of the complex flowcharts labeled "Figure 7-1 General working mode of PSMs" and "Figure 7-11 Structure diagram for PSMs".  
* **Why:** Translating complex, spaghetti-logic diagrams into pure text often creates more confusion than clarity. Instead, I extracted the *meaning* of those diagrams—such as how boundary judgments affect the system —and integrated that into the core concepts.

5\. Repetitive Definitions

* **What was skipped:** The slides repeated the definition of Participatory Design under several different names (Cooperative Design, Co-Design, Co-Creation).

## Week 3 Feb 27, 2026 

1\. Definitions & The Role of Requirements

* **Requirements Engineering (RE):** The process of establishing the **services** a customer requires from a system and the **constraints** under which it operates and is developed.  
* **The "Requirement":** Can range from a high-level abstract statement to a detailed mathematical functional specification.  
* **Dual Purpose:**   
  * **User Requirements:** High-level statements in natural language and diagrams for customers.  
  * **System Requirements:** Detailed descriptions of the system's functions, services, and operational constraints. Often forms the basis of the contract between client and developer.

---

2\. Functional vs. Non-Functional Requirements

Functional Requirements (The "What")

* **Definition:** Statements of services the system should provide, how it reacts to specific inputs, and how it behaves in particular situations.  
* **Key Characteristic:** Usually expressed as a **verb** (e.g., "The system *shall* generate a report").  
* **Examples:** Business rules, administrative functions, authorization levels, audit tracking, external interfaces, and reporting.  
* **Completeness & Consistency:** Ideally, requirements should be **complete** (all services defined) and **consistent** (no contradictory definitions).

Non-Functional Requirements (The "How")

* **Definition:** Constraints on the services or functions offered by the system. They often apply to the system as a whole rather than individual features.  
* **Key Characteristic:** Usually expressed as an **attribute** or quality.  
* **Examples:**   
  * **Product:** Usability, Efficiency (performance/space), Reliability, Portability.  
  * **Organizational:** Delivery, Implementation, Standards.  
  * **External:** Interoperability, Ethical, Legislative (Safety/Privacy).  
* **Goal:** To ensure a good user experience and ease of operation.

---

3\. Domain Requirements

* **Definition:** Requirements derived from the specific application domain (e.g., banking, medical, train control) rather than the user's specific needs.  
* **Impact:** If not satisfied, the system may be unworkable.  
* **Challenges:**  
  * **Understandability:** Engineers may not understand the "specialist" language of the domain.  
  * **Implicitness:** Domain experts often forget to mention "obvious" rules because they are so fundamental to their field.

---

4\. The Requirements Engineering Process

The process is iterative and involves four main high-level activities:

1. **Feasibility Study:** Is the system contribution worth the cost?  
2. **Elicitation and Analysis:** Discovering requirements through interaction with stakeholders.  
3. **Specification:** Converting requirements into a standard format.  
4. **Validation:** Checking that the requirements actually define the system the customer wants.

![requirements engineering process cycle, AI generated][image1]

---

5\. Requirements Elicitation & Analysis Techniques

This is the "discovery" phase where you work with stakeholders to learn about the domain and services.

* **Difficulties:** Stakeholders don't know what they want, use their own terminology, or provide conflicting requirements.  
* **Interviewing:**  
  * *Closed interviews:* Based on pre-determined questions.  
  * *Open interviews:* No agenda; exploring issues with stakeholders.  
* **Ethnography:** An observational technique where an analyst immerses themselves in the working environment to see how people actually work (detects "implicit" requirements).

---

6\. Requirements Validation & Management

* **Validation Checks:**  
  * *Validity:* Does it provide the functions that best support customer needs?  
  * *Consistency:* Are there any conflicts?  
  * *Completeness:* Are all functions included?  
  * *Realism:* Can it be implemented with the given budget and technology?  
  * *Verifiability:* Can it be tested?  
* **Requirements Management:** The process of managing changing requirements during the RE process and system development. This involves establishing a "traceability" link between requirements and system design.

| Feature | Functional Requirements | Non-Functional Requirements |
| :---- | :---- | :---- |
| **Focus** | System behavior/services | System properties/constraints |
| **Language** | Verbs (Actions) | Attributes (Qualities) |
| **Example** | "User can search the database" | "Search results must load in \<2s" |
| **Requirement for** | Essential functionality | User experience/Product quality |

## 

Extra  
1\. The Dunning-Kruger Effect "Mountain" Diagram

* **What was skipped:** A detailed breakdown of the "Mount Stupid," "Valley of Despair," and "Plateau of Productivity" chart shown at the start of the deck.  
* **Why:** This is a psychological and pedagogical reflection tool meant to manage student expectations about the learning curve of the course. While helpful for your mindset, it contains zero technical Information Systems content and will not be tested in the context of Requirements Engineering.

2\. Historical Context of Software Failures

* **What was skipped:** References to the "Software Crisis" and why historical projects failed due to poor requirements.  
* **Why:** I converted these into a single "Purpose" statement in the study guide. Memorizing specific historical failure statistics is low-yield; understanding that "Requirements Engineering prevents project failure" is the core takeaway.

3\. Detailed Examples of Specific System Constraints

* **What was skipped:** I summarized the *categories* of Non-Functional Requirements (Product, Organizational, External) rather than listing every single specific example mentioned in the sub-bullets (e.g., the specific ISO standards or specific legislative examples).  
* **Why:** Exams usually ask you to *categorize* a requirement (e.g., "Is 'The system must be compliant with GDPR' a Functional or Non-Functional requirement?"). Memorizing a 20-item list of examples is less effective than understanding the definitions of the categories.

4\. Generic "Process" Flowcharts

* **What was skipped:** Some of the more complex, overlapping diagrams showing the "Spiral" version of the requirements process.  
* **Why:** I consolidated this into the **4 Main Activities** (Feasibility, Elicitation, Specification, Validation). Most exams focus on these four pillars rather than the specific geometry of the spiral model, which is often covered in more detail in General Software Engineering modules.

5\. Interview "Best Practices" List

* **What was skipped:** Soft-skill advice on how to conduct an interview (e.g., "Be open-minded," "Avoid professional jargon").  
* **Why:** These are "common sense" professional skills. In a technical IS exam, you are much more likely to be tested on the *difference* between a "Closed" and "Open" interview or the definition of "Ethnography" than on a checklist of interview etiquette.

## Week 4 Mar 6, 2026

Transition from traditional programming to the OO paradigm.

1\. The Philosophy: Why Object-Orientation?

* **The "Software Crisis":** Software development problems are rarely about algorithms; they are caused by **communication difficulties** and the **management of complexity**.  
* **The Whorfian Hypothesis:** The language we use to express an idea colors the nature of the thought itself. OO uses a language that mimics human perception to manage complexity.  
* **Concepts:** Humans naturally organize the world into "Concepts" (objects).  
  * **Intension:** The definition of a concept.  
  * **Extension:** The set of all objects the concept applies to.

---

2\. OOAD: Definitions & Process

* **Object-Oriented Analysis (OOA):** An investigation of the **problem** (domain) to find and describe objects/concepts.  
  * *Question:* What are the "things" in this system?  
* **Object-Oriented Design (OOD):** Defining software objects and how they **collaborate** to fulfill requirements.  
  * *Question:* How do these "things" work together?  
* **The Goal:** To create a "Map" where the software objects in the solution space closely resemble the real-world objects in the problem space.

---

3\. The Four Pillars of Object-Orientation

1. **Abstraction:** Focusing on the essential characteristics of an object relative to the perspective of the viewer, while ignoring irrelevant details.  
2. **Encapsulation:**   
   * Hiding the internal state and "how" an object works.  
   * **Data \+ Methods:** Data is stored locally; functionality is accessed via a public interface (e.g., setGrade(), getGrade()).  
3. **Inheritance:**   
   * A "Kind-of" relationship.  
   * A subclass (Child) inherits attributes and behaviors from a superclass (Parent).  
   * *Example:* A "Graduate Student" is a kind of "Student."  
4. **Polymorphism:**   
   * The ability of different classes to respond to the same message in different ways.  
   * *Example:* Both In-State Student and Out-of-State Student have a payTuition() method, but the logic inside that method is different for each.

4\. Objects vs. Classes

* **Object:** A specific entity with a unique identity, state (data), and behavior (methods).  
* **Class:** A blueprint, template, or "factory" for creating objects. It defines what data an object will hold and what it can do.  
* **Message Passing:** Objects interact by sending messages to one another. An object's functionality is invoked only when it receives a message.

---

5\. Managing Complexity

OOAD manages complexity through two main organizational structures:

* **The "Kind-of" Hierarchy:** Classification (Inheritance).  
* **The "Part-of" Hierarchy:** Composition (An engine is "part of" a car).

---

6\. OO Programming Languages (Key Differences)

* **C++:** Invented by Bjarne Stroustrup. Adds OO features to C. Requires manual memory management (pointers/malloc).  
* **Java:** Syntax like C++, structure like Smalltalk.  
  * **Garbage Collection:** Automatically manages memory.  
  * **Safety:** No pointers or pointer arithmetic, which reduces "accidental complexity" and bugs.

| Phase | Focus | Output |
| :---- | :---- | :---- |
| **Analysis** | Problem Domain | Requirements, Domain Model, "What" |
| **Design** | Logical Solution | Interaction Diagrams, Class Diagrams, "How" |
| **Construction** | Implementation | Code (Java, C++, etc.) |

Extra  
1\. The "Harry the First-Grader" Metaphor

* **What was skipped:** The slides detailing infant psychological growth, concept formation, and a first-grader named Harry's mental map of water, oceans, crocodiles, and penguins.  
* **Why:** This is purely a teaching metaphor used by the professor to explain how humans naturally group the world into "concepts". 

2\. Textbook References & Bibliographies

* **What was skipped:** The list of specific textbooks and authors on the second slide (e.g., Craig Larman, Terry Quatrani, James Martin).  
* **Why:** Exams test your mastery of the concepts, not your ability to memorize the course's recommended reading list. (I did, however, keep the "Three Amigos" and the "Gang of Four" Gamma reference indirectly, as those names are foundational to OOAD and Design Patterns).

3\. Legacy Language History & Alternative Paradigms

* **What was skipped:** The breakdown of 1st, 2nd, and 3rd generation languages (Fortran, Cobol, PL/I, Pascal) , as well as a list of other programming paradigms (Rule-oriented, Logic-oriented, Constraint-oriented).  
* **Why:** The goal of an OOAD exam is to test your ability to model within the **Object-Oriented paradigm**. Memorizing the timeline of Fortran or the definition of a "Constraint-oriented" paradigm is low-yield trivia for this specific course.

4\. Specific Corporate Methodologies (Trivia)

* **What was skipped:** A list of specific older OO development processes, such as "Fusion" created by Hewlett Packard.  
* **Why:** Knowing that HP created the "Fusion" methodology is pure trivia. Most modern Information Systems exams care that you understand the *difference* between Analysis (understanding the problem) and Design (structuring the solution), regardless of the specific proprietary framework used.

5\. Deep Dives into OMT Models

* **What was skipped:** The specific breakdown of James Rumbaugh's Object Modeling Technique (OMT) into Object Diagrams, State Diagrams, and DataFlow Diagrams.  
* **Why:** While historically important, UML has largely superseded OMT as the industry standard (which you learned in Week 5). Memorizing OMT's specific sub-models is usually unnecessary when your professor is simultaneously teaching you UML Use Cases.

---

## Week 5 Mar 13, 2026

1\. [Unified Modeling Language (UML)](https://www.geeksforgeeks.org/system-design/unified-modeling-language-uml-introduction/) Basics

* **Definition:** An open, graphical standard used for specifying, visualizing, constructing, and documenting software systems.  
* **Origins:** Created by merging methods from Booch, Jacobson, and Rumbaugh (the "Three Amigos") and managed by the Object Management Group (OMG).  
* **Key Characteristics:** It is independent of the implementation language and is a *modeling language*, not a process.  
* **Models vs. Views:**   
  * *Model:* An abstraction describing a subset of a system.  
  * *View:* Depicts selected aspects of a model tailored to a specific stakeholder. UML uses multiple diagrams to represent these different views (e.g., Use Case diagrams, Class diagrams, Sequence diagrams).

---

2\. Use Case Diagram Components

A Use Case diagram represents the external behavior and functional requirements of a system.

* **Actors:** Represent an external entity (user, external system, or physical environment) that communicates with the system. They are placed *outside* the system boundary.  
  * **Primary Actor:** Initiates an interaction and acts on the system to fulfill a goal.  
  * **Secondary Actor:** Is acted on or used by the system to help get its job done.  
* **Use Case:** An oval representing a user goal or pattern of behavior the system exhibits. It is a dialogue between the actor and the system.  
* **System Boundary:** A box shape representing the scope of the system. Use cases are placed *inside* this boundary.

---

3\. Relationships in Use Case Diagrams

* **Association:** The standard line connecting an actor to a use case.  
* **Generalization:** An inheritance relationship between elements of the same type (e.g., a general "Place Order" use case specialized into "Phone Order" and "Internet Order"). Drawn as a solid line with a hollow arrow.  
* **\<\<include\>\>:** Used when behavior is factored out of a base use case *for reuse*. It is not optional.  
  * *Arrow Direction:* Points **TO** the included (used) use case. (e.g., *PurchaseTicket* points to *CollectMoney* ).  
* **\<\<extend\>\>:** Used for exceptional or seldom invoked cases.  
  * *Arrow Direction:* Points **TO** the base (extended) use case. (e.g., *Cancel* points to *Book Room* ).

---

4\. Diagramming Steps & Common Mistakes

**Creation Steps:**

1. List main system functions/user goals.  
2. Draw ovals for use cases.  
3. Draw system boundaries.  
4. Draw actors and connect them.  
5. Specify \<\<include\>\> and \<\<extend\>\> relationships *last* to avoid falling into "process" thinking.

**Mistakes to Avoid:**

* **Drawing Flowcharts:** Use cases are goals, not sequential steps or data flows.  
* **Actor-to-Actor Communication:** Actors should not interact directly with each other on the diagram; they must interact *through* the system.  
* **Granularity:** Do not break use cases down into tiny data-entry tasks (e.g., "Enter date" is a step, not a use case).

---

5\. Use Case Specifications (Descriptions)

The diagram is just an index; the **Use Case Specification** provides the "meat" of the model. All use cases must have a text specification to be useful. It serves as a bridge between stakeholders and developers.

**Flow of Events (Pathways):** Describes in details how the *use case* starts, interacts, and ends, focusing on *what* happens, not *how* (no UI/technical details).

1. **Basic Flow (Happy Path):** The most common pathway depicting a perfect situation where nothing goes wrong.  
2. **Alternate Flow (Alternate Pathway):** A good pathway that successfully achieves the goal, but is just not the most heavily traveled.  
3. **Exception Flow (Unhappy Path):** An error condition important enough to capture (e.g., Invalid PIN).

Extra  
1\. The Granular History of UML & Contributors

* **What was skipped:** The timeline of UML versions (0.8 through 2.0) and the slide detailing 10+ specific contributors (e.g., Meyer for pre/post conditions, Harel for Statecharts, Wirfs-Brock for Responsibilities).  
* **Why:** Unless this is a software engineering history class, exams rarely test which year UML 1.1 was accepted. Knowing the "Three Amigos" (Booch, Jacobson, Rumbaugh) and the Object Management Group (OMG) is usually the maximum historical trivia required.

2\. The "4+1" Architectural Views Diagram

* **What was skipped:** The slide showing the Logical View, Implementation View, Process View, and Deployment View.  
* **Why:** While it is important context to know that UML has different "views", the entire rest of the lecture focuses *exclusively* on the Use Case View. Memorizing the other four views is usually reserved for a later lecture on system architecture.

3\. The Hand-Drawn "Find the Mistake" Exercises

* **What was skipped:** The messy, hand-drawn slides of the "Skier's Luck Hotel" and "Resort" where you were asked to identify mistakes.  
* **Why:** Describing bad, hand-drawn diagrams in text is confusing and unhelpful for studying. Instead, I extracted the *actual lessons* from those exercises and put them in the **"Common Mistakes to Avoid"** section of your study guide (e.g., the "Spider" actor, internal system functions, and functional decomposition).

4\. The Exhaustive List of All UML Diagrams

* **What was skipped:** The "UML Baseline" slide listing Sequence, Collaboration, Activity, State Transition, and Deployment diagrams.

5\. The Specific Examples (Vending Machine, Hospital, etc.)

* **What was skipped:** The step-by-step Vending Machine and Hospital Reception diagrams.  
* **Why:** Exams will almost certainly give you a *brand new* business scenario and ask you to draw it or evaluate it. Memorizing the Vending Machine diagram won't help you; understanding *why* "Restock Machine" is connected to the "Supplier" actor will. I focused your guide strictly on the rules of the relationships.

---

MIDTERM

## Week 6 Mar 20, 2026

1\. Core Concepts: UML and Object-Oriented Design

* **Definition:** The Unified Modeling Language (UML) Class diagram is a type of static structure diagram used to construct and visualize object-oriented systems.  
* **What it Shows:** It illustrates the system's classes, their attributes, operations (methods), and the relationships among objects.

**Classes vs. Objects**

* **Class:** A blueprint used to create an object. It describes what an object will be (its type), but it is not the object itself.  
* **Object:** A usable instance of a class. Because objects are built from the same class blueprint, they contain the same components. Objects encapsulate states (properties/attributes) and behaviors (methods/operations).

---

2\. UML Class Notation & Structure

A standard UML class is drawn as a box with three distinct partitions. The **class name** is the only mandatory piece of information required in a class diagram.

| Partition | Component | Description | Mapping to Code |
| :---- | :---- | :---- | :---- |
| **First** | **Name** | Contains the name of the class. Abstract class names are shown in italics. | N/A |
| **Second** | **Attributes** | Represents the state of the class. The attribute type is shown after a colon (e.g., \-length: int). | Maps onto member variables/data members. |
| **Third** | **Operations** | Represents the behaviors or services the class provides. Return types are shown after a colon at the end of the signature. | Maps onto class methods. |

---

3\. Visibility & Parameter Directionality

UML uses specific symbols to define how attributes and operations can be accessed, as well as how parameters behave.

**Visibility Indicators**

* \+ denotes **Public** attributes or operations.  
* \- denotes **Private** attributes or operations.  
* \# denotes **Protected** attributes or operations.

**Parameter Directionality** Directionality is shown before the parameter name in an operation's signature.

* in: The parameter is passed to the method by the caller.  
* out: The parameter is not set by the caller; it is modified by the method and passed back out.  
* inout: The parameter is passed by the caller, possibly modified by the method, and then passed back.

---

4\. Perspectives of Class Diagrams

Class diagrams can be interpreted differently depending on the stage of the development process. The chosen perspective affects the level of detail and relationships shown.

* **Conceptual:** Used early in development (domain modeling) to represent concepts in the domain.  
* **Specification:** Focuses on the interfaces of Abstract Data Types (ADTs) and is typically heavily used in analysis models.  
* **Implementation:** Evolved during design model development, this describes exactly how classes will implement their interfaces.

---

5\. Relationships Between Classes (Crucial Exam Material)

Relationships precisely convey how code should be implemented. A class may be involved in one or multiple relationships.

| Relationship | Symbol/Notation | Definition & Key Characteristics |
| :---- | :---- | :---- |
| **Inheritance (Generalization)** | Solid line with a hollow arrowhead pointing to the parent. | An "is-a" taxonomic relationship. A specific child class inherits the features of a general parent class. |
| **Association** | Solid line connecting classes. | A structural link between two peer classes. Typically named using a verb or verb phrase. Includes **Cardinality** (1 to 1, 1 to many, many to many). |
| **Aggregation** | Solid line with an **unfilled diamond** at the aggregate class end. | A special association representing a "part of" relationship. Objects involved have separate lifetimes. |
| **Composition** | Solid line with a **filled diamond** at the composite (whole) end. | A stronger, special type of aggregation. The parts are destroyed when the whole is destroyed; they live and die together. |
| **Dependency** | Dashed line with an open arrow. | Occurs when an object of one class uses an object of another class in a method, but does not store it as a field. Changes to one class may force changes to the dependent class. |
| **Realization** | Dashed line with a hollow arrowhead (implied by context). | The relationship between an interface (blueprint) and the class that provides its implementation-level details. |

---

6\. Analysis vs. Design Class Diagrams

* **Conceptual/Analysis Diagrams:** Created iteratively by modeling classes, responsibilities, associations, inheritance relationships, composition associations, and vocabularies. These focus more on concepts and less on strict programming types.  
* **Design Diagrams:** Iteratively model the same components as analysis diagrams, but add **interfaces**. These contain high implementation-level detail like strict data types, return types, and visibility.

---

7\. Benefits of Class Diagrams

* They provide a clear view of the system's architecture, including classes, methods, and relationships.  
* They display component connectivity (like inheritance and association) for stakeholders.  
* They act as a visual communication tool to bridge gaps between technical and non-technical teams.  
* They guide developers during coding to ensure the implementation matches the intended design.  
* They can be used in development tools to automatically generate code, which saves time and reduces manual errors.

[image1]: <data:image/jpeg;base64,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>