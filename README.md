# 🎬 Smart Movie Directory

A lightweight, high-performance Movie Directory web application built from scratch using **Node.js** core modules without any external frameworks (like Express). This project demonstrates a deep understanding of Node.js server architecture, asynchronous file system handling, dynamic template rendering, and routing.

---

## 🚀 Key Features

* **Vanilla Node.js Architecture:** Built completely using core modules (`http`, `url`, `fs`).
* **Dynamic Template Rendering:** Custom template engine built from scratch utilizing standard JavaScript and Regular Expressions to parse and bind JSON data into HTML components.
* **Server-side Routing:** Clean routing setup for the overview page, individual movie detail pages, and API endpoints.
* **Modern Dark UI:** A fully responsive, clean, and modern Dark Mode interface designed with native CSS components.

---

## 🛠️ Tech Stack & Concepts Covered

* **Runtime Environment:** Node.js
* **Data Layer:** Local JSON Database (`movies.json`)
* **Asynchronous I/O:** `fs.readFileSync` for optimization and non-blocking file handling paradigms.
* **HTTP Protocol:** Headers management, Status Codes (200, 404), and Request-Response cycles.

---

## 📂 Project Structure

```text
Movie/
│
├── dev-data/
│   └── movies.json          # Main Local Database
│
├── templates/
│   ├── template-overview.html # Directory Dashboard Layout
│   ├── template-card.html     # Reusable Movie Card Component
│   └── template-movie.html    # Full Movie Profile Page
│
├── modules/
│   └── replaceTemplate.js    # Custom Data Binding Engine
│
├── .gitignore               # Safe-listing untracked files
└── index.js                 # Central Application Gateway
