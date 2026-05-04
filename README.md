# React To-Do App

A responsive task management application built with React, featuring full CRUD functionality and persistent storage.

🔗 **Live Demo:** [task-manager-delta-jet-69.vercel.app](https://task-manager-delta-jet-69.vercel.app)

---

## Features

- Add, delete, and mark tasks as complete
- Tasks persist across browser sessions using localStorage
- Clean, responsive card-based UI

## Tech Stack

- React
- JavaScript
- HTML/CSS
- localStorage API

## Getting Started

### Prerequisites
- Node.js installed on your machine

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/ab8721/task-manager.git
   ```

2. Navigate into the project folder
   ```bash
   cd task-manager
   ```

3. Install dependencies
   ```bash
   npm install
   ```

4. Start the development server
   ```bash
   npm start
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── components/
│   ├── TaskInput.jsx
│   ├── TaskList.jsx
│   └── TaskItem.jsx
├── App.js
└── App.css
```

## Deployment

Deployed using [Vercel](https://vercel.com). Any push to the `main` branch automatically redeploys the app.
