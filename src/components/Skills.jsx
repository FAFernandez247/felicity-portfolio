export default function Skills() {
  const categories = [
    {
      title: "Testing & QA",
      skills: [
        { id: 1, name: "Playwright", icon: "pwIcon" },
        { id: 2, name: "Lighthouse", icon: "folderIcon" }, 
        { id: 3, name: "Artillery", icon: "folderIcon" },
      ],
    },
    {
      title: "Frontend Development",
      skills: [
        { id: 4, name: "JavaScript", icon: "jsIcon" },
        { id: 5, name: "HTML", icon: "htmlIcon" },
        { id: 6, name: "CSS", icon: "cssIcon" },
        { id: 7, name: "React", icon: "reactIcon" },
        { id: 8, name: "TailwindCSS", icon: "tailwindIcon" },
        { id: 9, name: "Vite", icon: "viteIcon" },
      ],
    },
    {
      title: "Tools & Collaboration",
      skills: [
        { id: 10, name: "GitHub", icon: "githubIcon" },
        { id: 11, name: "CI/CD (GitHub Actions)", icon: "folderIcon" },
        { id: 12, name: "MySQL", icon: "mysqlIcon" },
      ],
    },
    {
      title: "Creative",
      skills: [
        { id: 13, name: "Blender", icon: "blenderIcon" },
      ],
    },
    {
        title: "??? (Locked)",
        locked: true,
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      {categories.map((category) => (
        <div key={category.title}>
            <div
            className={`flex gap-3 items-center mb-1 p-2 exitButton-bevel ${
              category.locked
                ? "opacity-50 cursor-not-allowed"
                : "bg-darkpastelpink dark:bg-darkerpastelblue hover:bg-peach hover:dark:bg-darkblue"
            }`}
            title={category.locked ? "Hire to unlock my full potential ✨" : ""}
            >
                <div
                    className="w-12 h-10 bg-no-repeat bg-contain"
                    style={{ backgroundImage: `url(${
                        category.locked 
                        ? "/assets/lockIcon.png"
                        : "/assets/folderIcon.png"
                        })`,
                    }}
                />
                <h4 className="press-start-2p text-sm mb-2 pt-2">{category.title}</h4>
            </div>
        {!category.locked && (
          <div className="flex flex-col gap-1">
            {category.skills.map((skill) => (
              <div
                key={skill.id}
                className="flex gap-3 items-center ml-8 bg-darkpastelpink dark:bg-darkerpastelblue p-2 exitButton-bevel hover:bg-peach hover:dark:bg-darkblue"
              >
                <div
                  className={`${skill.icon === "folderIcon" ? "w-12 h-10" : "w-10 h-10"} bg-no-repeat bg-contain`}
                  style={{
                    backgroundImage: `url(/assets/${skill.icon}.png)`
                  }}
                />
                <h6 className="vt323 text-black font-semibold m-0">
                  {skill.name}
                </h6>
              </div>
            ))}
          </div>
        )}
        </div>
      ))}
    </div>
  );
}
