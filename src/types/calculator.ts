export type CalculatorComponent = {
  id: string;
  type: 'number' | 'operator' | 'display' | 'equals';
  value: string;
};

export type CalculatorState = {
  components: CalculatorComponent[];
  display: string;
  previousValue: string;
  operator: string | null;
  isDarkMode: boolean;
  addComponent: (component: CalculatorComponent) => void;
  removeComponent: (id: string) => void;
  reorderComponents: (startIndex: number, endIndex: number) => void;
  updateDisplay: (value: string) => void;
  calculate: () => void;
  setOperator: (op: string) => void;
  toggleDarkMode: () => void;
  clearCalculator: () => void;
};