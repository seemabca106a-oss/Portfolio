import { RevealOnScroll } from "./RevealOnScroll";

export const About = () => {
  const frontendskills = [
    "React",
    "Vue",
    "TypeScript",
    "TailwindCSS",
    "Svelte",
  ];

  const backendskills = [
    "Node.js",
    "Python",
    "AWS",
    "MongoDB",
  ];

  return (
    <section id="about" className="min-h-screen py-20">
      <RevealOnScroll>
      <div className="max-w-5xl mx-auto px-4">

        {/* Heading */}
        <h2 className="text-3xl font-bold mb-12 text-center
        bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-relaxed
  transform transition-all duration-500 ease-out
  hover:-translate-y-1 ">
    {" "}
          About Me
        </h2>

        {/* Main Card */}
        <div
          className="rounded-2xl p-8 border border-white/10 bg-white/5 backdrop-blur-md
          transform transition-all duration-500 ease-out
          hover:-translate-y-3 hover:shadow-2xl hover:border-blue-400/40"
        >

          <p className="text-gray-300 mb-10 leading-relaxed">
            I am a dedicated Web Development student with hands-on internship
            experience focused on building modern, responsive, and interactive
            web applications. I specialize in frontend technologies such as
            React, JavaScript, and Tailwind CSS, and I enjoy transforming ideas
            into clean, functional, and visually appealing websites.
          </p>

          <div className="space-y-10">

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              {/* Frontend */}
              <div
                className="rounded-xl p-6 bg-white/5 border border-white/10
                transform transition-all duration-500
                hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl"
              >
                <h3 className="text-xl font-semibold mb-4 text-blue-400">
                  Frontend
                </h3>

                <div className="flex flex-wrap gap-3">
                  {frontendskills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
        hover:shadow-[0_2px_8px_rgba(59,130,2246,0.1)] transition-all
        "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Backend */}
              <div
                className="rounded-xl p-6 bg-white/5 border border-white/10
                transform transition-all duration-500
                hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl"
              >
                <h3 className="text-xl font-semibold mb-4 text-green-400">
                  Backend
                </h3>

                <div className="flex flex-wrap gap-3">
                  {backendskills.map((tech, key) => (
                    <span
                      key={key}
                     className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
        hover:shadow-[0_2px_8px_rgba(59,130,2246,0.1)] transition-all
        "
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
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">
                Education
              </h3>

              <p className="text-gray-300">
                Bachelor’s Degree in Computer Application (2023 – Present)
                <br />
                Currently pursuing Web Development with internship experience.
              </p>
            </div>

          </div>

        </div>

      </div>
      </RevealOnScroll>
    </section>
  );
};