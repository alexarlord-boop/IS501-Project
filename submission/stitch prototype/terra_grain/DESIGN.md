```markdown
# Design System Strategy: The Sun-Drenched Atelier

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Sun-Drenched Atelier."** 

We are moving away from the "generic food app" aesthetic to create a high-end digital editorial experience. This system should feel like a boutique bakery in a Mediterranean coastal town—warm, tactile, and deeply intentional. We avoid the rigid, boxy layouts of standard e-commerce. Instead, we utilize **The Layered Parchment** approach: elements should feel like they are resting on one another, using soft tonal shifts and generous negative space to guide the eye, rather than harsh structural lines.

By embracing intentional asymmetry—such as overlapping a high-resolution product shot over a text block—we create a sense of artisan craft. This isn't just an interface; it's a digital invitation to a tactile, culinary experience.

---

## 2. Colors & Surface Philosophy
The palette is rooted in the earth: clay, flour, and greenery. We strictly avoid "digital" blues and corporate grys, opting instead for the depth of **Espresso (#2C1A0E)** for text and **Terracotta (#99420D)** for action.

### The "No-Line" Rule
To maintain a premium, artisanal feel, **1px solid borders are prohibited for sectioning.** Boundaries must be defined solely through background color shifts or subtle tonal transitions.
*   **Surface:** Use `surface` (#fcf9f4) as the base canvas.
*   **Sectioning:** To separate sections, shift to `surface-container-low` (#f6f3ee) or `surface-container` (#f0ede9).

### Surface Hierarchy & Nesting
Treat the UI as a series of stacked materials. 
1.  **Level 0 (Canvas):** `surface`
2.  **Level 1 (Sub-sections):** `surface-container-low`
3.  **Level 2 (Cards/Containers):** `surface-container-lowest` (#ffffff) to provide a "pop" of clean white against the parchment background.

### The "Glass & Grain" Rule
For floating navigation bars or overlay modals, use **Glassmorphism**. Apply `surface` with 80% opacity and a `backdrop-filter: blur(16px)`. This mimics the look of a dusted bakery window and prevents the UI from feeling "heavy."

### Signature Textures
Main CTAs should not be flat. Use a subtle linear gradient from `primary` (#99420d) to `primary_container` (#b95925) at a 135-degree angle to give the terracotta a "fired-clay" depth.

---

## 3. Typography: Editorial Authority
The typography is a dialogue between the elegance of the old world and the clarity of the new.

*   **Display & Headlines (Playfair Display):** These are our "Artisan" moments. Use `display-lg` for hero statements. Headlines should always feel editorial—don't be afraid of large-scale contrasts.
*   **Body & Titles (Inter):** These are our "Functional" moments. Inter provides a clean, modern counter-balance to the serif headlines.
*   **Labels (Inter Medium, Uppercase):** To evoke the feel of high-end packaging, all buttons and small labels should use `label-md` in uppercase with a `0.05rem` letter-spacing.

---

## 4. Elevation & Depth
In this system, depth is organic, not artificial. We use **Tonal Layering** as the primary driver of hierarchy.

*   **The Layering Principle:** Place a `surface-container-lowest` card on a `surface-container-low` background. This creates a "soft lift" that feels like a sheet of paper on a stone counter.
*   **Ambient Shadows:** When a floating effect is required (e.g., a "Buy Now" FAB), use an extra-diffused shadow. 
    *   *Shadow Color:* Use a 10% opacity version of `on-surface` (#1c1c19). 
    *   *Spec:* `0px 20px 40px rgba(28, 28, 25, 0.06)`.
*   **The "Ghost Border":** If a border is required for accessibility on an input, use `outline-variant` (#dcc1b5) at 20% opacity. Never use 100% opaque borders.

---

## 5. Components

### Buttons
*   **Primary:** `rounded-full`, Background: Terracotta Gradient, Text: `on-primary` (#ffffff).
*   **Secondary:** `rounded-full`, Background: `secondary_container` (#f0e1c3), Text: `on-secondary_fixed` (#221b08).
*   **Tertiary:** No background. Playfair Display, italicized, with a small Terracotta underline (2px) to signify an "Artisan Link."

### Cards & Lists
*   **Layout:** Strictly forbid divider lines. Use `80px` (or `spacing-xl`) of vertical whitespace between list items.
*   **Visuals:** Cards use `rounded-2xl` (1.5rem). They should utilize the "Layering Principle" (White card on Cream background) rather than heavy shadows.

### Input Fields
*   **Styling:** `rounded-xl` (3rem), Background: `secondary_container` (#f0e1c3) at 50% opacity. 
*   **Focus State:** A 2px smooth transition to `primary` (#99420d).

### Status Badges (The "Mediterranean Harvest" Palette)
Instead of standard bright colors, use these muted, food-safe tones:
*   **Pending:** `secondary_fixed` (Warm Wheat)
*   **Preparing:** `tertiary_fixed_dim` (Olive)
*   **Ready:** `tertiary` (Deep Forest)
*   **Urgent:** `error` (Deep Red)

### Additional Component: The "Artisan Tray" (Bottom Sheet)
For mobile item selection, use a bottom sheet with a `rounded-t-xl` (3rem) radius. The handle should be a subtle `outline-variant` horizontal pill.

---

## 6. Do's and Don'ts

### Do:
*   **Embrace Whitespace:** Treat the screen like a high-end magazine layout. Give the bread photos room to breathe.
*   **Overlap Elements:** Let a product image break the grid and slightly overlap a header for a custom, boutique feel.
*   **Use Soft Caps:** Ensure all containers use the defined `roundedness` scale to maintain the "warm/trustworthy" vibe.

### Don't:
*   **Don't use Gray:** If you need a neutral, use `secondary` or `outline` tokens. Gray feels cold; we want the warmth of a pre-heated oven.
*   **Don't use Dividers:** If you feel the urge to draw a line, try adding 24px of whitespace instead.
*   **Don't Center Everything:** Modern-Mediterranean design thrives on a sophisticated, off-center balance. Use asymmetrical grids for a more "hand-crafted" look.