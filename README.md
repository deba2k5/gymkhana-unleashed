# 🚀 Gymkhana Unleashed

**Gymkhana Unleashed** is the central digital hub for the student body. It serves as a comprehensive platform to manage societies, track campus events, discover student leaders, and foster a vibrant community atmosphere. Built with modern web technologies, it offers a seamless and interactive experience for all students.

---

## ✨ Key Features

- **🏆 Annual Awards 2026**: A dedicated portal celebrating student excellence, featuring gold medalists and top performers across all departments with interactive search and highlights.
- **🎨 Modern Societies Portal**: Explore various technical, cultural, and sports societies with vibrant descriptions, recruitment details, and social media integration.
- **📅 Campus Event Hub**: Real-time event tracking with detailed schedules, immersive descriptions, and seamless registration workflows.
- **👥 Member Directory**: Comprehensive directory of Gymkhana office bearers, society heads, and core teams with direct contact integration.
- **📜 Constitution & Oath**: Virtual copy of the fundamental governing rules and the core values that define the student community.
- **📰 News & Updates**: Stay informed with a dynamic news section featuring the latest official announcements and campus updates.
- **🌓 Advanced Dark Mode**: Crystal-clear accessibility with semantic theming and a glassmorphic UI that adapts to user preferences.
- **📊 Document Ingestion**: Automated data pipelines to sync details from official brochures and campus PDFs.

---

## 🛠️ Tech Stack

- **Frontend**: [React](https://reactjs.org/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + [Shadcn UI](https://ui.shadcn.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Theming**: [next-themes](https://github.com/pacocoursey/next-themes)
- **Routing**: [React Router DOM](https://reactrouter.com/)
- **State Management**: [TanStack Query](https://tanstack.com/query/latest) for robust server-state management
- **Data Visuals**: [Recharts](https://recharts.org/) for beautiful, responsive data charts
- **Notifications**: [Sonner](https://sonner.emilkowal.ski/) for sleek, customizable toast notifications
- **3D Elements**: [Three.js](https://threejs.org/) for immersive background and foreground components

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [Bun](https://bun.sh/) (Recommended) or `npm`

### Installation

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/deba2k5/gymkhana-unleashed.git
    cd gymkhana-unleashed
    ```

2.  **Install dependencies**:
    ```bash
    bun install
    # or
    npm install
    ```

3.  **Run the development server**:
    ```bash
    bun dev
    # or
    npm run dev
    ```

4.  **Build for production**:
    ```bash
    bun run build
    # or
    npm run build
    ```

---

## 📁 Project Structure

```text
src/
├── components/   # Reusable UI components (Hero, Navbar, Section layouts)
├── pages/        # Main route pages (Societies, Events, Members, FAQ)
├── data/         # Static data and configurations
├── hooks/        # Custom React hooks
├── lib/          # Helper utilities and Shadcn configurations
└── test/         # Unit and integration tests
```

---

## 🐍 Developer Tools

The project includes a set of Python-based utility scripts to assist with data ingestion from official documents:

- **`extract_pdf.py`**: Extracts text and images from the Gymkhana PDF brochure.
- **`read_pdf.py`**: Utility for reading and parsing PDF content for data updates.

To use these, ensure you have Python installed along with the `PyMuPDF` (`fitz`) library:
```bash
pip install pymupdf
```

---

## 🧪 Testing

The project uses a robust testing setup:
- **Unit Tests**: Powered by [Vitest](https://vitest.dev/).
- **E2E Tests**: Powered by [Playwright](https://playwright.dev/).

Run tests with:
```bash
bun test
# or
npm test
```

---

## 📄 License

This project is private and intended for the internal use of the Gymkhana student body.
