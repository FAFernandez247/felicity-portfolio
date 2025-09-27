import { useState, useEffect, useRef } from "react";
import FolderButtons from "./components/Folders.jsx"
import Taskbar from "./components/TaskBar.jsx";
import ParallaxClouds from "./components/Clouds.jsx";
import Cards from "./components/Cards.jsx";
import AboutMe from "./components/AboutMe.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";

export default function App() {
    const [zIndexes, setZIndexes] = useState({});
    const [highestZ, setHighestZ] = useState(1);

    const [openCards, setOpenCards] = useState({});
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const handleMouseMove = (e) => {
        const { innerWidth, innerHeight } = window;
        const x = (e.clientX / innerWidth - 0.5) * 30;
        const y = (e.clientY / innerHeight - 0.5) * 30;
        setMousePos({ x, y });
    };
    const cards = [
    { id: "aboutMe", title: "AboutMe.exe", width:"800", height:"500", content: <AboutMe/> },
    { id: "skills", title: "Skills", width:"450", height:"600", content: <Skills/> },
    { id: "projects", title: "Projects", width:"600", height:"650", content: <Projects/> },
    ];
    const [darkMode, setDarkMode] = useState(false);
    useEffect(() => {
        const html = document.documentElement;
        if (darkMode) {
        html.classList.add("dark");
        } else {
        html.classList.remove("dark");
        }
    }, [darkMode]);
    return (
        <div className="h-screen w-screen flex flex-col relative overflow-hidden"
        onMouseMove={handleMouseMove}>
            <div className="absolute inset-0 backdrop pointer-events-none"/>
            <div className="absolute inset-0 bg-[url('/assets/stars.png')] bg-repeat bg-center"
            style={{
            backgroundPosition: `${mousePos.x * 0.2}% ${mousePos.y * 0.2}%`,
            }}/>
            <img 
            src="/assets/cat-chew.gif" 
            className="absolute bottom-40 right-80 w-30 h-30 rounded-lg shadow-lg transform hover:-translate-y-20 transition-all duration-200 ease-out"
            />
            <ParallaxClouds mousePos={mousePos}/>
            <div className="absolute inset-0 gradient-overlay pointer-events-none"/>
            <div className="flex justify-center mt-10">
            <button
            onClick={() => setDarkMode(!darkMode)}
            className="absolute w-20 h-10 bg-gray-700 dark:bg-gray-300 rounded-full transition-colors focus:outline-none"
            aria-label="Toggle Dark Mode"
            >
            <span
                className={`absolute top-1 left-1 w-8 h-8 bg-white dark:bg-yellow-400 rounded-full shadow-md transform transition-transform ${
                darkMode ? "translate-x-10" : "translate-x-0"
                }`}
            />
            </button>
            </div>
            <div className="absolute right-20 top-20 flex flex-col space-y-20">
                <div className="flex flex-col items-center gap-2">
                    <img 
                        src="/assets/blenderIcon.png" 
                        className="w-16 h-16"
                    />
                    <h6 className="vt323 text-shadow-lg/80">Blender</h6>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <img 
                        src="/assets/pixeloramaIcon.png" 
                        className="w-16 h-16"
                    />
                    <h6 className="vt323 text-shadow-lg/80">Pixelorama</h6>
                </div>
               <div className="flex flex-col items-center gap-2">
                    <img 
                        src="/assets/vscodeIcon.png" 
                        className="w-16 h-16"
                    />
                    <h6 className="vt323 text-shadow-lg/80">VS Code</h6>
                </div>
            </div>

            {/* buttons */}
            <div className="absolute left-20 top-20 flex flex-col space-y-20">
                {cards.map(card => (
                    <FolderButtons
                    key={card.id}
                    card={card}
                    openCards={openCards}
                    setOpenCards={setOpenCards}
                    zIndexes={zIndexes}
                    setZIndexes={setZIndexes}
                    highestZ={highestZ}
                    setHighestZ={setHighestZ}
                    />
                ))}
            </div>
            <h1 className="relative text-shadow-lg/80 text-center press-start-2p mt-85 pointer-events-none">Learning to BUILD <br/><br/> and BREAK Software</h1>
            <h5 className="relative text-shadow-lg/80 text-center vt323 mt-25 pointer-events-none">Trained in test automation and frontend development, <br/>ready to contribute to modern web projects.</h5>
            {/* taskbar */}
                <Taskbar/>
            <Cards 
            openCards={openCards} 
            setOpenCards={setOpenCards} 
            cards={cards}
            zIndexes={zIndexes}
            setZIndexes={setZIndexes}
            highestZ={highestZ}
            setHighestZ={setHighestZ}
            />
        </div>
        
    )
}