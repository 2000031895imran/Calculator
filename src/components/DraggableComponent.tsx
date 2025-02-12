import React from 'react';
import { Draggable } from '@hello-pangea/dnd';
import { X } from 'lucide-react';
import { CalculatorComponent } from '../types/calculator';
import useCalculatorStore from '../store/calculatorStore';

interface Props {
  component: CalculatorComponent;
  index: number;
}

export const DraggableComponent: React.FC<Props> = ({ component, index }) => {
  const removeComponent = useCalculatorStore((state) => state.removeComponent);
  const updateDisplay = useCalculatorStore((state) => state.updateDisplay);
  const setOperator = useCalculatorStore((state) => state.setOperator);
  const calculate = useCalculatorStore((state) => state.calculate);
  const isDarkMode = useCalculatorStore((state) => state.isDarkMode);

  const handleClick = () => {
    switch (component.type) {
      case 'number':
        updateDisplay(component.value);
        break;
      case 'operator':
        setOperator(component.value);
        break;
      case 'equals':
        calculate();
        break;
    }
  };

  return (
    <Draggable draggableId={component.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="relative group"
        >
          <button
            onClick={handleClick}
            className={`w-16 h-16 m-1 rounded-lg font-bold text-lg transition-all ${
              isDarkMode
                ? 'bg-gray-700 text-white hover:bg-gray-600'
                : 'bg-white text-gray-800 hover:bg-gray-100'
            } shadow-md hover:shadow-lg transform hover:scale-105`}
          >
            {component.value}
          </button>
          <button
            onClick={() => removeComponent(component.id)}
            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <X size={12} />
          </button>
        </div>
      )}
    </Draggable>
  );
}