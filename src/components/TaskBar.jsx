import { useState, useEffect, useRef } from "react";

export default function Taskbar({isMobile = false}){
    const [time, setTime] = useState("");
    
    useEffect(() => {
        const updateTime = () => {
            const date = new Date();
            let hours = date.getHours();
            const ampm = hours >= 12 ? "PM" : "AM";
            hours = hours % 12 || 12;
            let mins = date.getMinutes();
            mins = mins < 10 ? "0" + mins : mins;
            setTime(`${hours}:${mins} ${ampm}`);
        };
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    return(
        <div className={`absolute flex w-full bottom-0 bg-gray-950/80 ${isMobile ? "h-12" : "h-[60px]"}`}>
            <img
                src="characterIcon.png" 
                className={`relative select-none pointer-events-none ${isMobile ? "h-12 w-12 left-2" : "h-[60px] w-[60px] left-5"}`}
            />
            <div className={`relative flex flex-row ${isMobile ? " space-x-3 left-4" : "space-x-5 left-10"}`}>
                <a className={`bg-[url('./assets/githubIcon.png')] taskbarIcon-hover taskbarIcon ${isMobile ? "w-12 h-12" : "p-1"}`} 
                    href="https://github.com/FAFernandez247" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                />
                <a className={`bg-[url('./assets/linkedInIcon.png')] taskbarIcon-hover taskbarIcon ${isMobile ? "w-12 h-12" : "p-1"} `}
                    href="https://www.linkedin.com/in/felicity-andrea-f-633626138/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                />
                <a className={`bg-[url('./assets/gmailIcon.png')] taskbarIcon-hover taskbarIcon ${isMobile ? "w-12 h-12" : "p-1"}`} 
                    href="mailto:felicityandreafernandez@gmail.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Gmail"
                />
            </div>
            <p className={`absolute text-white press-start-2p ${isMobile ? "text-sm right-4 inset-y-3" : "text-md right-8 bottom-4"}`}>{time}</p>
        </div>
    )
}
