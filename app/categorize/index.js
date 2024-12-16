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
    {
      id: 'row-3',
      cards: [
        { id: 'card-7', content: 'PDF Card 7' },
      ],
    },
  ],
};

const DragAndDropPage = () => {
  const [data, setData] = useState(initialData);
  const [selectedCards, setSelectedCards] = useState(new Set()); // Для хранения выбранных карточек

  // Стили для элементов
  const rowStyles = {
    display: 'flex',
    gap: '10px',
    marginBottom: '20px',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '8px',
  };

  const cardStyles = (isSelected) => ({
    backgroundColor: isSelected ? 'lightgreen' : 'lightblue',
    padding: '10px',
    borderRadius: '5px',
    width: '150px',
    cursor: 'move',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  });

  // Обработка клика по карточке
  const handleCardClick = (cardId, e) => {
    const isCtrlClick = e.ctrlKey || e.metaKey;

    setSelectedCards((prevSelectedCards) => {
      const newSelectedCards = new Set(prevSelectedCards);
      if (isCtrlClick) {
        if (newSelectedCards.has(cardId)) {
          newSelectedCards.delete(cardId);
        } else {
          newSelectedCards.add(cardId);
        }
      } else {
        newSelectedCards.clear();
        newSelectedCards.add(cardId);
      }
      return newSelectedCards;
    });
  };

  // обработчик для выбора карточек
const handleCardMouseDown = (cardId, e) => {
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

  // Обработка начала перетаскивания
  const handleDragStart = (start) => {
    const selectedCardsArray = Array.from(selectedCards);
    if (selectedCardsArray.length > 0) {
      start.source.index = selectedCardsArray[0];
    }
  };

  // Обработка окончания перетаскивания
  const handleDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) return; // Если элемент сброшен вне области, ничего не делаем.
  
    const newRows = [...data.rows];
  
    // Получаем карточки для перемещения
    const selectedCardsArray = Array.from(selectedCards);
  
    // Удаляем выбранные карточки из всех строк
    newRows.forEach((row) => {
      row.cards = row.cards.filter((card) => !selectedCardsArray.includes(card.id));
    });
  
    // Добавляем выбранные карточки в целевую строку
    const destinationRow = newRows.find((row) => row.id === destination.droppableId);
    if (destinationRow) {
      destinationRow.cards.splice(
        destination.index,
        0,
        ...selectedCardsArray.map((cardId) => ({
          id: cardId,
          content: `Content for ${cardId}`, // При необходимости обновите содержимое
        }))
      );
    }
  
    // Обновляем состояние строк и сбрасываем выбор
    setData({ rows: newRows });
    setSelectedCards(new Set()); // Очищаем выбранные карточки
  };

  // Рендер строки
  const renderRow = (row) => (
    <Droppable key={row.id} droppableId={row.id} direction="horizontal">
      {(provided) => (
        <div ref={provided.innerRef} {...provided.droppableProps} style={rowStyles}>
          {row.cards.map((card, index) => renderCard(card, index))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );

  // Рендер карточки
  const renderCard = (card, index) => (
    <Draggable key={card.id} draggableId={card.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          onClick={(e) => handleCardClick(card.id, e)}
          // onMouseDown={(e) => handleCardMouseDown(card.id, e)} // Используем onMouseDown
          style={{ ...cardStyles(selectedCards.has(card.id)), ...provided.draggableProps.style }}
        >
          {card.content}
        </div>
      )}
    </Draggable>
  );

  return (
    <div style={{ padding: '20px' }}>
      <DragDropContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        {data.rows.map(renderRow)}
      </DragDropContext>
    </div>
  );
};

export default DragAndDropPage;