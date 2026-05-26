import { motion } from "motion/react";

export default function Skill() {
    return (
        <>
            {/* Education */}
            <section className="max-w-4xl mx-auto px-6 py-12">
                <h2 className="text-2xl font-semibold mb-4">Education</h2>
                <motion.div
                    className="glowbox p-6"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <p className="leading-relaxed">
                        JECRC University, Jaipur <br />
                        B.Tech in Computer Science Engineering <br />
                        (2021 - 2025)
                    </p>
                </motion.div>
            </section>


            {/* SKILLS */}
            <section className="max-w-4xl mx-auto px-6 py-12">
                <h2 className="text-2xl font-semibold mb-6">Skills</h2>

                <motion.div
                    className="flex flex-col gap-5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.08 } }
                    }}
                >
                    {/* Row 1 */}
                    <div className="flex justify-center gap-4 flex-wrap">
                        {["HTML", "CSS", "JavaScript"].map((skill, index) => (
                            <motion.span
                                key={skill}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{ y: -6, scale: 1.05 }}
                                transition={{ duration: 0.3, ease: "easeOut", delay: index * 0.03 }}
                                className="glowbox px-4 py-3 text-md"
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </div>

                    {/* Row 2 */}
                    <div className="flex justify-center gap-4 flex-wrap">
                        {[
                            "React",
                            "Tailwind CSS",
                            "Responsive Design",
                            "Git/GitHub",
                        ].map((skill, index) => (
                            <motion.span
                                key={skill}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{ y: -6, scale: 1.05 }}
                                transition={{ duration: 0.3, ease: "easeOut", delay: index * 0.03 }}
                                className="glowbox px-4 py-3 text-md"
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </div>

                    {/* Row 3 */}
                    <div className="flex justify-center gap-4 flex-wrap">
                        {["Node.js", "Express.js", "Playwright"].map((skill, index) => (
                            <motion.span
                                key={skill}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{ y: -6, scale: 1.05 }}
                                transition={{ duration: 0.3, ease: "easeOut", delay: index * 0.03 }}
                                className="glowbox px-4 py-3 text-md"
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </section>


            {/* EXPERIENCE */}
            <section className="max-w-4xl mx-auto px-6 py-12">
                <h2 className="text-2xl font-semibold mb-8">Experience</h2>

                {/* Experience Card */}
                <motion.div
                    className="bg-[#111827] border border-gray-800 rounded-xl p-6"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-lg font-semibold">
                        Software Automation Intern
                    </h3>

                    <p className="text-sm text-gray-400 mt-1">
                        <span className="italic font-semibold"> Cocoabirch India, Jaipur </span>  <br /> Internship • March 2025 - April 2025
                    </p>

                    <ul className="list-disc list-inside text-gray-400 mt-4 space-y-2">
                        <li>
                            Conducted manual and automated testing to maintain product quality and reliability.
                        </li>
                        <li>
                            Designed and executed UI automation scripts using Playwright with JavaScript.
                        </li>
                        <li>
                            Verified new features to ensure proper functionality and alignment with business requirements.
                        </li>
                    </ul>
                </motion.div>


                <motion.div
                    className="bg-[#111827] border border-gray-800 rounded-xl p-6 mt-4"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1.2 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-lg font-semibold">
                        Full Stack Developer Intern
                    </h3>

                    <p className="text-sm text-gray-400 mt-1">
                        <span className="italic font-semibold"> Techlancea, Bhilwara </span> <br /> Internship • March 2026 - Present
                    </p>

                    <ul className="list-disc list-inside text-gray-400 mt-4 space-y-2">
                        <li>
                            Developing responsive and user-friendly frontend interfaces using modern web technologies.
                        </li>
                        <li>
                            Working on 3 client-based frontend projects, implementing reusable UI components and responsive layouts.
                        </li>
                        <li>
                            Collaborating on frontend integration, debugging, and enhancing overall performance.
                        </li>
                    </ul>
                </motion.div>
            </section>

        </>
    )
}