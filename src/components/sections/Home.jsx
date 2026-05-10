import { RevealOnScroll } from "./RevealOnScroll";
import profileImg from "../../assets/my pic.jpg";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative px-6 pt-20"
    >
      <RevealOnScroll>
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT IMAGE SECTION */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative w-[300px] h-[390px] md:w-[400px] md:h-[520px]">

              {/* Back Gradient Card */}
              <div
                className="absolute -inset-3 rounded-[2rem]
                bg-gradient-to-br from-blue-500 to-purple-600
                opacity-80 rotate-3"
              ></div>

              {/* Glass Border Card */}
              <div
                className="relative w-full h-full rounded-[2rem]
                overflow-hidden border border-white/15
                bg-white/5 backdrop-blur-md
                shadow-[0_30px_80px_rgba(0,0,0,0.45)]
                transition-all duration-500
                hover:-translate-y-2 hover:rotate-0"
              >
                <img
                  src={profileImg}
                  alt="Seema Divan"
                  className="w-full h-full object-cover object-center"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>

                {/* Bottom Name Label */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="bg-black/45 backdrop-blur-md border border-white/10 rounded-2xl p-4">
                    <p className="text-white font-semibold text-lg">
                      Seema Divan
                    </p>
                    <p className="text-blue-400 text-sm">
                      BCA Graduate • Tech Enthusiast
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT TEXT SECTION */}
          <div className="text-center lg:text-left z-10 order-1 lg:order-2">

            <p className="text-blue-400 font-medium mb-3">
              Welcome to my portfolio
            </p>

            <h1
              className="text-5xl md:text-7xl font-bold mb-6 
              bg-gradient-to-r from-blue-500 to-purple-600 
              bg-clip-text text-transparent leading-tight"
            >
              Hi, I'm Seema Divan
            </h1>

            <h2 className="text-xl text-gray-300 mb-6">
              BCA Student | Web Developer | Data Science Learner | UI/UX Enthusiast
            </h2>

            <p className="text-gray-400 text-lg max-w-xl mb-8 mx-auto lg:mx-0 leading-relaxed">
              BCA graduate with a strong interest in technology, programming, and creative problem-solving.  
              Passionate about learning new skills and working on practical projects.  
              Experienced in frontend development, Python, and UI/UX design through internships and self-learning.  
              Focused on continuous growth and building innovative and user-friendly solutions.
            </p>

            {/* Buttons */}
            <div className="flex justify-center lg:justify-start gap-4 flex-wrap">

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
      </RevealOnScroll>
    </section>
  );
};