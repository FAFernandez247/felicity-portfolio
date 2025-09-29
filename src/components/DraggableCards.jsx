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
    setHighestZ,
    isMobile = false
    }) {
    const nodeRef = useRef(null);
    const [position, setPosition] = useState({ top: 0, left: 0 });

    useEffect(() => {
        let x, y;
        if (isMobile) {
            x = (window.innerWidth - Math.min(width, window.innerWidth * 0.9)) / 2;
            y = 20;
        } else {
            x = (window.innerWidth - width) / 2;
            y = (window.innerHeight - height) / 2;
        }
        setPosition({ top: y, left: x });
    }, [width, height, isMobile]);

    const bringToFront = () => {
        const newZ = highestZ + 1;
        setZIndexes({ ...zIndexes, [id]: newZ });
        setHighestZ(newZ);
    };
    return (

    <Draggable nodeRef={nodeRef} handle=".drag-handle" bounds="body" disabled={isMobile}>
        <div ref={nodeRef} 
        onClick={bringToFront}
        style={{
            width: isMobile ? "90vw" : `${width}px`,
            height: isMobile ? "80vh" : `${height}px`,
            top: `${position.top}px`,
            left: `${position.left}px`,
            zIndex: zIndexes[id] || 1
        }}
        className="absolute window-body self-center max-w-[95vw] max-h-[90vh] overflow-hidden flex flex-col">
            <button className="absolute right-3 mt-1 exitButton exitButton-hover exitButton-bevel pointer-events-auto z-50"
                onClick={() => setOpenCards({...openCards, [id]: false})}
                aria-label="Close window"
            />
            <div className="drag-handle h-10 w-full window-header cursor-move flex items-center justify-between px-2 flex-shrink-0">

                <p className="text-pink-900 dark:text-blue-950 press-start-2p-regular text-sm m-2 text-shadow-lg">{title}</p>
            </div>
            <div className="overflow-y-auto flex-1 min-h-0">
                <div className={`${isMobile ? "p-3" : "p-4 md:p-8"} h-full `}>
                    {children}
                </div>
            </div>
            </div>
    </Draggable>
    );
}
