import { RevealOnScroll } from "./RevealOnScroll";

export const Projects = () => {
  const projects = [
    {
      title: "Data Science Learning Project",
      description:
        "Currently learning Data Science concepts including data analysis, data visualization, and machine learning using Python. Working with libraries such as Pandas, NumPy, and Matplotlib to analyze datasets and extract meaningful insights.",
      skills: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    },

    {
      title: "SignVerse UI/UX App Design",
      description:
        "Designed a UI/UX concept for SignVerse, an app created to help people who cannot speak or hear communicate more easily. The app includes gesture recognition, sign-to-text conversion, text-to-sign support, social media features, and sign learning tutorials. Created wireframes and screens with vertical and horizontal scrolling layouts.",
      skills: [
        "Figma",
        "Wireframing",
        "UI/UX Design",
        "Prototyping",
        "App Design",
      ],
    },

    {
      title: "Portfolio Website",
      description:
        "Personal portfolio website built with React and Tailwind CSS. Showcases projects, skills, education, certifications, and contact information with smooth animations and responsive design.",
      skills: ["React", "Tailwind CSS", "Vite", "JavaScript"],
    },

    {
      title: "Netflix Clone",
      description:
        "A responsive Netflix landing page clone built using HTML and CSS. Implemented modern UI layout, responsive design, and hover effects to replicate the Netflix homepage experience.",
      skills: ["HTML", "CSS", "Responsive Design", "Media Queries"],
    },

    {
      title: "To-Do List App",
      description:
        "A responsive task management application created to add, delete, and manage daily tasks. Includes pending and completed task tracking with a clean and user-friendly interface.",
      skills: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    },

    {
      title: "LinkUp Chat Application",
      description:
        "A full-stack real-time chat application with user authentication, online user status, profile management, real-time messaging, and image sharing functionality. Built using the MERN stack with Socket.IO integration.",
      skills: [
        "React",
        "Node.js",
        "MongoDB",
        "Socket.IO",
        "Express.js",
        "Tailwind CSS",
      ],
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4">
          <h2
            className="text-3xl font-bold mb-12 text-center
            bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-relaxed
            transform transition-all duration-500 ease-out hover:-translate-y-1"
          >
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {projects.map((project, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-white/10 bg-white/5
                hover:-translate-y-2 hover:border-blue-500/30
                hover:shadow-[0_8px_30px_rgba(59,130,246,0.2)]
                transition-all duration-300 backdrop-blur-sm"
              >

                {/* Project Title */}
                <h3 className="text-xl font-semibold text-blue-400 mb-3">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-3 mb-5">
                  {project.skills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm
                      hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,224,0.1)]
                      transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Button */}
                <div className="flex justify-between items-center">
                  <a
                    href="#"
                    className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
                  >
                    View Project →
                  </a>
                </div>

              </div>
            ))}

          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};