import './App.css'

function App() {

  return (
    <div className="min-h-screen bg-linear-to-bl from-purple-900 via-purple-950 to-black text-gray-200">
      
      {/* HEADER */}
      <header className="py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">Hi, I'm Pradhyuman</h1>
        <p className="mt-4 text-lg text-gray-400">
          Frontend Developer | Tech Enthusiast
        </p>
      </header>

      {/* ABOUT */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-400 leading-relaxed">
          I am a Computer Science undergraduate with a strong interest in frontend
          development. I enjoy building modern, responsive, and user-friendly web
          applications.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold mb-4">Education</h2>
        <p className="text-gray-400 leading-relaxed">
          JECRC University
          <p>B.Tech in Computer Science Engineering</p>
          (2021 - 2025)
        </p>
      </section>


      {/* SKILLS */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold mb-6">Skills</h2>

        <div className="flex flex-wrap gap-4">
          {["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Git", "Python django", "Playwright"].map(
            (skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-indigo-600/20 border border-indigo-500/30 rounded-lg text-sm"
              >
                {skill}
              </span>
            )
          )}
        </div>
      </section>


      {/* PROJECTS */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold mb-10">Projects</h2>

        <div className="space-y-8">
          {/* Project Item */}
          <div className="flex flex-col md:flex-row bg-[#111827] rounded-xl overflow-hidden border border-gray-800">
            
            <div className="p-6 flex-1">
              <h3 className="text-xl font-semibold">Sky Glimpse</h3>
              <p className="text-gray-400 mt-3">
                A real-time weather application using public weather APIs with
                dynamic UI updates and responsive design.
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {["HTML", "CSS", "JavaScript", "API"].map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1 rounded-full bg-indigo-600/20 text-indigo-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href="https://pradhyuman-github.github.io/weather/" target='_blank'
                className="inline-block mt-5 text-cyan-400 hover:underline"
              >
                View Project →
              </a>
            </div>
          </div>

          {/* Project Item */}
          <div className="flex flex-col md:flex-row bg-[#111827] rounded-xl overflow-hidden border border-gray-800">

            <div className="p-6 flex-1">
              <h3 className="text-xl font-semibold">Pizza House</h3>
              <p className="text-gray-400 mt-3">
                Designed a visually appealing pizza website for showcasing menu items, offers, and contact details.
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {["HTML","CSS","JavaScript", "UI Design"].map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1 rounded-full bg-indigo-600/20 text-indigo-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href="https://pradhyuman-github.github.io/pizza-page/" target='_blank'
                className="inline-block mt-5 text-cyan-400 hover:underline"
              >
                View Project →
              </a>
            </div>
          </div>

          {/* Project Item */}
          <div className="flex flex-col md:flex-row bg-[#111827] rounded-xl overflow-hidden border border-gray-800">

            <div className="p-6 flex-1">
              <h3 className="text-xl font-semibold">Frontend projects</h3>
              <p className="text-gray-400 mt-3">
                Collection of some frontend-specific projects.
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {["HTML/CSS", "JS", "React", "Tailwind"].map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1 rounded-full bg-indigo-600/20 text-indigo-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href="https://pradhyuman-github.github.io/Components/"
                className="inline-block mt-5 text-cyan-400 hover:underline"
              >
                View Project →
              </a>
            </div>
          </div>

        </div>
      </section>


      {/* FOOTER */}
      <footer className="border-t border-gray-800 py-8 text-center">
        <div className="flex flex-col sm:flex-row justify-center gap-4 text-gray-400">
          <a
            href="mailto:pradhyumanbhati019@gmail.com"
            className="hover:text-cyan-400 transition"
          >
            📧 pradhyumanbhati019@gmail.com
          </a>

          <a
            href="https://www.linkedin.com/in/pradhyuman-singh-bhati-b2a7a8270/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            🌐 LinkedIn
          </a>

          <a
            href="https://github.com/pradhyuman-github"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            💻 GitHub
          </a>
        </div>

      </footer>

    </div>
  
  );
}

export default App
