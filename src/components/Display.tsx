import React from 'react';
import useCalculatorStore from '../store/calculatorStore';

export const Display: React.FC = () => {
  const { display, isDarkMode } = useCalculatorStore();

  return (
    <div
      className={`w-full p-4 text-right text-3xl font-mono rounded-lg mb-4 ${
        isDarkMode
          ? 'bg-gray-700 text-white'
          : 'bg-white text-gray-800'
      } shadow-inner`}
    >
      {display}
    </div>
  );
}