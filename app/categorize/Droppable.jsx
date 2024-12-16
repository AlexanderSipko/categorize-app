import React from 'react';
import { useDroppable } from '@dnd-kit/core';

export function Droppable({ id, children }) {
  const { isOver, setNodeRef } = useDroppable({
    id, // Идентификатор для области, куда можно перетаскивать
  });

  const droppableStyles = {
    width: '200px',
    height: '100px',
    border: '2px dashed gray',
    margin: '10px',
    display: 'inline-block',
    position: 'relative',
  };

  return (
    <div ref={setNodeRef} style={droppableStyles}>
      {isOver ? 'Release to drop' : children}
    </div>
  );
}
