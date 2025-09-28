export default function ParallaxClouds({mousePos, isMobile = false}) {
  const getTransform = (xMultiplier, yMultiplier) => {
    if (isMobile) {
      return 'translate(0px, 0px)';
    }
    return `translate(${mousePos.x * xMultiplier}px, ${mousePos.y * yMultiplier}px)`;
  };
  return (
    <>
      <img 
        src="./assets/Cloud2.png" 
        alt="Cloud2" 
        className={`absolute select-none pointer-events-none ${isMobile ? "bottom-3 left-10 opacity-60" : "bottom-10 left-200"}`}
        style={{transform: getTransform(1.5, 0.5)}}
      />
      <img 
        src="./assets/Cloud1.png" 
        alt="Cloud" 
        className={`absolute select-none pointer-events-none ${isMobile ? "bottom-8 left-20 opacity-60" : "bottom-2 left-340"}`}
        style={{transform: getTransform(1.8, 0.8)}}
      />
      <img 
        src="./assets/Cloud1mirrored.png" 
        alt="Cloud" 
        className={`absolute select-none pointer-events-none ${isMobile ? "bottom-0 right-10 opacity-60" : "bottom-10 right-330"}`}
        style={{transform: getTransform(1.5, 0.5)}}
      />
      <img 
        src="./assets/Cloud2mirrored.png" 
        alt="Cloud2" 
        className={`absolute select-none pointer-events-none ${isMobile ? "bottom-4 right-6 opacity-60" : "bottom-6 left-40"}`}
        style={{transform: getTransform(1.8, 0.8)}}
      />
    </>
  );
}
