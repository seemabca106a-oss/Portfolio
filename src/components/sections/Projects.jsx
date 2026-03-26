import { RevealOnScroll } from "./RevealOnScroll";

export const Projects = () => {

    return <section id="projects" className="min-h-screen flex- itmes-center justify-center py-20"
    >
<RevealOnScroll>
     <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center
        bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-relaxed
  transform transition-all duration-500 ease-out hover:-translate-y-1"> Featured Projects</h2>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  <div className="p-6 rounded-xl border border-white/10
  hover:-translate-y-1 hover:border-blue-500/30
  hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
  transition-all duration-300"
>
  {/* Project Title */}
  <h3 className="text-xl font-semibold text-blue-400 mb-2">
    Data Science Learning Project
  </h3>

  {/* Project Description */}
  <p className="text-gray-400 leading-relaxed mb-4">
    Currently learning Data Science concepts including data analysis,
    data visualization, and machine learning using Python. 
    Working with libraries such as Pandas, NumPy, and Matplotlib
    to analyze datasets and extract meaningful insights.
  </p>

  {/* Technologies / Skills */}
  <div className="flex flex-wrap gap-3 mb-4">
    {["Python", "Pandas", "Numpy", "Matplotlib", "Seaborn"].map((tech, key) => (
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

  {/* View Project Link */}
  <div className="flex justify-between items-center">
    <a
      href="#"
      className="text-blue-400 hover:text-blue-300 transition-colors my-4"
    >
      View Project
    </a>
  </div>
</div>

 <div className="p-6 rounded-xl border border-white/10
  hover:-translate-y-1 hover:border-blue-500/30
  hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
  transition-all duration-300"
>
  {/* Project Title */}
  <h3 className="text-xl font-semibold text-blue-400 mb-2">
    Netflix Clone
  </h3>

  {/* Project Description */}
  <p className="text-gray-400 leading-relaxed mb-4">
    A responsive Netflix landing page clone built using HTML and CSS.
    Implemented modern UI layout, responsive design, and hover effects
    to replicate Netflix homepage experience.
  </p>

  {/* Technologies / Skills */}
  <div className="flex flex-wrap gap-3 mb-4">
    {["HTML", "CSS", "Responsive Design", "Basic Media Queries"].map((tech, key) => (
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

  {/* View Project Link */}
  <div className="flex justify-between items-center">
    <a
      href="#"
      className="text-blue-400 hover:text-blue-300 transition-colors my-4"
    >
      View Project
    </a>
  </div>
</div>
  <div className="p-6 rounded-xl border border-white/10
  hover:-translate-y-1 hover:border-blue-500/30
  hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
  transition-all duration-300"
>
  {/* Project Title */}
  <h3 className="text-xl font-semibold text-blue-400 mb-2">
    Calculator
  </h3>

  {/* Project Description */}
  <p className="text-gray-400 leading-relaxed mb-4">
    A simple calculator built using HTML, CSS, and JavaScript.
    Supports basic arithmetic operations with a clean and responsive layout.
  </p>

  {/* Technologies / Skills */}
  <div className="flex flex-wrap gap-3 mb-4">
    {["HTML", "CSS", "JavaScript"].map((tech, key) => (
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

  {/* View Project Link */}
  <div className="flex justify-between items-center">
    <a
      href="#"
      className="text-blue-400 hover:text-blue-300 transition-colors my-4"
    >
      View Project
    </a>
  </div>
</div>
 <div className="p-6 rounded-xl border border-white/10
  hover:-translate-y-1 hover:border-blue-500/30
  hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
  transition-all duration-300"
>
  {/* Project Title */}
  <h3 className="text-xl font-semibold text-blue-400 mb-2">
    Portfolio Website
  </h3>

  {/* Project Description */}
  <p className="text-gray-400 leading-relaxed mb-4">
    Personal portfolio website built with React and Tailwind CSS.
    Showcases projects, skills, and contact information with smooth
    animations and responsive design.
  </p>

  {/* Technologies / Skills */}
  <div className="flex flex-wrap gap-3 mb-4">
    {["React", "Tailwind CSS", "Vite", "JavaScript"].map((tech, key) => (
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

  {/* View Project Link */}
  <div className="flex justify-between items-center">
    <a
      href="#"
      className="text-blue-400 hover:text-blue-300 transition-colors my-4"
    >
      View Project
    </a>
  </div>
</div>
</div>
     </div>
     </RevealOnScroll>
    </section>
}