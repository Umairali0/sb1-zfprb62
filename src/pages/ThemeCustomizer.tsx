import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const ThemeCustomizer: React.FC = () => {
  const [components, setComponents] = useState([
    { id: 'header', content: 'Header' },
    { id: 'hero', content: 'Hero Section' },
    { id: 'featured-products', content: 'Featured Products' },
    { id: 'about', content: 'About Section' },
    { id: 'footer', content: 'Footer' },
  ]);

  const onDragEnd = (result: any) => {
    if (!result.destination) {
      return;
    }

    const items = Array.from(components);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setComponents(items);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Theme Customizer</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h2 className="text-xl font-semibold mb-4">Preview</h2>
          <div className="bg-white p-4 rounded-lg shadow">
            {/* Add a preview of the current theme here */}
            <p className="text-gray-500">Theme preview will be displayed here</p>
          </div>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-4">Layout</h2>
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="components">
              {(provided) => (
                <ul {...provided.droppableProps} ref={provided.innerRef} className="bg-white rounded-lg shadow">
                  {components.map((component, index) => (
                    <Draggable key={component.id} draggableId={component.id} index={index}>
                      {(provided) => (
                        <li
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="p-4 mb-2 bg-gray-100 rounded"
                        >
                          {component.content}
                        </li>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </ul>
              )}
            </Droppable>
          </DragDropContext>
        </div>
      </div>
    </div>
  );
};

export default ThemeCustomizer;