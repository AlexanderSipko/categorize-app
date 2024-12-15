// pages/index.js
'use client'

import { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

// Начальные данные для строк и карточек
const initialData = {
  rows: [
    {
      id: 'row-1',
      cards: [
        { id: 'card-1', content: 'PDF Card 1' },
        { id: 'card-2', content: 'PDF Card 2' },
      ],
    },
    {
      id: 'row-2',
      cards: [
        { id: 'card-3', content: 'PDF Card 3' },
        { id: 'card-4', content: 'PDF Card 4' },
      ],
    },
  ],
};

const DragAndDropPage = () => {
  const [data, setData] = useState(initialData);

  const onDragEnd = (result) => {
    const { destination, source } = result;

    // Если элемент сброшен вне области, ничего не делаем
    if (!destination) return;

    // Если элемент перемещен внутри одной строки
    if (source.droppableId === destination.droppableId) {
      const newRows = [...data.rows];
      const rowIndex = newRows.findIndex((row) => row.id === source.droppableId);
      const row = newRows[rowIndex];
      const movedCard = row.cards.splice(source.index, 1)[0];
      row.cards.splice(destination.index, 0, movedCard);

      setData({ rows: newRows });
    } else {
      // Если элемент перемещен в другую строку
      const sourceRowIndex = data.rows.findIndex((row) => row.id === source.droppableId);
      const destinationRowIndex = data.rows.findIndex((row) => row.id === destination.droppableId);

      const sourceRow = data.rows[sourceRowIndex];
      const destinationRow = data.rows[destinationRowIndex];
      const movedCard = sourceRow.cards.splice(source.index, 1)[0];
      destinationRow.cards.splice(destination.index, 0, movedCard);

      const newRows = [...data.rows];
      newRows[sourceRowIndex] = sourceRow;
      newRows[destinationRowIndex] = destinationRow;

      setData({ rows: newRows });
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <DragDropContext onDragEnd={onDragEnd}>
        {data.rows.map((row) => (
          <Droppable
            key={row.id}
            droppableId={row.id}
            direction="horizontal"
            isDropDisabled={false} // Убедитесь, что передаете булево значение
          >
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                style={{
                  display: 'flex',
                  gap: '10px',
                  marginBottom: '20px',
                  padding: '10px',
                  border: '2px solid #ccc',
                  borderRadius: '8px',
                }}
              >
                {row.cards.map((card, index) => (
                  <Draggable key={card.id} draggableId={card.id} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={{
                          backgroundColor: 'lightblue',
                          padding: '10px',
                          borderRadius: '5px',
                          width: '150px',
                          cursor: 'move',
                          boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
                          ...provided.draggableProps.style,
                        }}
                      >
                        {card.content}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </DragDropContext>
    </div>
  );
};

export default DragAndDropPage;
