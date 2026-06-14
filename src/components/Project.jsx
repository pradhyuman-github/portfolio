import { motion } from "motion/react";

export default function Project() {
    return (
        <>
            <section id="project" className="max-w-4xl mx-auto mt-8 px-6 py-12">
                <h2 className="text-3xl font-['Cabinet_Grotesk'] mb-10">Projects</h2>

                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 gap-8"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Project Card  1 */}
                    <div className="glassCyan flex flex-col rounded-xl p-4 sm:p-6 shadow-lg transition-all duration-300 ease-out transform hover:-translate-y-2">
                        <h3 className="text-lg sm:text-xl font-['Cabinet_Grotesk']">E-commerce BookStore</h3>
                        <p className="text-cyan-100 text-xs sm:text-sm mt-2">
                            Developed a full-stack bookstore e-commerce web application with responsive UI, product search/filtering, authentication, cart, and checkout functionality.
                        </p>

                        <div className="flex flex-wrap gap-2 mt-4">
                            {["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Framer Motion"].map((tech) => (
                                <span
                                    key={tech}
                                    className="text-xs px-3 py-1 rounded-full glassCyan text-cyan-400"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex gap-3 mt-auto pt-4">
                            <a
                                href="https://bookstore-frontend-al1q.onrender.com/" target='_blank'
                                className="inline-block w-7 h-7 sm:w-10 sm:h-10 rounded glass glassHover"
                            >
                                <p className="text-center text-base sm:text-xl sm:pt-1 ri-external-link-line"></p>
                            </a>

                            <a
                                href="https://github.com/pradhyuman-github/bookstore" target='_blank'
                                className="inline-block w-7 h-7 sm:w-10 sm:h-10 rounded glass glassHover"
                            >
                                <p className="text-center text-base sm:text-xl sm:pt-1 ri-github-fill"></p>
                            </a>
                        </div>
                    </div>

                        
                    {/* CARD 2 */}
                    <div className="glassCyan flex flex-col rounded-xl p-4 sm:p-6 shadow-lg transition-all duration-300 ease-out transform hover:-translate-y-2">
                        <h3 className="text-lg sm:text-xl font-['Cabinet_Grotesk']">Sky Glimpse</h3>
                        <p className="text-cyan-100 text-xs sm:text-sm mt-2">
                            A real-time weather application using public weather APIs with
                            dynamic UI updates and responsive design.
                        </p>
                        <div className="flex flex-wrap gap-2 mt-4">
                            {["HTML", "CSS", "JavaScript", "API"].map((tech) => (
                                <span
                                    key={tech}
                                    className="text-xs px-3 py-1 rounded-full glassCyan text-cyan-400"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex gap-3 mt-auto pt-4">
                            <a
                                href="https://pradhyuman-github.github.io/weather/" target='_blank'
                                className="inline-block w-7 h-7 sm:w-10 sm:h-10 rounded glass glassHover"
                            >
                                <p className="text-center text-base sm:text-xl sm:pt-1 ri-external-link-line"></p>
                            </a>

                            <a
                                href="https://github.com/pradhyuman-github/weather" target='_blank'
                                className="inline-block w-7 h-7 sm:w-10 sm:h-10 rounded glass glassHover"
                            >
                                <p className="text-center text-base sm:text-xl sm:pt-1 ri-github-fill"></p>
                            </a>
                        </div>
                    </div>


                    {/* CARD 3 */}
                    <div className="glassCyan flex flex-col rounded-xl p-4 sm:p-6 shadow-lg transition-all duration-300 ease-out transform hover:-translate-y-2">
                        <h3 className="text-lg sm:text-xl font-['Cabinet_Grotesk']">Pizza House</h3>
                        <p className="text-cyan-100 text-xs sm:text-sm mt-2">
                            Designed a visually appealing pizza website for showcasing menu items, offers, and contact details.
                        </p>
                        <div className="flex flex-wrap gap-2 mt-4">
                            {["HTML", "CSS", "JavaScript", "UI Design"].map((tech) => (
                                <span
                                    key={tech}
                                    className="text-xs px-3 py-1 rounded-full glassCyan text-cyan-400"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex gap-3 mt-auto pt-4">
                            <a
                                href="https://pradhyuman-github.github.io/pizza-page/" target='_blank'
                                className="inline-block w-7 h-7 sm:w-10 sm:h-10 rounded glass glassHover"
                            >
                                <p className="text-center text-base sm:text-xl sm:pt-1 ri-external-link-line"></p>
                            </a>

                            <a
                                href="https://github.com/pradhyuman-github/pizza-page" target='_blank'
                                className="inline-block w-7 h-7 sm:w-10 sm:h-10 rounded glass glassHover"
                            >
                                <p className="text-center text-base sm:text-xl sm:pt-1 ri-github-fill"></p>
                            </a>
                        </div>
                    </div>


                    {/* CARD 4 */}
                    <div className="glassCyan flex flex-col rounded-xl p-6 shadow-lg transition-all duration-300 ease-out transform hover:-translate-y-2">
                        <h3 className="text-lg sm:text-xl font-['Cabinet_Grotesk']">Frontend projects</h3>
                        <p className="text-gray-400 text-xs sm:text-sm mt-2">
                            Collection of some frontend-specific projects.
                        </p>
                        <div className="flex flex-wrap gap-2 mt-4">
                            {["HTML/CSS", "JS", "React", "Tailwind CSS"].map((tech) => (
                                <span
                                    key={tech}
                                    className="text-xs px-3 py-1 rounded-full glassCyan text-cyan-400"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex gap-3 mt-auto pt-4">
                            <a
                                href="https://pradhyuman-github.github.io/Components/" target='_blank'
                                className="inline-block w-7 h-7 sm:w-10 sm:h-10 rounded glass glassHover"
                            >
                                <p className="text-center text-base sm:text-xl sm:pt-1 ri-external-link-line"></p>
                            </a>

                            <a
                                href="https://github.com/pradhyuman-github/Components" target='_blank'
                                className="inline-block w-7 h-7 sm:w-10 sm:h-10 rounded glass glassHover"
                            >
                                <p className="text-center text-base sm:text-xl sm:pt-1 ri-github-fill"></p>
                            </a>
                        </div>
                    </div>

                </motion.div>
            </section>

        </>
    )
}