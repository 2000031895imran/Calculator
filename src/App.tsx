import React from 'react';
import { ComponentList } from './components/ComponentList';
import { ComponentPalette } from './components/ComponentPalette';
import { Display } from './components/Display';
import useCalculatorStore from './store/calculatorStore';

function App() {
  const isDarkMode = useCalculatorStore((state) => state.isDarkMode);

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-200`}>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className={`text-4xl font-bold text-center mb-8 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
            Calculator Builder
          </h1>
          
          <div className={`p-6 rounded-xl shadow-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <Display />
            <ComponentList />
          </div>

          <div className="mt-8">
            <ComponentPalette />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;