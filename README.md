# 📦 Mini Web Apps — Calculator & To-Do List

Two standalone frontend web applications built with **React** (via CDN), **Tailwind CSS**, and **Babel**. No build tools, no npm install — just open the HTML file and go.

---

## 📁 Project Structure

```
project/
├── calculator.html   # Calculator app
├── todo.html         # To-Do List app
└── README.md         # This file
```

---

## 🚀 Getting Started

No installation or setup is required. Both apps run entirely in the browser.

**Steps:**
1. Download or clone this project folder.
2. Open `calculator.html` or `todo.html` directly in any modern web browser (Chrome, Firefox, Edge, Brave).
3. That's it — the apps work offline too, as long as you have an internet connection the first time to load the CDN resources.

> ⚠️ **Note:** The apps rely on CDN-hosted libraries (React, Tailwind, Babel). An internet connection is required on first load.

---

## 🧮 App 1 — Calculator (`calculator.html`)

A fully functional calculator with a dark industrial design.

### Features
- Basic arithmetic: addition (`+`), subtraction (`−`), multiplication (`×`), division (`÷`)
- **Chained calculations** — e.g., `5 + 3 × 2` evaluates step by step
- **Expression display** — shows the ongoing calculation above the main result
- **Backspace (⌫)** — delete the last digit entered
- **AC (All Clear)** — resets everything
- **Sign toggle (+/−)** — switch between positive and negative
- **Decimal point** support
- **Division by zero** — handled gracefully, shows `Error`
- **Active operator highlight** — the currently selected operator glows orange
- Responsive to both mouse clicks and touch on mobile

### Tech Used
| Library | Version | Purpose |
|---------|---------|---------|
| React | 18 | UI state management |
| ReactDOM | 18 | Rendering |
| Babel Standalone | latest | JSX compilation in browser |
| Tailwind CSS | latest | Utility-class styling |
| Google Fonts — Share Tech Mono | — | Display font |
| Google Fonts — Rajdhani | — | Body font |

### Design
Dark theme with layered gradients, green display text, orange operator buttons, and a green equals button. Modelled after a physical calculator layout (4×5 button grid).

---

## ✅ App 2 — To-Do List (`todo.html`)

A clean task manager with a warm paper-toned aesthetic.

### Features
- **Add tasks** — type in the input field and press `Enter` or click `+ Add`
- **Mark as complete** — click the circle checkbox; completed tasks get a strikethrough and green checkmark
- **Delete tasks** — click the `×` button on any task
- **Filter tasks** — switch between `All`, `Pending`, and `Completed` views
- **Live badge** — shows the count of pending tasks on the Pending filter tab
- **Clear completed** — one-click button to remove all finished tasks
- Comes with 3 sample tasks pre-loaded so the UI is not empty on first open

### Tech Used
| Library | Version | Purpose |
|---------|---------|---------|
| React | 18 | UI state management |
| ReactDOM | 18 | Rendering |
| Babel Standalone | latest | JSX compilation in browser |
| Tailwind CSS | latest | Utility-class styling |
| Google Fonts — DM Sans | — | Body font |
| Google Fonts — Playfair Display | — | Heading font |

### Design
Light, warm background (`#f0ede8`) with a white card, serif heading, and indigo/green accents. Minimalist and modern — optimised for readability.

---

## 🌐 Browser Compatibility

| Browser | Supported |
|---------|-----------|
| Google Chrome | ✅ |
| Mozilla Firefox | ✅ |
| Microsoft Edge | ✅ |
| Brave | ✅ |
| Safari | ✅ |
| Internet Explorer | ❌ (not supported) |

---

## ⚙️ CDN Dependencies

Both files load these libraries from CDN at runtime:

```html
<!-- React -->
<script src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

<!-- Babel (for JSX) -->
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

<!-- Tailwind CSS -->
<script src="https://cdn.tailwindcss.com"></script>
```

---

## 🛠️ Possible Improvements

- Add **keyboard support** to the calculator (number keys, operators, Enter for `=`)
- Add **localStorage** to the To-Do app so tasks survive page refresh
- Add **due dates** or **priority levels** to tasks
- Add **dark mode toggle** to the To-Do app
- Replace CDN with a proper bundler (Vite or CRA) for production use

---

## 👨‍💻 Author Notes

This project was built as a student assignment to practice:
- React functional components and hooks (`useState`, `useRef`)
- Component-level state management without Redux or Context
- CDN-based React setup (no build tools)
- Tailwind CSS utility classes for rapid UI styling
- Clean, readable JSX structure

---

## 📄 License

This project is open for educational and personal use.