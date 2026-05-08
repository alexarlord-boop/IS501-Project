# Flowchart — Order Fulfillment Process

**FreshBakes Bakery | IS501 Project**

This flowchart traces the complete journey of a customer order from placement through to fulfillment. It includes the critical **stock availability check**, **Stripe payment handling**, **inventory deduction**, and the **collection vs. delivery** branch.

```mermaid
flowchart TD
    A(["👤 Customer Places Order"]) --> B["System Validates Order Details"]
    B --> C{"All Items In Stock?"}

    C -->|No| D["Display Out-of-Stock Message"]
    D --> E["Suggest Alternatives / Remove Item"]
    E --> F{"Customer Accepts?"}
    F -->|No| G(["❌ Order Cancelled"])
    F -->|Yes| C

    C -->|Yes| H["Calculate Total (inc. Loyalty Discount)"]
    H --> I["Redirect to Stripe Checkout"]
    I --> J{"Payment Successful?"}

    J -->|No| K["Display Payment Error"]
    K --> L{"Retry?"}
    L -->|Yes| I
    L -->|No| G

    J -->|Yes| M["Stripe Webhook Received (payment_intent.succeeded)"]
    M --> N["Deduct Inventory Atomically"]
    N --> O["Generate Unique Order Reference"]
    O --> P["Award Loyalty Points to Customer"]
    P --> Q["Send Confirmation Email (within 30 s)"]
    Q --> R["Add to Baker Order Queue"]

    R --> S{"Order Type?"}
    S -->|"Collection"| T["Baker Prepares Order"]
    S -->|"Delivery"| T

    T --> U{"Baker Marks Order Ready?"}
    U -->|"Yes – Collection"| V["Notify Customer: Ready for Collection"]
    U -->|"Yes – Delivery"| W["Admin Assigns to Delivery Staff"]

    W --> X["Staff Completes Delivery & Marks Delivered"]
    V --> Y(["✅ Order Fulfilled"])
    X --> Y
```

## Process Steps Summary

| Step | Decision / Action | System Requirement |
|------|------------------|--------------------|
| Stock check | Is every item in the basket available? | SR-F08 — blocks checkout when stock = 0 |
| Payment | Stripe checkout; retry on failure | SR-F10 — logs all payment outcomes |
| Webhook received | `payment_intent.succeeded` triggers backend | SR-F01 — atomic inventory deduction |
| Inventory deduction | Stock decremented immediately on payment | SR-F01 |
| Order reference | Unique reference generated per confirmed order | SR-F03 |
| Loyalty points | Points awarded at order completion rate | SR-F06 |
| Confirmation email | Dispatched within 30 seconds of payment | SR-F02 |
| Baker queue | Order appears in dashboard (auto-refresh every 30 s) | SR-F04 |
| Collection branch | Customer notified when order is ready | SR-F09 status: Ready |
| Delivery branch | Admin assigns to driver; staff marks delivered | SR-F09 status: Out for Delivery → Delivered |
