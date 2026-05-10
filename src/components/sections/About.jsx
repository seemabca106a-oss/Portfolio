import { RevealOnScroll } from "./RevealOnScroll";

export const About = () => {
  const webDevelopment = [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Tailwind CSS",
  ];

  const programmingLanguages = [
    "Python",
    "Java",
    "C",
    "JavaScript",
  ];

  const dataScience = [
    "Python Basics",
    "Data Analysis",
    "NumPy",
    "Pandas",
    "Logic Building",
  ];

  const uiuxDesign = [
    "Figma",
    "Wireframing",
    "Prototyping",
  ];

  const databaseTools = [
    "MongoDB",
    "Git",
    "GitHub",
    "VS Code",
  ];

  return (
    <section id="about" className="min-h-screen py-20">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">

          {/* Heading */}
          <h2
            className="text-3xl font-bold mb-12 text-center
            bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-relaxed
            transform transition-all duration-500 ease-out
            hover:-translate-y-1"
          >
            About Me
          </h2>

          {/* Main Card */}
          <div
            className="rounded-2xl p-8 border border-white/10 bg-white/5 backdrop-blur-md
            transform transition-all duration-500 ease-out
            hover:-translate-y-3 hover:shadow-2xl hover:border-blue-400/40"
          >

            <p className="text-gray-300 mb-10 leading-relaxed">
              I am a motivated BCA graduate with interests in technology,
              programming, and creative problem-solving.
              Skilled in frontend development, Python, UI/UX design,
              and modern development tools through internships,
              self-learning, and personal projects.
              Passionate about continuously learning new technologies
              and building practical, user-friendly, and innovative solutions.
              Currently expanding my knowledge in Data Science and software
              development while strengthening both technical and professional skills.
            </p>

            <div className="space-y-10">

              {/* Skills Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* Web Development */}
                <div
                  className="rounded-xl p-6 bg-white/5 border border-white/10
                  transform transition-all duration-500
                  hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl"
                >
                  <h3 className="text-xl font-semibold mb-4 text-blue-400">
                    Web Development
                  </h3>

                  <div className="flex flex-wrap gap-3">
                    {webDevelopment.map((tech, key) => (
                      <span
                        key={key}
                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                        hover:shadow-[0_2px_8px_rgba(59,130,2246,0.1)] transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Programming Languages */}
                <div
                  className="rounded-xl p-6 bg-white/5 border border-white/10
                  transform transition-all duration-500
                  hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl"
                >
                  <h3 className="text-xl font-semibold mb-4 text-green-400">
                    Programming Languages
                  </h3>

                  <div className="flex flex-wrap gap-3">
                    {programmingLanguages.map((tech, key) => (
                      <span
                        key={key}
                        className="bg-green-500/10 text-green-400 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 
                        hover:shadow-[0_2px_8px_rgba(34,197,94,0.1)] transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Data Science */}
                <div
                  className="rounded-xl p-6 bg-white/5 border border-white/10
                  transform transition-all duration-500
                  hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl"
                >
                  <h3 className="text-xl font-semibold mb-4 text-purple-400">
                    Data Science
                  </h3>

                  <div className="flex flex-wrap gap-3">
                    {dataScience.map((tech, key) => (
                      <span
                        key={key}
                        className="bg-purple-500/10 text-purple-400 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 
                        hover:shadow-[0_2px_8px_rgba(168,85,247,0.1)] transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* UI/UX Design */}
                <div
                  className="rounded-xl p-6 bg-white/5 border border-white/10
                  transform transition-all duration-500
                  hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl"
                >
                  <h3 className="text-xl font-semibold mb-4 text-pink-400">
                    UI/UX Design
                  </h3>

                  <div className="flex flex-wrap gap-3">
                    {uiuxDesign.map((tech, key) => (
                      <span
                        key={key}
                        className="bg-pink-500/10 text-pink-400 py-1 px-3 rounded-full text-sm hover:bg-pink-500/20 
                        hover:shadow-[0_2px_8px_rgba(236,72,153,0.1)] transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Database & Tools */}
                <div
                  className="rounded-xl p-6 bg-white/5 border border-white/10
                  transform transition-all duration-500
                  hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl md:col-span-2"
                >
                  <h3 className="text-xl font-semibold mb-4 text-cyan-400">
                    Database & Tools
                  </h3>

                  <div className="flex flex-wrap gap-3">
                    {databaseTools.map((tech, key) => (
                      <span
                        key={key}
                        className="bg-cyan-500/10 text-cyan-400 py-1 px-3 rounded-full text-sm hover:bg-cyan-500/20 
                        hover:shadow-[0_2px_8px_rgba(6,182,212,0.1)] transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Education */}
              <div
                className="rounded-xl p-6 bg-white/5 border border-white/10
                transform transition-all duration-500
                hover:-translate-y-2 hover:shadow-xl"
              >
                <h3 className="text-xl font-semibold mb-6 text-cyan-400">
                  Education
                </h3>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="py-3 text-cyan-300">Qualification</th>
                        <th className="py-3 text-cyan-300">Institution</th>
                        <th className="py-3 text-cyan-300">Year of Completion</th>
                      </tr>
                    </thead>

                    <tbody className="text-gray-300">

                      <tr className="border-b border-white/5">
                        <td className="py-4">
                          Bachelor of Computer Application
                        </td>

                        <td className="py-4">
                          The Maharaja Sayajirao University, Vadodara
                        </td>

                        <td className="py-4">
                          2023 – 2026
                        </td>
                      </tr>

                      <tr className="border-b border-white/5">
                        <td className="py-4">
                          Std XII
                        </td>

                        <td className="py-4">
                          Rosary School, Vadodara
                        </td>

                        <td className="py-4">
                          2023
                        </td>
                      </tr>

                      <tr>
                        <td className="py-4">
                          Std X
                        </td>

                        <td className="py-4">
                          Hill Memorial High School, Vadodara
                        </td>

                        <td className="py-4">
                          2021
                        </td>
                      </tr>

                    </tbody>
                  </table>
                </div>

                {/* Certifications */}
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4 text-cyan-400">
                    Certifications
                  </h3>

                  <ul className="text-gray-300 space-y-2 list-disc list-inside">
                    <li>
                      HTML & CSS Workshop – MAHARAJA SAYAJIRAO UNIVERSITY
                    </li>

                    <li>
                      Summer Internship in UI/UX Design – Figma (May – July 2024)
                    </li>

                    <li>
                      Summer Internship in UI/UX Design – Figma (May – July 2025)
                    </li>

                    <li>
                      One Month Internship in Web Development (Apr 2026)
                    </li>
                  </ul>
                </div>

              </div>

            </div>

          </div>

        </div>
      </RevealOnScroll>
    </section>
  );
};