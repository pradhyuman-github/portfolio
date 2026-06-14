import { motion } from "motion/react";

export default function Experience() {
    return (
        <>
            {/* EXPERIENCE */}
            <section 
                id="experience"
                className="max-w-4xl mx-auto px-6 py-16 mt-4">
                <h2 className="text-3xl font-['Cabinet_Grotesk'] font-semibold mb-8">Experience</h2>

                {/* Experience Card */}
                <motion.div
                    className="glass border border-gray-800 rounded-xl p-4 sm:p-6"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1.2 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-lg font-semibold">
                        Full Stack Developer Intern
                    </h3>

                    <p className="text-sm text-gray-400 mt-1">
                        <span className="italic font-semibold"> Techlancea, Bhilwara </span> <br /> Internship • January 2026 - Present
                    </p>

                    <div className="text-gray-400 text-xs sm:text-base mt-4 space-y-2">
                        <p className="flex items-baseline sm:items-center">
                            <span className="ri-arrow-right-s-fill text-base sm:text-xl font-bold text-purple-600"></span>
                            Developing responsive and user-friendly frontend interfaces using modern web technologies.
                        </p>
                        <p className="flex items-baseline sm:items-center">
                            <span className="ri-arrow-right-s-fill text-base sm:text-xl font-bold text-purple-600"></span>
                            Working on 2 client-based frontend projects, implementing reusable UI components and responsive layouts.
                        </p>
                        <p className="flex items-baseline sm:items-center">
                            <span className="ri-arrow-right-s-fill text-base sm:text-xl font-bold text-purple-600"></span>
                            Collaborating on frontend integration, debugging, and enhancing overall performance.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    className="glass border border-gray-800 rounded-xl p-4 sm:p-6 mt-4"
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

                    <div className="text-gray-400 text-xs sm:text-base mt-4 space-y-2">
                        <p className="flex items-baseline sm:items-center"> 
                            <span className="ri-arrow-right-s-fill text-base sm:text-xl font-bold text-purple-600"></span>
                            Conducted manual and automated testing to maintain product quality and reliability.
                        </p>
                        <p className="flex items-baseline sm:items-center">
                            <span className="ri-arrow-right-s-fill text-base sm:text-xl font-bold text-purple-600"></span>
                            Designed and executed UI automation scripts using Playwright with JavaScript.
                        </p>
                        <p className="flex items-baseline sm:items-center">
                            <span className="ri-arrow-right-s-fill text-base sm:text-xl font-bold text-purple-600"></span>
                            Verified new features to ensure proper functionality and alignment with business requirements.
                        </p>
                    </div>
                </motion.div>


            </section>
        </>
    );
}