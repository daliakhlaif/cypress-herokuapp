# cypress-herokuapp

Practice repository for Cypress end-to-end (E2E) tests using **TypeScript** and **Page Object Model (POM)**. 
This project is built to explore and practice Cypress automation on the [Herokuapp demo site](https://the-internet.herokuapp.com/).

[![cypress-example](https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/detailed/ng8k6q&style=flat&logo=cypress)](https://dashboard.cypress.io/projects/ng8k6q/runs) :point_left: click here to see test results on Cypress dashboard

---

## 🚀 Features
- Cypress E2E tests with TypeScript
- Page Object Model (POM) design pattern for organized tests
- Reusable Cypress commands
- Example test cases on common UI scenarios

---

### 📝 Completed Test Cases
- [x] Login page tests (valid & invalid login)
- [x] Checkboxes interactions (select / unselect)
- [x] Dropdown menu selections
- [x] File upload tests
- [x] JavaScript alerts (confirmations & prompts)
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
│   ├── support/
|   |   ├── pages/   # Page Object Model files
|   |   |__          # Custom commands & setup
|   |  
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
