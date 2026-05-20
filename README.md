# VGO — Vending Solutions, Kuwait

Marketing website for VGO Vending Solutions. Built as a single-page React prototype loaded directly via Babel-in-browser — no build step required.

**Live:** [vgokw.com](https://vgokw.com) _(once Firebase Hosting is set up)_

---

## Project structure

```
├── index.html              # entry point (Firebase serves this)
├── VGO Website.html        # mirror — used by the design tool, ignored on deploy
├── styles.css              # design tokens + shared styles
├── tweaks-panel.jsx        # in-page tweak panel scaffold
├── app.jsx                 # React app entry + router
├── src/
│   ├── shared.jsx          # data, helpers, reusable components
│   ├── machine3d.jsx       # 3D SVG vending machine render
│   ├── nav.jsx             # header + footer
│   ├── home.jsx            # home page + 3 hero variants
│   └── pages.jsx           # About, Solutions, Locations, Business, Sustainability, FAQ, Contact
└── assets/
    ├── vgo-logo.png        # primary logo (yellow bg version)
    ├── vgo-logo-dark.png   # white/yellow logo for dark surfaces
    ├── vgo-machine-photo.png
    └── machines/           # per-category catalog photos
```

---

## First-time deploy to Firebase Hosting

Prerequisites: a Firebase project (create one at https://console.firebase.google.com), and the Firebase CLI installed locally:

```bash
npm install -g firebase-tools
firebase login
```

Then from the project root:

```bash
# 1. point .firebaserc at your project id (edit the "default" value)

# 2. one-time wiring + first deploy
firebase deploy --only hosting
```

You'll get a live URL like `your-project.web.app`. To use vgokw.com, add it under
**Hosting → Add custom domain** in the Firebase Console.

---

## Auto-deploy on every `git push` (recommended)

Run this once locally:

```bash
firebase init hosting:github
```

Answer **Yes** to "Set up automatic builds and deploys with GitHub?" and pick
`alahnomi/vgo` as the repo. Firebase writes a `.github/workflows/` file. From then
on, every push to `main` deploys to production; every PR gets a preview URL.

---

## Updating the site

1. Make edits in this design tool.
2. Download the project (or use the GitHub integration to pull changes).
3. Locally:
   ```bash
   git add .
   git commit -m "update: <what changed>"
   git push
   ```
4. Firebase Action picks it up — live within ~60 seconds.

---

## Running locally

No build step. Just serve the folder:

```bash
npx serve .
# or
python3 -m http.server 8000
```

Open `http://localhost:8000/`.

---

© 2026 VGO Vending Solutions · Kuwait
