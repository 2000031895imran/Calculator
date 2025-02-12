import React from 'react';
import { DragDropContext, Droppable } from '@hello-pangea/dnd';
import { DraggableComponent } from './DraggableComponent';
import useCalculatorStore from '../store/calculatorStore';

export const ComponentList: React.FC = () => {
  const { components, reorderComponents } = useCalculatorStore();

  const onDragEnd = (result: any) => {
    if (!result.destination) return;
    reorderComponents(result.source.index, result.destination.index);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="calculator" direction="horizontal">
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="flex flex-wrap justify-center gap-2 p-4 min-h-[200px]"
          >
            {components.map((component, index) => (
              <DraggableComponent
                key={component.id}
                component={component}
                index={index}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}