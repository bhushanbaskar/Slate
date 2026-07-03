# Slate

A modern personal finance dashboard built with **React**. Slate helps users track income and expenses, manage budgets, and visualize spending through interactive charts. The project is designed with a feature-based architecture and currently stores data in **Local Storage**, making it fast and easy to run without a backend.

> **Status:** V1 (Frontend + Local Storage)

---

## ✨ Features

- Dashboard overview
  - Total Balance
  - Monthly Income
  - Monthly Expenses
  - Savings Rate

- Add income and expense transactions
- Edit existing transactions
- Delete transactions
- View all transactions
- Expense breakdown (Pie Chart)
- Monthly expense trend (Area Chart)
- Budget progress tracking
- Recent transactions
- Persistent data using Local Storage

---

## 🛠 Tech Stack

- React
- React Router
- Tailwind CSS
- Recharts
- Local Storage

---

## 📁 Project Structure

```text
src
├── assets
├── components
├── data
├── features
│   ├── budgets
│   ├── categories
│   ├── dashboard
│   ├── expenses
│   ├── landing
│   └── settings
├── layouts
├── pages
├── router
├── services
└── utils
```

The project follows a **feature-based architecture** where UI, business logic, and storage are separated into different layers.

---

## 🚀 Getting Started

Clone the repository:

```bash
git clone <repository-url>
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

---

## 🗄 Data Storage

Slate currently uses **Local Storage** as its data source.

The application automatically initializes default data on first launch and persists all changes locally, including:

- Creating transactions
- Editing transactions
- Deleting transactions
- Budget information
- Categories

---

## 🏗 Architecture

The application is organized into four main layers:

```text
UI Components
      │
      ▼
Custom Hooks
      │
      ▼
Business Services
      │
      ▼
Storage Layer
```

This separation makes the application easier to maintain and allows the storage layer to be replaced with a backend in the future.

---

## 📌 Current Version

### ✅ Implemented

- Transaction CRUD (Create, Read, Update, Delete)
- Dashboard analytics
- Budget tracking
- Expense charts
- Local Storage persistence

### 🔜 Planned

- Backend integration (Node.js + Express)
- PostgreSQL database
- Authentication
- Search & filters
- Advanced analytics

---

## 📄 License

This project is intended for learning, experimentation, and portfolio purposes.
