# Bhavesh Rathod — Personal Portfolio & AI Systems Showcase

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20with-Vercel-000000.svg?style=flat&logo=vercel)](https://vercel.com)
[![Vite](https://img.shields.io/badge/Vite-8.x-646CFF.svg?style=flat&logo=vite)](https://vitejs.dev)
[![React](https://img.shields.io/badge/React-19.x-61DAFB.svg?style=flat&logo=react)](https://react.dev)

Personal portfolio and technical architecture showcase of **Bhaveshkumar Rathod** — AI Engineer & Senior Backend Architect.

- 🌐 **Live Website:** Hosted on Vercel
- 💼 **LinkedIn:** [linkedin.com/in/bhaveshkumar-rathod](https://www.linkedin.com/in/bhaveshkumar-rathod/)
- 💻 **GitHub:** [github.com/br-bit3194](https://github.com/br-bit3194)
- ✉️ **Email:** bhavesh3194@gmail.com

---

## 🌟 Key Highlights

- **2-Second Recruiter Impression**: Minimalist executive layout built with modern Bento Grid architecture inspired by *21st.dev* and the Google color palette.
- **Featured Hackathon Winner (AWS SuperHacks 2025)**: Dedicated showcase and embedded video demonstration for **MAESTRO** (Autonomous Multi-Agent IT Operations Platform).
- **Interactive System Architecture Explorer**: Interactive step-by-step blueprints for Multi-Agent A2A/MCP workflows, GCP Vertex AI pipelines, and FinTech data engines.
- **Interactive AI Assistant**: Embedded "Ask Bhavesh AI" assistant providing instant technical synthesis of career achievements, optimizations, and architectures.
- **Full Responsiveness & Light/Dark Theme**: Clean Light mode by default with seamless Dark mode switching.

---

## 🛠️ Tech Stack

- **Frontend:** React 19, Vite, Vanilla CSS Design Tokens
- **Icons & Effects:** Lucide React, Canvas Confetti
- **Deployment:** Vercel (Single Page App configuration with `vercel.json`)

---

## 🚀 Local Development

```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev

# 3. Build for production
npm run build
```

---

## 🔮 Future-Ready Architecture (How to Update Data in 30 Seconds)

All content, skills, career roles, metrics, and certifications are decoupled into a **Single Source of Truth** in [`src/data/portfolioData.js`](file:///d:/TechyUpdates/personal_portfolio/src/data/portfolioData.js). You never need to touch React components or CSS when your experience grows!

| What to Update | Where to Edit in `src/data/portfolioData.js` |
| :--- | :--- |
| **New Job / Role / Promotion** | Add a new object inside `experience: [ ... ]` |
| **New Skills / Tech Stack** | Add items to `skills.categories` |
| **New Hackathon / Project** | Add an object to `projects: [ ... ]` |
| **New Certifications** | Add an entry to `certifications: [ ... ]` |
| **Resume PDF** | Replace `public/Bhavesh_Rathod_GenAI_Engineer_Resume.pdf` |
| **Profile Photo** | Replace `public/photo.jpeg` |
| **AI Assistant Knowledge** | Add questions/answers in `aiAssistantKnowledge: [ ... ]` |

---

## 📦 Deploying to Vercel

1. Push this repository to GitHub under `br-bit3194/my-portfolio`.
2. Go to [vercel.com/new](https://vercel.com/new) and import your repository.
3. Framework preset: **Vite** (Auto-detected).
4. Click **Deploy**.
