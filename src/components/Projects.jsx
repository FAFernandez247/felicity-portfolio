export default function Projects(){
    const projects = [
    {
      title: "Testing",
      featured: [
        { id: 1, name: "SwagLabs Playwright Tests", image: "slSS.PNG", description: "End-to-end test suite for Saucedemo using Playwright with POM.", videoDemo: "https://drive.google.com/file/d/1CSXUnoRjvWsVDlRDmV3UByQGXhfy1eSS/view?usp=sharing", link: "https://github.com/FAFernandez247/playwright-saucedemo-tests", 
            tags: [
                { id: 1, name: "Playwright" },
                { id: 2, name: "Lighthouse" },
                { id: 3, name: "Faker.js" },
                { id: 4, name: "Page Object Models" },
                { id: 5, name: "Fixtures" },
                { id: 6, name: "Data-Driven Test" },
                { id: 7, name: "Storage State" },
            ]
        },
        { id: 2, name: "QA Training Project – Pre-release Web App", image: "tripinasSS.PNG", description: "Playwright test automation for a pre-release web application.", link: "https://github.com/FAFernandez247/Fernadez-tripinas", 
            tags: [
                { id: 1, name: "Playwright" },
                { id: 2, name: "Faker.js" },
                { id: 3, name: "Page Object Models" },
                { id: 4, name: "Fixtures" },
                { id: 5, name: "Data-Driven Test" },
                { id: 6, name: "Storage State" },
            ]
        },
        { id: 3, name: "PawPrints & Co. - Hackathon Collaboration", image: "pawprintsSS.PNG", description: "Home page testing for a fullstack trainee hackathon using Playwright.", link: "https://github.com/mrierldn/PawPrints/tree/felicity-dev", 
            tags: [
                { id: 1, name: "Playwright" },
                { id: 2, name: "Page Object Models" },
                { id: 3, name: "Fixtures" },
            ]
        },
      ],
    },
    {
      title: "Frontend Development",
      featured: [
        { id: 4, name: "Pixel OS Portfolio", image: "portfolioSS.PNG", description: "Interactive pixel OS desktop portfolio with parallax clouds, taskbar navigation, and folder-based content organization.", link: "https://github.com/FAFernandez247/my-portfolio", 
            tags: [
                { id: 1, name: "React" },
                { id: 2, name: "TailwindCSS" },
                { id: 3, name: "Vite" },
                { id: 4, name: "Pixelorama" },
                { id: 5, name: "LunaPic" },
            ]
        },
      ],
    },
    {
      title: "Creative Work",
      featured: [
        { id: 5, name: "Isometric Voxel Room", image: "isoVoxelRoom.png", description: "A 3D isometric voxel room created with MagicaVoxel and Blender", 
            tags: [
                { id: 1, name: "MagicaVoxel" },
                { id: 2, name: "Blender" },
            ]
        },
      ],
    },
  ];
    return(
        <div className="flex flex-col gap-4 lg:gap-6 min-h-0 h-full">
        {projects.map((project) => (
        <div key={project.title} className="flex-shrink-0">
            <div
            className="flex gap-3 items-center mb-1 p-2 exitButton-bevel bg-darkpastelpink dark:bg-darkerpastelblue hover:bg-peach hover:dark:bg-darkblue/80"
            >
                <div
                    className="w-8 h-6 lg:w-12 lg:h-10 bg-no-repeat bg-contain"
                    style={{ 
                        backgroundImage: `url(./assets/folderIcon.png)`
                    }}
                />
                <h4 className="press-start-2p text-xs lg:text-sm lg:mb-2 lg:pt-2">{project.title}</h4>
            </div>
          <div className="flex flex-col gap-1 min-h-0">
            {project.featured.map((feature) => (
              <div
                key={feature.id}
                className="flex flex-col gap-3 items-center mx-4 lg:mx-8 bg-darkpastelpink/50 dark:bg-darkerpastelblue/30 p-2 exitButton-bevel hover:bg-peach/70 hover:dark:bg-darkblue/50 flex-shrink-0"
              >
                <div className="w-full bg-cream dark:bg-pastelblue p-2 border-b-2 border-gray-600 text-center">
                    <h6 className="vt323 text-pink-950 dark:text-blue-950 font-bold">{feature.name}</h6>
                </div>
                <div className="w-full max-w-sm flex justify-center">
                    <div className={`relative w-full max-w-sm border-4 border-pink-950 dark:border-blue-950 hover:scale-105 transition-transform bg-gray-200 dark:bg-gray-700 flex items-center justify-center ${
                    feature.image === "isoVoxelRoom.png" ? "h-52 lg:h-60" : "h-48 lg:h-56"
                    }`}>
                    <img 
                        src={`./assets/${feature.image}`}
                        alt={feature.name}
                        className="max-w-full max-h-full object-contain"
                    />
                    </div>
                </div>
                <p className="vt323 text-black mx-3 indent-5 font-semibold">{feature.description}</p>
                <div className="flex flex-row flex-wrap justify-center gap-2">
                  {feature.tags.map((tag) => (
                    <div key={tag.id} className="bg-gray-600/50 dark:bg-gray-600/50 px-2 py-1 border-b-2 border-r-2 border-cream dark:border-pastelblue">
                      <p className="vt323 text-black dark:text-white text-xs lg:text-sm">{tag.name}</p>
                    </div>
                  ))}
                </div>
                <div className="flex gap-3 flex-wrap justify-center">
                      {feature.link && (
                        <a 
                          href={feature.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 bg-gray-700 hover:bg-gray-800 dark:bg-gray-800 dark:hover:bg-gray-900 text-white px-2 lg:px-4 py-1 lg:py-2 transition-colors vt323 border-b-4 border-r-4 border-gray-950 text-xs lg:text-sm"
                        >
                          <img 
                            src="./assets/githubIcon.png" 
                            alt="GitHub" 
                            className="w-4 h-4"
                          />
                          <span>View on GitHub</span>
                        </a>
                      )}
                      {feature.videoDemo && (
                        <a 
                          href={feature.videoDemo} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 bg-red-500 hover:bg-red-600 dark:bg-red-700 dark:hover:bg-red-800 text-white px-2 lg:px-4 py-1 lg:py-2 transition-colors vt323 border-b-4 border-r-4 border-red-950 text-xs lg:text-sm"
                        >
                          <img 
                            src="./assets/videoPlayIcon.png" 
                            alt="Video Demo" 
                            className="w-4 h-4"
                          />
                          <span>Watch Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
        ))}
        </div>
    )
}