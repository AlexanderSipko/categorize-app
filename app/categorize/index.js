'use client';

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
        { id: 'card-5', content: 'PDF Card 5' },
        { id: 'card-6', content: 'PDF Card 6' },
      ],
    },
  ],
};

const DragAndDropPage = () => {
  const [data, setData] = useState(initialData);
  const [selectedCards, setSelectedCards] = useState(new Set()); // Для хранения выбранных карточек

  // Функция для обработки кликов по карточкам
  const handleCardClick = (cardId, e) => {
    const isCtrlClick = e.ctrlKey || e.metaKey; // Проверяем, была ли зажата клавиша Ctrl или Cmd

    setSelectedCards((prevSelectedCards) => {
      const newSelectedCards = new Set(prevSelectedCards);
      if (isCtrlClick) {
        // Если Ctrl/Cmd был зажат, добавляем/удаляем карточку
        if (newSelectedCards.has(cardId)) {
          newSelectedCards.delete(cardId);
        } else {
          newSelectedCards.add(cardId);
        }
      } else {
        // Если Ctrl/Cmd не был зажат, выбираем только одну карточку
        newSelectedCards.clear();
        newSelectedCards.add(cardId);
      }
      return newSelectedCards;
    });
  };

  const onDragStart = (start) => {
    const selectedCardsArray = Array.from(selectedCards);
    if (selectedCardsArray.length > 0) {
      start.source.index = selectedCardsArray[0];
    }
  };

  const onDragEnd = (result) => {
    const { destination, source } = result;

    if (!destination) return; // Если элемент сброшен вне области

    const newRows = [...data.rows];
    const sourceRow = newRows.find((row) => row.id === source.droppableId);
    const destinationRow = newRows.find((row) => row.id === destination.droppableId);

    // Если перетаскиваются несколько карточек
    if (selectedCards.size > 0) {
      const selectedCardsArray = Array.from(selectedCards);
      const movedCards = selectedCardsArray.map((cardId) => {
        const cardIndex = sourceRow.cards.findIndex((card) => card.id === cardId);
        return sourceRow.cards.splice(cardIndex, 1)[0];
      });

      // Вставляем карточки в новое место
      destinationRow.cards.splice(destination.index, 0, ...movedCards);

      // Обновляем данные
      setData({ rows: newRows });
    } else {
      // Если перетаскивается одна карточка
      const movedCard = sourceRow.cards.splice(source.index, 1)[0];
      destinationRow.cards.splice(destination.index, 0, movedCard);
      setData({ rows: newRows });
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <DragDropContext onDragStart={onDragStart} onDragEnd={onDragEnd}>
        {data.rows.map((row) => (
          <Droppable key={row.id} droppableId={row.id} direction="horizontal">
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
                        onClick={(e) => handleCardClick(card.id, e)}
                        style={{
                          backgroundColor: selectedCards.has(card.id) ? 'lightgreen' : 'lightblue',
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
