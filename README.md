# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


🚀 Extra Skills Picked Up
Learned to debug JSX issues, like template literals in className

Improved code organization: separating logic from UI

Gained experience with Vite for fast React project setup

Built a complete project from scratch — a full development cycle

React Game Logic
Managed a turn-based system (X and O)

Handled user interaction and dynamically updated the UI

Built a reusable Xo_btn component

Controlled game reset logic with setTimeout()

Tracked and highlighted the winning cells

🧩 JavaScript Logic Revision
Worked with arrays and Array.map()

Used conditional logic to check winning combinations

Used Array.fill() to reset state

Applied array methods like .every() for checking draw conditions

🧠 React Core Concepts
useState: You used useState to manage:

The game board (board)

The current player (turn)

The winner (winner)

Game state flags (isGameOver, isDraw)

Dynamic UI effects (like winningCells for styling)

Props:

Passed values and functions from the App component to Xo_btn (e.g., xo, handle_onclick, isWinning)

Understood how child components receive and use data via props



