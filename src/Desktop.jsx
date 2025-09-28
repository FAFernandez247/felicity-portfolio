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

    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handleMouseMove = (e) => {
        if (!isMobile) {
            const { innerWidth, innerHeight } = window;
            const x = (e.clientX / innerWidth - 0.5) * 30;
            const y = (e.clientY / innerHeight - 0.5) * 30;
            setMousePos({ x, y });
        }
    };
    const cards = [
    { id: "aboutMe", title: "AboutMe.exe", width: isMobile ? "90vw" : "800", height: isMobile ? "70vh" : "500",  content: <AboutMe/> },
    { id: "skills", title: "Skills", width: isMobile ? "90vw" : "450", height: isMobile ? "80vh" : "600", content: <Skills/> },
    { id: "projects", title: "Projects", width: isMobile ? "90vw" : "600", height: isMobile ? "80vh" : "650", content: <Projects/> },
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
            <div className="absolute inset-0 bg-[url('./assets/stars.png')] bg-repeat bg-center"
            style={{
            backgroundPosition: isMobile ? "center" : `${mousePos.x * 0.2}% ${mousePos.y * 0.2}%`,
            }}/>
            {!isMobile && (
                <img 
                src="./assets/cat-chew.gif" 
                className="absolute bottom-40 right-80 w-30 h-30 rounded-lg shadow-lg transform hover:-translate-y-20 transition-all duration-200 ease-out"
                />
            )}
            <ParallaxClouds mousePos={isMobile ? {x: 0, y: 0} : mousePos} isMobile={isMobile}/>
            <div className="absolute inset-0 gradient-overlay pointer-events-none"/>
            <div className={`flex justify-center ${isMobile ? 'mt-10' : 'mt-10'}`}>
                <button
                onClick={() => setDarkMode(!darkMode)}
                className={`absolute bg-gray-700 dark:bg-gray-300 rounded-full transition-colors focus:outline-none ${isMobile ? 'w-16 h-8' : 'w-20 h-10'}`}
                aria-label="Toggle Dark Mode"
                >
                <span
                    className={`absolute top-1 left-1 bg-white dark:bg-yellow-400 rounded-full shadow-md transform transition-transform ${
                    isMobile ? `w-6 h-6 ${darkMode ? "translate-x-8" : "translate-x-0"}` : `w-8 h-8 ${darkMode ? "translate-x-10" : "translate-x-0"}`
                    }`}
                />
                </button>
            </div>

            <div className={`relative text-center pointer-events-none ${isMobile ? "mt-50 px-4" : "mt-85"}`}>
                <h1 className={`text-shadow-lg/80 press-start-2p ${isMobile ? "text-xl mb-4" : "text-4xl/relaxed"}`}>Learning to BUILD <br className={isMobile ? "hidden" : "block"}/>and BREAK Software</h1>
                <h5 className={`text-shadow-lg/80 vt323 ${isMobile ? "text-[16px] mt-6 font-semibold" : "text-xl mt-12"}`}>Trained in test automation and frontend development, <br className={isMobile ? "hidden" : "block"}/>ready to contribute to modern web projects.</h5>
                <p className={`text-white text-bold vt323 text-sm mt-20 ${isMobile ? "block" : "hidden" } animate-pulse py-1`}>Better experience on desktop!</p>
            </div>

            <div className={`absolute flex items-center gap-8 ${isMobile ? "bottom-40 inset-x-0 justify-center flex-row space-y-0" : "right-20 top-20 flex-col space-y-20"}`}>
                <div className="flex flex-col items-center gap-2">
                    <img 
                        src="./assets/blenderIcon.png" 
                        className={isMobile ? "w-12 h-12" : "w-16 h-16"}
                    />
                    <h6 className="vt323 text-shadow-lg/80 text-sm md:text-lg">Blender</h6>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <img 
                        src="./assets/pixeloramaIcon.png" 
                        className={isMobile ? "w-12 h-12" : "w-16 h-16"}
                    />
                    <h6 className="vt323 text-shadow-lg/80 text-sm md:text-lg">Pixelorama</h6>
                </div>
               <div className="flex flex-col items-center gap-2">
                    <img 
                        src="./assets/vscodeIcon.png" 
                        className={isMobile ? "w-12 h-12" : "w-16 h-16"}
                    />
                    <h6 className="vt323 text-shadow-lg/80 text-sm md:text-lg">VS Code</h6>
                </div>
            </div>

            {/* buttons */}
            <div className={`absolute flex gap-8 ${isMobile ? "bottom-70 flex-row inset-x-0 justify-center space-y-0" : "top-20 left-20 flex-col space-y-20"}`}>
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
                    isMobile={isMobile}
                    />
                ))}
            </div>


            {/* taskbar */}
            <Taskbar isMobile={isMobile}/>
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