'use client'

import React, { useState } from 'react';
import { DndContext } from '@dnd-kit/core';
import { Draggable } from './Draggable';
import { Droppable } from './Droppable';

export function KitDrag() {
  const [items, setItems] = useState([1, 2, 3, 4, 5]); // Список элементов
  const [draggingId, setDraggingId] = useState(null);

  const handleDragStart = (event) => {
    setDraggingId(event.active.id);
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (over) {
      const newItems = [...items];
      const activeIndex = newItems.indexOf(parseInt(active.id));
      const overIndex = newItems.indexOf(parseInt(over.id));

      // Удаляем элемент из текущей позиции и вставляем в новую
      if (activeIndex !== -1) {
        newItems.splice(activeIndex, 1);
      }
      newItems.splice(overIndex, 0, parseInt(active.id));

      setItems(newItems); // Обновляем список
    }

    setDraggingId(null); // Сбрасываем состояние перетаскивания
  };

  return (
    <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      <div className="droppable-area">
        {/* Рендерим зону сброса перед первым элементом */}
        <Droppable id={`drop-before-${0}`}>
          <div className="drop-zone">Drop here</div>
        </Droppable>

        {items.map((item, index) => (
          <React.Fragment key={item}>
            {/* Элемент Draggable */}
            <Draggable id={item.toString()} isBeingDragged={draggingId === item.toString()}>
              Item {item}
            </Draggable>

            {/* Зона сброса после каждого элемента */}
            <Droppable id={`drop-after-${item}`}>
              <div className="drop-zone">Drop here</div>
            </Droppable>
          </React.Fragment>
        ))}
      </div>
    </DndContext>
  );
}
