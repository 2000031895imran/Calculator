# Calculator Builder

A beautiful, interactive calculator builder application built with React, TypeScript, and Tailwind CSS. This project allows users to create custom calculators by dragging and dropping components.

## Features
- Drag and drop calculator components
- Dark/Light mode toggle
- Persistent state
- Responsive design
- Beautiful UI with animations

## Setup Instructions

1. Create a new directory for your project:
```bash
mkdir calculator-builder
cd calculator-builder
```

2. Create a package.json file and install dependencies:
```bash
npm create vite@latest . -- --template react-ts
npm install
npm install @hello-pangea/dnd lucide-react zustand
```

3. Copy all the provided files into their respective directories
4. Run the development server:
```bash
npm run dev
```

## Project Structure

```
calculator-builder/
├── src/
│   ├── components/
│   │   ├── ComponentList.tsx
│   │   ├── ComponentPalette.tsx
│   │   ├── Display.tsx
│   │   └── DraggableComponent.tsx
│   ├── store/
│   │   └── calculatorStore.ts
│   ├── types/
│   │   └── calculator.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── vite.config.ts
```# Calculator
