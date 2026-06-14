import { motion } from "motion/react";

export default function Skill() {
    return (
        <>
            <motion.section
                className="max-w-4xl mx-auto px-6 py-12"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-3xl font-['Cabinet_Grotesk'] font-semibold mb-6">Skills</h2>

                <div className="flex flex-col md:flex-row gap-2">
                    {/* card 1 */}
                    <div className="w-full md:w-1/2 glass glassHover card-accent card-lift flex flex-col rounded-xl sm:rounded-tl-4xl p-4 sm:p-6 ">
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
                    </div>

                    {/* card 2 */}
                    <div className="w-full md:w-1/2 glass glassHover card-accent card-lift flex flex-col rounded-xl sm:rounded-tr-4xl p-4 sm:p-6 ">
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
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-2 mt-2">
                    {/* card 3 */}
                    <div className="w-full md:w-1/2 glass glassHover card-accent card-lift flex flex-col rounded-xl sm:rounded-bl-4xl p-4 sm:p-6 ">
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
                    </div>

                    {/* card 4 */}
                    <div className="w-full md:w-1/2 glass glassHover card-accent card-lift flex flex-col rounded-xl sm:rounded-br-4xl p-4 sm:p-6 ">
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
                    </div>

                </div>

            </motion.section>
        </>
    )
}