export default function ParallaxClouds({ mousePos }) {
  return (
    <>
      <img 
        src="/assets/Cloud2.png" 
        alt="Cloud2" 
        className="absolute bottom-10 left-200 select-none pointer-events-none"
        style={{ transform: `translate(${mousePos.x * 1.5}px, ${mousePos.y * 0.5}px)` }}
      />
      <img 
        src="/assets/Cloud1.png" 
        alt="Cloud" 
        className="absolute bottom-2 left-340 select-none pointer-events-none"
        style={{ transform: `translate(${mousePos.x * 1.8}px, ${mousePos.y * 0.8}px)` }}
      />
      <img 
        src="/assets/Cloud1mirrored.png" 
        alt="Cloud" 
        className="absolute bottom-10 right-330 select-none pointer-events-none"
        style={{ transform: `translate(${mousePos.x * 1.5}px, ${mousePos.y * 0.5}px)` }}
      />
      <img 
        src="/assets/Cloud2mirrored.png" 
        alt="Cloud2" 
        className="absolute bottom-6 left-40 select-none pointer-events-none"
        style={{ transform: `translate(${mousePos.x * 1.8}px, ${mousePos.y * 0.8}px)` }}
      />
    </>
  );
}
