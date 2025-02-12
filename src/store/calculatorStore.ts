import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CalculatorState, CalculatorComponent } from '../types/calculator';

const useCalculatorStore = create<CalculatorState>()(
  persist(
    (set, get) => ({
      components: [],
      display: '0',
      previousValue: '',
      operator: null,
      isDarkMode: false,

      addComponent: (component) =>
        set((state) => ({
          components: [...state.components, component],
        })),

      removeComponent: (id) =>
        set((state) => ({
          components: state.components.filter((c) => c.id !== id),
        })),

      reorderComponents: (startIndex, endIndex) =>
        set((state) => {
          const newComponents = Array.from(state.components);
          const [removed] = newComponents.splice(startIndex, 1);
          newComponents.splice(endIndex, 0, removed);
          return { components: newComponents };
        }),

      updateDisplay: (value) =>
        set((state) => {
          // If we just pressed an operator, start a new number
          if (state.operator && state.display === state.previousValue) {
            return { display: value };
          }
          // Normal number input handling
          if (state.display === '0' && value !== '.') {
            return { display: value };
          }
          if (state.display.includes('.') && value === '.') {
            return state;
          }
          return { display: state.display + value };
        }),

      setOperator: (op) =>
        set((state) => {
          // If we already have a previous calculation, perform it
          if (state.previousValue && state.operator && state.display !== state.previousValue) {
            const result = get().calculate();
            return {
              ...result,
              operator: op,
              previousValue: result.display,
              display: result.display,
            };
          }
          return {
            operator: op,
            previousValue: state.display,
            display: state.display,
          };
        }),

      calculate: () =>
        set((state) => {
          if (!state.operator || !state.previousValue) {
            return state;
          }

          const prev = parseFloat(state.previousValue);
          const current = parseFloat(state.display);
          let result = 0;

          switch (state.operator) {
            case '+':
              result = prev + current;
              break;
            case '-':
              result = prev - current;
              break;
            case '*':
              result = prev * current;
              break;
            case '/':
              result = current !== 0 ? prev / current : 0;
              break;
            default:
              return state;
          }

          return {
            display: result.toString(),
            previousValue: '',
            operator: null,
          };
        }),

      clearCalculator: () =>
        set({
          display: '0',
          previousValue: '',
          operator: null,
        }),

      toggleDarkMode: () =>
        set((state) => ({
          isDarkMode: !state.isDarkMode,
        })),
    }),
    {
      name: 'calculator-storage',
    }
  )
);

export default useCalculatorStore;