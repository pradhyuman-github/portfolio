import { motion } from "motion/react"; 4

const cardEffect = {
    hidden: {
        opacity: 0,
        y: 25,
    },
    visible: (delay) => ({
        opacity: 1,
        y: 0,
        transition:
        {
            delay,
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1]
        }
    })
};

export default function Skill() {
    return (
        <>
            <motion.section
                className="max-w-4xl mx-auto px-6 py-12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
            >
                <h2 className="text-3xl font-['Cabinet_Grotesk'] font-semibold mb-6">Skills</h2>

                <motion.div className="flex flex-col md:flex-row gap-3" >
                    {/* card 1 */}
                    <motion.div
                        variants={cardEffect}
                        custom={0} 
                        className="w-full md:w-1/2 glass glassHover card-accent flex flex-col rounded-xl sm:rounded-none sm:rounded-tl-4xl p-4 sm:p-6 duration-300 ease-out transform hover:-translate-y-2"
                    >
                        <p className="text-gray-400 text-sm font-['Jetbrains_Mono'] mb-4">01</p>
                        <h3 className="text-xl font-semibold font-['Cabinet_Grotesk']"> Frontend </h3>
                        <p className="text-purple-100 text-xs sm:text-sm mt-2">
                            Crafting responsive, accessible, and performant interfaces with modern frameworks and motion design.
                        </p>
                        <div className="flex flex-wrap gap-2 mt-4">
                            {["HTML", "CSS", "JavaScript", "React.js", "Tailwind", "Responsive Design", "Framer Motion"].map((tech) => (
                                <span
                                    key={tech}
                                    className="text-xs px-3 py-1 rounded text-purple-400 glassPurple"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* card 2 */}
                    <motion.div
                        variants={cardEffect}
                        custom={0.25}
                        className="w-full md:w-1/2 glass glassHover card-accent flex flex-col rounded-xl sm:rounded-none sm:rounded-tr-4xl p-4 sm:p-6 duration-300 ease-out transform hover:-translate-y-2"
                    >
                        <p className="text-gray-400 text-sm font-['Jetbrains_Mono'] mb-4">02</p>
                        <h3 className="text-xl font-semibold font-['Cabinet_Grotesk']">Backend & Database</h3>
                        <p className="text-purple-100 text-xs sm:text-sm mt-2">
                            Building server-side APIs, handling authentication, managing databases, and integrating with web applications.
                        </p>
                        <div className="flex flex-wrap gap-2 mt-4">
                            {["Node.js", "Express.js", "JSON Web Token (JWT)", "MongoDB", "MySQL"].map((tech) => (
                                <span
                                    key={tech}
                                    className="text-xs px-3 py-1 rounded text-purple-400 glassPurple"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div className="flex flex-col md:flex-row gap-3 mt-3" >
                    {/* card 3 */}
                    <motion.div
                        variants={cardEffect}
                        custom={0.5}
                        className="w-full md:w-1/2 glass glassHover card-accent flex flex-col rounded-xl sm:rounded-none sm:rounded-bl-4xl p-4 sm:p-6 duration-300 ease-out transform hover:-translate-y-2"
                    >
                        <p className="text-gray-400 text-sm font-['Jetbrains_Mono'] mb-4">03</p>
                        <h3 className="text-xl font-semibold font-['Cabinet_Grotesk']">Tools</h3>
                        <p className="text-purple-100 text-xs sm:text-sm mt-2">
                            Managing version control, collaboration, and automation testing workflows.
                        </p>
                        <div className="flex flex-wrap gap-2 mt-4">
                            {["Git", "GitHub", "Playwright"].map((tech) => (
                                <span
                                    key={tech}
                                    className="text-xs px-3 py-1 rounded text-purple-400 glassPurple"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* card 4 */}
                    <motion.div
                        variants={cardEffect}
                        custom={0.75}                        
                        className="w-full md:w-1/2 glass glassHover card-accent flex flex-col rounded-xl sm:rounded-none sm:rounded-br-4xl p-4 sm:p-6 duration-300 ease-out transform hover:-translate-y-2"
                    >
                        <p className="text-gray-400 text-sm font-['Jetbrains_Mono'] mb-4">04</p>
                        <h3 className="text-xl font-semibold font-['Cabinet_Grotesk']">Deployment</h3>
                        <p className="text-purple-100 text-xs sm:text-sm mt-2">
                            Deploying and hosting web applications using modern cloud and static hosting platforms.
                        </p>
                        <div className="flex flex-wrap gap-2 mt-4">
                            {["Vercel", "Render", "GitHub Pages"].map((tech) => (
                                <span
                                    key={tech}
                                    className="text-xs px-3 py-1 rounded text-purple-400 glassPurple"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                </motion.div>

            </motion.section>
        </>
    )
}