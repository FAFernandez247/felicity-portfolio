import { useState, useEffect, useRef } from "react";

export default function FolderButtons({
    card, 
    openCards, 
    setOpenCards,
    zIndexes,
    setZIndexes,
    highestZ,
    setHighestZ
}){
    const handleClick = () => {
        // Open the card
        setOpenCards({ ...openCards, [card.id]: true });
        // Bring to front
        const newZ = highestZ + 1;
        setZIndexes({ ...zIndexes, [card.id]: newZ });
        setHighestZ(newZ);
    };
    return (
        <div className="flex flex-col items-center">
            <button className="folderIcon folderIcon-hover"
            onClick={handleClick}/>
            <h6 className="vt323 text-shadow-lg/80 m-0">{card.title}</h6>
        </div>
    )
}

