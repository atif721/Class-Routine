# 🗓️ VU CSE Class Routine

A **Progressive Web App (PWA)** for Varendra University CSE students to view their class routine anytime, anywhere — even from their home screen!

🔗 **Live App:** [vucseroutine-fi.vercel.app](https://vucseroutine-fi.vercel.app)

---

## ✨ Features

- 📅 **Weekly & Today View** — Switch between full week or just today's classes
- 🎓 **Semester Selector** — Supports 1st through 9th semester
- 👥 **Dynamic Section Filter** — Sections load automatically based on selected semester
- 🌙 **Dark Mode Support** — Easy on the eyes at night
- 🔄 **Floating Refresh Button** — Fetch latest data anytime without page reload
- 📲 **PWA Support** — Install on your phone like a native app (Add to Home Screen)
- 🏖️ **Holiday Detection** — Shows a friendly message on Friday & Saturday
- ⚡ **Fast & Lightweight** — Built with Vite for blazing fast performance

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React + TypeScript | Frontend framework |
| Vite | Build tool |
| Tailwind CSS | Styling |
| shadcn/ui | UI Components |
| vite-plugin-pwa | PWA support |
| Vercel | Deployment |

---

## 📡API & 🤝Credits

- **Routine API** — Built by [@rozari0](https://github.com/rozari0) at [vuroutine.vercel.app](https://vuroutine.vercel.app)

```
Base URL: https://vuroutine.vercel.app

GET /cse/?semester=5          → Get full weekly routine
GET /cse/sections/?semester=5 → Get available sections
```
---

## 🚀 Getting Started

### Prerequisites
- Node.js
- pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/vu-cse-routine.git

# Navigate to project directory
cd vu-cse-routine

# Install dependencies
pnpm install

# Start development server
pnpm run dev
```

### Build for Production

```bash
pnpm build
pnpm preview
```

---

## 📱 Install as App (PWA)

**On Android (Chrome):**
1. Open the [live app](https://vucseroutine-fi.vercel.app)
2. Tap the three dots menu
3. Tap **"Add to Home Screen"**
4. Done! 🎉

**On iPhone (Safari):**
1. Open the [live app](https://vucseroutine-fi.vercel.app)
2. Tap the **Share** button
3. Tap **"Add to Home Screen"**
4. Done! 🎉

---

## 📁 Project Structure

```
src/
├── components/
│   ├── RoutineTable.tsx    # Weekly/daily timetable grid
│   ├── ClassCell.tsx       # Individual class card
│   ├── FilterBar.tsx       # Semester & section selector
│   ├── DailyWeekly.tsx     # View toggle button
│   ├── FloatingRefresh.tsx # Floating refresh button
│   └── Header.tsx          # App header
├── hooks/
│   └── useSheetData.ts     # Data fetching & state management
├── utils/
│   ├── constants.ts        # Base URL, semester list
│   └── types.ts            # TypeScript interfaces
├── App.tsx
└── main.tsx
```

---

## 📄 License

MIT License — feel free to use and modify!

---

> Built with ❤️ by a [atif721]
