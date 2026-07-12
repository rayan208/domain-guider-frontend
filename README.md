# Domain Guider

**Domain Guider** is a frontend web app that helps students and developers explore different fields (domains) within Computer Science — like Web Development, AI/ML, Cybersecurity, Blockchain, and more — in one clean, single-page interface. Instead of clicking through separate HTML pages for every domain, everything loads dynamically in place.

🔗 **Live Demo:** [domain-guider-frontend.vercel.app](https://domain-guider-frontend.vercel.app)

---

## ✨ Features

- **Single-Page Navigation** — Domain details are shown dynamically on the same page without full-page reloads or separate HTML files.
- **Domain Cards** — Browse multiple CS domains (e.g., Web Dev, AI/ML, Cybersecurity, Blockchain, etc.) presented as interactive cards.
- **Smooth Animations** — Scroll and entrance animations powered by AOS (Animate On Scroll).
- **Clean Iconography** — Bootstrap Icons used throughout for a consistent, modern look.
- **Responsive Design** — Built with Tailwind CSS utility classes for a mobile-friendly layout.

> Note: Feature list reflects the current state of the project and may expand as development continues.

---

## 🛠️ Tech Stack

| Category      | Tools / Libraries              |
|---------------|---------------------------------|
| Styling       | Tailwind CSS (v4)               |
| Animations    | AOS (Animate On Scroll)         |
| Icons         | Bootstrap Icons                 |
| Language      | JavaScript                      |
| Build/Deploy  | Vercel                          |
| CI            | GitHub Actions (`.github/workflows`) |

---

## 📁 Project Structure

```
domain-guider-frontend/
├── .github/workflows/   # CI/CD workflow configuration
├── dist/                # Production build output
├── src/                 # Source files (JS, CSS, components)
├── package.json         # Project dependencies
├── tailwind.config.js   # Tailwind CSS configuration
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) installed (v16+ recommended)
- npm (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/rayan208/domain-guider-frontend.git

# Navigate into the project folder
cd domain-guider-frontend

# Install dependencies
npm install
```

### Run Tailwind (development build)

```bash
npx @tailwindcss/cli -i ./src/input.css -o ./dist/output.css --watch
```

> Adjust the input/output paths above if your actual file names differ — update this section once your build script is finalized in `package.json`.

### Deployment
This project is deployed on **Vercel**. Pushing to the `main` branch triggers the GitHub Actions workflow and updates the live site.

---

## 🗺️ Roadmap

- [ ] Add more CS domain categories
- [ ] Add search/filter functionality for domains
- [ ] Improve mobile responsiveness further
- [ ] Add unit/UI testing

---

## 🤝 Contributing

This is currently a personal learning project, but suggestions and feedback are welcome. Feel free to open an issue if you spot a bug or have an idea.

---

## 👤 Author

**Rayan** — BS-IT Student, NUML Multan
GitHub: [@rayan208](https://github.com/rayan208)

---

## 📄 License

This project currently has no license specified. Add a `LICENSE` file (e.g., MIT) if you want others to freely reuse the code.
