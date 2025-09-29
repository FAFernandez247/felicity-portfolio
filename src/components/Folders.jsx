import { useState, useEffect, useRef } from "react";

export default function FolderButtons({
    card, 
    openCards, 
    setOpenCards,
    zIndexes,
    setZIndexes,
    highestZ,
    setHighestZ,
    isMobile = false
}){
    const handleClick = () => {
        setOpenCards({ ...openCards, [card.id]: true });
        const newZ = highestZ + 1;
        setZIndexes({ ...zIndexes, [card.id]: newZ });
        setHighestZ(newZ);
    };
    return (
        <div className="flex flex-col items-center">
            <button className={`folderIcon folderIcon-hover ${isMobile ? "w-12 h-12" : " "}`}
            onClick={handleClick}/>
            <h6 className="vt323-regular text-shadow-lg/80 m-0 text-lg md:text-2xl">{card.title}</h6>
        </div>
    )
}

