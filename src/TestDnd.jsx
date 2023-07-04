import React, { useState } from "react";
import { DndContext, DragOverlay, useDraggable, useDroppable } from "@dnd/kit";

const TestDnd = () => {
  const [lists, setLists] = useState([
    {
      id: 1,
      title: "List 1",
      cards: [
        { id: 1, text: "Card 1" },
        { id: 2, text: "Card 2" },
      ],
    },
    { id: 2, title: "List 2", cards: [{ id: 3, text: "Card 3" }] },
  ]);

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id === over.id) {
      return;
    }

    const activeList = lists.find((list) => list.id === active.id);
    const overList = lists.find((list) => list.id === over.id);

    if (activeList && overList) {
      const { activeIndex } = active;
      const { overIndex } = over;

      const draggedCard = activeList.cards[activeIndex];

      if (activeList === overList) {
        const updatedCards = Array.from(activeList.cards);
        updatedCards.splice(activeIndex, 1);
        updatedCards.splice(overIndex, 0, draggedCard);

        const updatedLists = lists.map((list) => {
          if (list.id === activeList.id) {
            return { ...list, cards: updatedCards };
          }
          return list;
        });

        setLists(updatedLists);
      } else {
        const updatedActiveCards = Array.from(activeList.cards);
        updatedActiveCards.splice(activeIndex, 1);

        const updatedOverCards = Array.from(overList.cards);
        updatedOverCards.splice(overIndex, 0, draggedCard);

        const updatedLists = lists.map((list) => {
          if (list.id === activeList.id) {
            return { ...list, cards: updatedActiveCards };
          }
          if (list.id === overList.id) {
            return { ...list, cards: updatedOverCards };
          }
          return list;
        });

        setLists(updatedLists);
      }
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="board">
        {lists.map((list) => (
          <List key={list.id} list={list} />
        ))}
        <DragOverlay>
          {({ active, over }) => {
            if (!active || !over) {
              return null;
            }

            return (
              <div className="card-overlay">
                {active.id === over.id && <div className="card-placeholder" />}
              </div>
            );
          }}
        </DragOverlay>
      </div>
    </DndContext>
  );
};

const List = ({ list }) => {
  const { items, setNodeRef } = useDroppable({ id: list.id });

  return (
    <div className="list">
      <h2>{list.title}</h2>
      <div ref={setNodeRef} className="list-cards">
        {list.cards.map((card, index) => (
          <Card key={card.id} card={card} index={index} listId={list.id} />
        ))}
        {items.map(({ id, over }, index) => (
          <div key={id} className={`card-placeholder ${over ? "over" : ""}`} />
        ))}
      </div>
    </div>
  );
};

const Card = ({ card, index, listId }) => {
  const { setNodeRef } = useDraggable({ id: card.id, index, listId });

  return (
    <div ref={setNodeRef} className="card">
      {card.text}
    </div>
  );
};

export default BoardifyClone;
