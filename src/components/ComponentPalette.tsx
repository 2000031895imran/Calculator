import React from 'react';
import { Calculator, Moon, Sun } from 'lucide-react';
import useCalculatorStore from '../store/calculatorStore';

export const ComponentPalette: React.FC = () => {
  const { addComponent, toggleDarkMode, isDarkMode } = useCalculatorStore();

  const createComponent = (type: 'number' | 'operator' | 'equals', value: string) => {
    addComponent({
      id: `${type}-${value}-${Date.now()}`,
      type,
      value,
    });
  };

  return (
    <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Calculator className={isDarkMode ? 'text-white' : 'text-gray-800'} />
          <h2 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
            Component Palette
          </h2>
        </div>
        <button
          onClick={toggleDarkMode}
          className={`p-2 rounded-lg ${
            isDarkMode ? 'bg-gray-700 text-yellow-400' : 'bg-white text-gray-800'
          }`}
        >
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>

      <div className="grid grid-cols-4 gap-2">
        {[...Array(10)].map((_, i) => (
          <button
            key={i}
            onClick={() => createComponent('number', i.toString())}
            className={`p-3 rounded-lg ${
              isDarkMode
                ? 'bg-gray-700 text-white hover:bg-gray-600'
                : 'bg-white text-gray-800 hover:bg-gray-50'
            }`}
          >
            {i}
          </button>
        ))}
        {['+', '-', '*', '/'].map((op) => (
          <button
            key={op}
            onClick={() => createComponent('operator', op)}
            className={`p-3 rounded-lg ${
              isDarkMode
                ? 'bg-indigo-600 text-white hover:bg-indigo-500'
                : 'bg-indigo-500 text-white hover:bg-indigo-400'
            }`}
          >
            {op}
          </button>
        ))}
        <button
          onClick={() => createComponent('equals', '=')}
          className="p-3 rounded-lg bg-green-500 text-white hover:bg-green-400"
        >
          =
        </button>
      </div>
    </div>
  );
}