# symmetrical-disco

Two standalone static pages. No build step, no dependencies — open either file directly in a browser.

## Pages

- **index.html** — A Pepsi brand website clone. Sections: hero, marquee ticker, products grid (Original, Zero Sugar, Wild Cherry, Mango, Lime, Diet), flavors spotlight, culture cards (music / sports / gaming), a history timeline (1893 → 2023), a sustainability section, a newsletter signup form, and a footer. Styled by `css/styles.css`; interactive behavior (sticky nav, mobile nav toggle, scroll-reveal animations, newsletter form, nav link highlighting) lives in `js/main.js`. The Inter typeface is loaded from the Google Fonts CDN; everything else is local.
- **psychedelic.html** — A generative artwork page: an animated canvas of plasma blobs, spirographs, pulsing rings, Lissajous curves, and orbiting particles. Self-contained (inline `<style>` and `<script>`, no external assets). Move the mouse to influence the animation; click to shift the color palette. Linked from the "Culture" column of the index page footer as "Psychedelic Art".
