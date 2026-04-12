# A Wedding Website That Doesn't Cost $400/year

Because The Knot, Zola, WithJoy, and every other member of the Wedding
Industrial Complex would very much like to charge you a subscription fee,
upsell you napkin rentals, harvest your guest list for targeted ads, and
plaster their branding all over *your* love story.

This is a free, self-hosted, open-source wedding website built with React,
Express, and a healthy disdain for predatory SaaS pricing. Fork it. Make it
yours. Spend that $400 on literally anything else — like an extra case of wine
for your reception.

---

## Features

- **Password-Protected** — Keep your wedding details private from internet
  strangers and exes. The password is verified securely on the backend
  (Express), not leaked into your frontend JavaScript bundle like certain
  billion-dollar wedding platforms would do.
- **Interactive Polaroid Gallery** — Fuji Instax-style polaroids peek out from
  the edges of the page and swoop into view as visitors scroll. Hover or tap to
  pull them fully onto the page. Because your engagement photos deserve better
  than a stock photo grid.
- **Embedded Google Map** — Stylized to match your color palette. No "Powered
  by WeddingWire" watermark in sight.
- **Responsive Schedule Cards** — A clean weekend timeline with event tags
  (Optional, Extra Optional) so your guests know which events are mandatory and
  which are "show up if you want, we love you either way."
- **Dockerized & Self-Hosted** — No monthly fees. No vendor lock-in. No
  surprise price hikes two months before your wedding. Deploy it to your own
  infrastructure and own your data. Destroy it when you want.
- **GitHub Actions CI/CD** — Push to `main`, get a fresh Docker image. That's
  it. That's the deployment pipeline.

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v24+ recommended, but v18+ should work)
- [Docker](https://www.docker.com/) (optional, for containerized deployment)

### 1. Clone & Install

```bash
git clone https://github.com/paulkiernan/alexispaul.git live-laugh-love
cd live-laugh-love
npm install
```

### 2. Configure Your Password

Create a `.env` file in the root:

```bash
LOGIN_PASSWORD=live-laugh-love
```

### 3. Run Locally

```bash
npm run dev
```

This starts the Vite dev server with hot-reload. The password protection won't
work in dev mode (there's no Express server), so you'll see the main site
directly. To test the full login flow locally:

```bash
npm run build
LOGIN_PASSWORD=yourpassword node server.js
```

Then visit `http://localhost:80`.

### 4. Make It Yours

The important files to personalize:

| File | What to change |
|------|---------------|
| `src/components/MainSite.jsx` | Your names, dates, venue, schedule, copy, and the scattered photos array |
| `src/components/SplashPage.jsx` | The login page design and any welcome messaging |
| `src/App.jsx` | Top-level app wiring (probably leave this alone) |
| `src/components/Polaroid.jsx` | The scroll animation physics (tinker if you want) |
| `src/App.css` | CSS custom properties — color palette lives here |
| `src/index.css` | Global typography and base styles |
| `public/` | Your hero photo, favicon, and any static assets |
| `index.html` | Page title, meta description, favicon reference |

#### Replacing Placeholder Polaroids

The `scatteredPhotos` array in `MainSite.jsx` contains 32 entries pointing to
`picsum.photos` placeholders. Replace the `src` values with paths to your own
images:

```jsx
{ id: 1, top: '1%', origin: 'left', rotation: -12, src: '/photos/beach-proposal.jpg' },
```

Drop your photos in `public/photos/` and they'll be served statically.

---

## 🐳 Docker Deployment

### Build the Image

```bash
docker build -t wedding-site .
```

### Run It

```bash
docker run -p 8080:80 -e LOGIN_PASSWORD=yourpassword wedding-site
```

Visit `http://localhost:8080`. Done. No Squarespace subscription required.

### Multi-Architecture Builds

The included GitHub Action (`.github/workflows/docker-publish.yml`) builds for
both `linux/amd64` and `linux/arm64`, so it runs on everything from cloud VMs
to a Raspberry Pi on your bookshelf.

---

## ☸️ Kubernetes Deployment (Optional)

If you're the kind of person who runs a homelab (and you're getting married, so
clearly you enjoy commitment), this project is designed to deploy via ArgoCD
with SOPS-encrypted secrets.

### Secret Management

Create a `SopsSecret` manifest for your password:

```yaml
apiVersion: isindir.github.com/v1alpha3
kind: SopsSecret
metadata:
  name: your-wedding-auth
  namespace: your-wedding
spec:
  secretTemplates:
    - name: your-wedding-auth
      stringData:
        LOGIN_PASSWORD: "your-secret-password"
```

Encrypt it with SOPS, commit it to your GitOps repo, and reference it in your
deployment:

```yaml
envFrom:
  - secretRef:
      name: your-wedding-auth
```

---
```

---

## 🪪 License

Do whatever you want with this. MIT. Copy it, fork it, tear it apart. If it
saves you from giving The Knot another cent, it's done its job.

---

*Built with love, React, and the radical belief that a wedding site should cost $0.*
