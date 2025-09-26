export default function AboutMe(){
    return(
        <>
        <div className="flex flex-wrap items-start">
            <div className="flex-1 mt-20">
                <h4 className="press-start-2p text-lg">Felicity Andrea B. Fernandez</h4>
                <h6 className="vt323 text-pink-950 dark:text-blue-950">Software Tester passionate about quality and continuous learning</h6>
            </div>
            <div className="flip-container w-48 h-56 border-8 border-pink-950 dark:border-blue-950 mb-6">
                <div className="flip-inner relative w-full h-full">
                    <img
                    src="/assets/pixelMe.jpg"
                    className="flip-front w-full h-full"/>
                    <img
                    src="/assets/me.jpg"
                    className="flip-back w-full h-full"/>
                </div>
            </div>
            <div className="space-y-3">
                <p className="vt323 text-justify indent-10">
                    Hi, I’m Felicity Andrea B. Fernandez, a <span className="font-bold">Computer Science graduate</span> focused on starting my career as a <span className="font-bold">Software Tester</span>. 
                    I’ve <span className="font-bold">trained in both manual and automated testing</span> with <span className="font-bold">Playwright</span>,along with exposure to tools like <span className="font-bold">Lighthouse, Artillery, and GitHub Actions</span> for performance testing and CI/CD workflows.
                </p>

                <p className="vt323 text-justify indent-10">
                    I also gained <span className="font-bold">frontend development experience</span> during my OJT with <span className="font-bold">Vue.js</span> and <span className="font-bold">Quasar</span>, and earlier projects using <span className="font-bold">HTML</span>, <span className="font-bold">CSS</span>, and <span className="font-bold">JavaScript</span>. 
                    Recently, I’ve been <span className="font-bold">studying React and Tailwind CSS</span> to strengthen my skills and stay current with modern technologies.
                </p>

                <p className="vt323 text-justify indent-10">
                    <span className="font-bold">I enjoy uncovering bugs</span> and improving software quality. Outside of tech, I explore creative projects in <span className="font-bold">3D modeling with Blender</span>, which complements my technical work.
                </p>

                <p className="vt323 text-justify indent-10">
                    My goal is to grow as a professional in software testing and contribute to building <span className="font-bold">high-quality, reliable software</span>.
                </p>
            </div>
        </div>
        </>
    )
}