### Assumption
“home-new-avi-v2” refers to the route at `app/(homes)/home-new/page.jsx`. Proceeding with a read-only audit (Phase 1) for that page only. No code changes.

### Phase 1 — Audit and Baseline (Home New)
- **Goal**: Inventory all render-blocking CSS and external font CSS; map them to their origins; identify what’s needed for above-the-fold vs can be deferred; define baseline metrics to track LCP/FCP improvements.

### 1) Global render‑blocking CSS and where it comes from
The following CSS is imported globally, so it ships on every route and blocks first paint:

```3:11:app/layout.js
import "../public/assets/css/main.scss";
import "swiper/css/virtual";
import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/effect-fade";
import "../public/assets/custom.scss";

import "photoswipe/dist/photoswipe.css";
import "rc-slider/assets/index.css";
```

`main.scss` itself pulls in multiple large bundles and third-party CSS:

```3:16:public/assets/css/main.scss
@import url("./uni-core.min.css");

@import url("./unicons.min.css");
@import url("./prettify.min.css");
@import url("./swiper-bundle.min.css");

@import url("./theme/main.min.purge.css");

@include meta.load-css("theme/theme-three.min.purge.scss");
@include meta.load-css("theme/theme-four.min.purge.scss");
@include meta.load-css("theme/theme-five.min.purge.scss");
@include meta.load-css("theme/theme-six.min.purge.scss");
```

Notes:
- `main.min.purge.css` is ~205KB; each theme `.scss` is ~227–230KB before build (Next will extract/minify, but they still contribute).
- `swiper-bundle.min.css`, `photoswipe.css`, and `rc-slider/assets/index.css` are included even when not used above the fold on Home.

### 2) External Google Fonts CSS (render‑blocking)
Multiple CSS files import `fonts.googleapis.com`:

```2:2:public/assets/css/theme/main.min.purge.css
@import url(https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,300..700;1,300..700&family=Inter:wght@300..700&family=IBM+Plex+Sans+Arabic:wght@400;500;700&display=swap);
```

```2:2:public/assets/css/theme/theme-four.min.purge.scss
@import url(https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,300..700;1,300..700&family=Inter:wght@300..700&family=IBM+Plex+Sans+Arabic:wght@400;500;700&display=swap);
```

```2:2:public/assets/css/theme/theme-five.min.purge.scss
@import url(https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,300..700;1,300..700&family=Inter:wght@300..700&family=IBM+Plex+Sans+Arabic:wght@400;500;700&display=swap);
```

```2:2:public/assets/css/theme/theme-six.min.purge.scss
@import url(https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,300..700;1,300..700&family=Inter:wght@300..700&family=IBM+Plex+Sans+Arabic:wght@400;500;700&display=swap);
```

```2:2:public/assets/css/fonts.css
@import url('https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,300..700;1,300..700&family=Inter:wght@300..700&family=IBM+Plex+Sans+Arabic:wght@400;500;700&display=swap');
```

Impact:
- The external CSS response from Google Fonts blocks first render and adds DNS/TLS overhead. This matches the audit entry shared.

### 3) Home New route structure and above‑the‑fold
Order of sections shows what’s likely above/below the fold:

```25:41:app/(homes)/home-new/page.jsx
        <div className="theme-4">
          <div className="page-wrapper">
            <div className="bp-xs bp-sm bp-md bp-lg dom-ready bp-xxl-max bp-xl uni-body panel uni-body panel bg-white text-tertiary-900 dark:bg-tertiary-800 dark:text-tertiary-200 overflow-x-hidden disable-cursor">
              <Header7 />
              <div id="wrapper" className="wrap">
                <Hero />
                <Brands />
                <Features />
                <Tools />
                <Features2 />
                <Pricing />
                <Testimonials />
                <Faqs />
                <Blogs />
                <Cta />
              </div>
              <Footer7 />
            </div>{" "}
          </div>
        </div>
```

- Above‑the‑fold candidates: `Header7`, `Hero` (primary). Others are likely below the fold on initial viewport.

LCP element candidate (hero visual):

```269:274:components/homes/home-new/Hero-3.jsx
<Image
  alt="Dashboard Lexend"
  src="/assets/images/template/dashboard.webp"
  width={1353}
  height={978}
/>
```

### 4) Library CSS usage on Home New
Swiper is used by sections that are likely below the fold:

```6:6:components/homes/home-new/Testimonials.jsx
import { Swiper, SwiperSlide } from "swiper/react";
```

```6:7:components/homes/home-new/Blogs.jsx
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
```

```6:6:components/homes/home-new/Pricing.jsx
import { Swiper, SwiperSlide } from "swiper/react";
```

Observation:
- Swiper CSS is globally imported in `app/layout.js` and also via `public/assets/css/main.scss`. It’s not required for hero’s first paint and should be moved out of the critical path in later phases.
- `photoswipe.css` and `rc-slider/assets/index.css` are globally loaded but not used on this page’s above‑the‑fold (and may not be used at all on Home). They are strong candidates for deferral.

### 5) Inventory summary (blocking, source, above‑the‑fold need)
- **CSS bundles from `main.scss`**:
  - `uni-core.min.css` — global base; partly needed for layout/typography.
  - `unicons.min.css` — icon font; not strictly needed to render hero text; defer possible.
  - `prettify.min.css` — code formatting; not needed on Home; defer/remove.
  - `swiper-bundle.min.css` — not needed for hero; defer and scope to Swiper components.
  - `theme/main.min.purge.css` — base theme; some subset needed; bulk can be deferred.
  - Multiple theme variants (`theme-three/four/five/six`) — only one is active; others should not load for Home; currently included via `meta.load-css` so they contribute to CSS extraction.
- **Global library CSS in `app/layout.js`**:
  - `swiper/css*` — not needed for hero; defer/scope.
  - `photoswipe/dist/photoswipe.css` — unused on Home; defer/scope.
  - `rc-slider/assets/index.css` — unused on Home; defer/scope.
- **External font CSS**:
  - Multiple `@import` of `fonts.googleapis.com` across theme files and `fonts.css` — render‑blocking; replace with self‑hosted fonts in later phases.

### 6) Baseline metrics to capture (no changes yet)
- Lighthouse Mobile and Desktop on `/(homes)/home-new`
  - LCP, FCP, TBT, CLS, # of render‑blocking CSS requests, total blocking CSS KB
- WebPageTest (Mobile 4G, first view)
  - Filmstrip; confirm which CSS requests block first paint
- DevTools Coverage on initial load to quantify unused CSS
- Network waterfall to map hashed CSS chunks (e.g., `9c1ee8....css`, `ba5338....css`) back to sources above

What to expect from later phases (not doing now):
- Eliminate Google Fonts external CSS.
- Inline a tiny critical CSS for header/hero; defer everything else.
- Move Swiper/PhotoSwipe/rc-slider CSS into their components and lazy-load below fold.

### Summary
- Home New is blocked by large global CSS and external Google Fonts CSS. Swiper/PhotoSwipe/rc-slider styles are globally loaded despite not needed for the hero LCP. `main.scss` pulls in multiple theme layers and third‑party bundles, causing multiple hashed CSS files in the critical path. Baseline metrics defined; component/library usage mapped to enable safe deferral in the next phases.


