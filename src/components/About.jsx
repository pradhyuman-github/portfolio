import { motion } from "motion/react";

export default function About() {
    return (
        <>
            <section id="about" className="max-w-4xl mx-auto px-6 py-10 sm:py-20">
                <motion.div
                    className="py-10 sm:py-16 my-4 sm:my-8 text-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="font-['Cabinet_Grotesk'] text-3xl sm:text-4xl md:text-5xl font-bold textGradient">Hi, I'm Pradhyuman</h1>
                    <p className="font-['Cabinet_Grotesk'] mt-4 text-base sm:text-lg wrap-break-word textPurple">
                        Frontend Developer <span className="font-bold text-2xl"> | </span> Full Stack Developer
                    </p>
                </motion.div>


                <motion.div
                    className='flex items-center justify-center flex-col p-4'
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* <h2 className="text-2xl font-semibold mb-4 text-center">About</h2> */}
                    <p className="font-['Satoshi'] leading-relaxed text-center text-sm sm:text-xl p-2">
                        Frontend Developer skilled in building modern, responsive and interactive web
                        application with clean UI and smooth user experience.
                        Currently advancing toward Full Stack development with hands-on projects and
                        modern frameworks and tools.
                    </p>

                    <div className="flex items-center gap-2 glassGreen rounded-2xl px-2 sm:px-5 py-1 mt-4 text-[#34D399]">
                        <div className="relative flex h-3 w-3">

                            {/* Expanding ring */}
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>

                            {/* Fixed center dot */}
                            <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
                        </div>

                        <p className="text-xs sm:text-base wrap-break-word">Open to Freelance projects & Full-time opportunities.</p>
                    </div>
                </motion.div>

            </section>
        </>
    )
}