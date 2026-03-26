

import { RevealOnScroll } from "./RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
      <div className="text-center z-10 px-4">

        <h1
          className="text-5xl md:text-7xl font-bold mb-6 
          bg-gradient-to-r from-blue-500 to-purple-600 
          bg-clip-text text-transparent leading-tight"
        >
          Hi, I'm Seema Divan
        </h1>

        <h2 className="text-xl text-gray-300 mb-6">
          Web Development Student
        </h2>

        <p className="text-gray-400 text-lg max-w-xl mx-auto mb-8">
          I am a passionate web development student currently pursuing my degree
          and gaining practical experience through an internship.
          I enjoy building responsive and creative websites using modern technologies.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4">

          {/* View Projects Button */}
         <div className="flex justify-center gap-4">

  {/* View Projects Button */}
 <div className="flex justify-center gap-4">

  {/* View Projects Button */}
  <div className="flex justify-center gap-4">

  {/* View Projects */}
 <div className="flex justify-center gap-4">

  {/* View Projects */}
  <a
    href="#projects"
    className="group relative px-6 py-3 border border-blue-500 text-blue-500 rounded-lg font-medium overflow-hidden
    transform transition-all duration-300
    hover:translate-y-1 hover:bg-blue-500 hover:text-white hover:shadow-inner"
  >
    <span
      className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%]
      transition-transform duration-700"
    ></span>

    <span className="relative z-10">View Projects</span>
  </a>

  {/* Contact */}
  <a
    href="#contact"
    className="group relative px-6 py-3 border border-blue-500 text-blue-500 rounded-lg font-medium overflow-hidden
    transform transition-all duration-300
    hover:translate-y-1 hover:bg-blue-500 hover:text-white hover:shadow-inner"
  >
    <span
      className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%]
      transition-transform duration-700"
    ></span>

    <span className="relative z-10">Contact Me</span>
  </a>

</div>

</div>
</div>

</div>

        </div>

      </div>
      </RevealOnScroll>
    </section>
  );
};