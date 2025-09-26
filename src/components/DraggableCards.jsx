import { useState, useEffect, useRef } from "react";
import Draggable from "react-draggable";

export default function DraggableCards ({
    id,
    title,
    children,
    width = "320",
    height = "240", 
    openCards,
    setOpenCards,
    zIndexes,
    setZIndexes,
    highestZ,
    setHighestZ
    }) {
    const nodeRef = useRef(null);
    const [position, setPosition] = useState({ top: 0, left: 0 });

    useEffect(() => {
        const x = (window.innerWidth - width) / 2;
        const y = (window.innerHeight - height) / 2;
        setPosition({ top: y, left: x });
    }, [width, height]);

    const bringToFront = () => {
        const newZ = highestZ + 1;
        setZIndexes({ ...zIndexes, [id]: newZ });
        setHighestZ(newZ);
    };
    return (

    <Draggable nodeRef={nodeRef} handle=".drag-handle" bounds="body">
        <div ref={nodeRef} 
        onClick={bringToFront}
        style={{
            width: `${width}px`,
            height: `${height}px`,
            top: `${position.top}px`,
            left: `${position.left}px`,
            zIndex: zIndexes[id] || 1
        }}
        className="absolute window-body self-center">
            <div className="drag-handle h-10 w-full window-header cursor-move flex items-center justify-between px-2">
                <button className="absolute right-5 exitButton exitButton-hover exitButton-bevel"
                onClick={() => setOpenCards({...openCards, [id]: false})}/>
                <p className="text-pink-900 dark:text-blue-950 press-start-2p text-sm m-2 text-shadow-lg">{title}</p>
            </div>
            <div className="p-8 overflow-auto h-[calc(100%-2.5rem)]">
                {children}
            </div>
            </div>
    </Draggable>
    );
}
