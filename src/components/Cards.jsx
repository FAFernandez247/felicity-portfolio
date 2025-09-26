import DraggableCards from "./DraggableCards";
import { useState } from "react";

export default function Cards({ 
  openCards, 
  setOpenCards, 
  cards,
  zIndexes,
  setZIndexes,
  highestZ,
  setHighestZ
 }) {
  return (
    <>
      {cards.map((card) =>
        openCards[card.id] ? (
          <DraggableCards
            key={card.id}
            id={card.id}
            title={card.title}
            width={card.width}
            height={card.height}
            openCards={openCards}
            setOpenCards={setOpenCards}
            zIndexes={zIndexes}
            setZIndexes={setZIndexes}
            highestZ={highestZ}
            setHighestZ={setHighestZ}
          >
            <div className="flex flex-col space-y-4">
              {card.content}
            </div>
          </DraggableCards>
        ) : null
      )}
    </>
  );
}
