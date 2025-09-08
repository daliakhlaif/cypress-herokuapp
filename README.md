# cypress-herokuapp

Practice repository for Cypress end-to-end (E2E) tests using **TypeScript**.  
This project is built to explore and practice Cypress automation on the [Herokuapp demo site](https://the-internet.herokuapp.com/).

---

## 🚀 Features
- Cypress E2E tests with TypeScript
- Organized test structure
- Reusable Cypress commands
- Example test cases on common UI scenarios

---

## 📝 Test Stages

### ✅ Stage 1 (Basic Interactions) – Completed
- [x] Login page tests (valid & invalid login)
- [x] Checkboxes interactions (select / unselect)
- [x] Dropdown menu selections

### 🔄 Stage 2 (Advanced Scenarios) – In Progress
Planned next steps:
- [ ] Multi-page workflows (e.g., login → navigate → verify result)
- [ ] Dynamic elements (dynamic loading / waits / intercepts)
- [ ] File upload & download tests
- [ ] Complex JavaScript alerts (confirmations & prompts)
- [ ] Assertions on tables / dynamic content
- [ ] Negative workflows (invalid login redirect, empty forms, etc.)

---

## 🛠️ Tech Stack
- [Cypress](https://www.cypress.io/) – End-to-end testing framework
- [TypeScript](https://www.typescriptlang.org/) – Strongly typed JavaScript

---

## 📂 Project Structure
```
cypress-herokuapp/
│── cypress/
│   ├── e2e/         # Test files
│   ├── fixtures/    # Test data
│   ├── support/     # Custom commands & setup
│   │── tsconfig.json
|
│── cypress.config.js
│── package-lock.json
│── package.json
│── README.md
```

---

## ▶️ Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/daliakhlaif/cypress-herokuapp.git
cd cypress-herokuapp
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run tests
- Open Cypress Test Runner:
```bash
npx cypress open
```
- Run tests in headless mode:
```bash
npx cypress run
```

---

## 📌 Notes
This is a **practice repository** for learning and improving Cypress test automation skills.  
It is not intended for production use.

---

## 🧑‍💻 Author
- **Dalia Khlaif**
