export default function Contact() {
    return (
        <div className="flex items-center justify-center mx-4 py-10 mb-4">
            <div id="contact" className="w-full max-w-3xl rounded-3xl p-8 sm:p-16 mt-16 text-center glass">
                <h2 className="text-3xl font-['Cabinet_Grotesk'] font-semibold textGradient">Let's Connect</h2>
                <p className="text-white/60 py-4 text-sm sm:text-base">
                    Have a project in mind, an opportunity to discuss, or just want to connect? 
                    <br /> My inbox is always open.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4 text-gray-400">
                    <a
                        href="mailto:pradhyumanbhati019@gmail.com"
                        className="hover:text-white glass glassHover p-2 rounded transition"
                    >
                        <span className="ri-mail-fill"></span> Email
                    </a>

                    <a
                        href="https://www.linkedin.com/in/pradhyuman-singh-bhati-b2a7a8270/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white glass glassHover p-2 rounded transition"
                    >
                        <span className="ri-linkedin-box-fill"></span> LinkedIn
                    </a>

                    <a
                        href="https://github.com/pradhyuman-github"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white glass glassHover p-2 rounded transition"
                    >
                        <span className="ri-github-fill"></span> GitHub
                    </a>
                </div>
            </div>

        </div>
    )
}