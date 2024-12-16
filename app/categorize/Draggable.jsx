import React from 'react';
import { useDraggable } from '@dnd-kit/core';

export function Draggable({ id, children, isBeingDragged }) {
  const { attributes, listeners, setNodeRef } = useDraggable({
    id, // Уникальный id для каждого перетаскиваемого элемента
  });

  const draggableStyles = {
    padding: '10px',
    margin: '5px',
    backgroundColor: isBeingDragged ? 'lightcoral' : 'lightblue',
    transform: isBeingDragged ? 'scale(1.1)' : 'scale(1)',  // Увеличение при перетаскивании
    transition: 'transform 0.2s ease',  // Плавный переход
    cursor: 'move',  // Курсор на перетаскиваемом элементе
  };

  return (
    <div ref={setNodeRef} {...listeners} {...attributes} style={draggableStyles}>
      {children}
    </div>
  );
}
