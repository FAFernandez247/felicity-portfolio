import { useState, useEffect, useRef } from "react";
export default function Taskbar(){
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
        <div className="absolute flex h-[60px] w-full bottom-0 bg-gray-950/80">
            <img
            src="characterIcon.png" 
            className="relative h-[60px] w-[60px] left-5 select-none pointer-events-none"
            />
            <div className="relative flex flex-row space-x-5 left-10">
                <a className="bg-[url('/assets/githubIcon.png')] p-1 taskbarIcon-hover taskbarIcon" 
                    href="https://github.com/FAFernandez247" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                />
                <a className="bg-[url('/assets/linkedInIcon.png')] p-1 taskbarIcon-hover taskbarIcon" 
                    href="https://www.linkedin.com/in/felicity-andrea-f-633626138/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                />
                <a className="bg-[url('/assets/gmailIcon.png')] p-1 taskbarIcon-hover taskbarIcon" 
                    href="mailto:felicityfernandez247@gmail.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Gmail"
                />
            </div>
            <p className="absolute right-8 bottom-4 text-white press-start-2p text-md">{time}</p>
        </div>
    )
}
