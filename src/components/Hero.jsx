import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import profile from "../assets/images/profile.jpeg";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden pt-24"
    >
      {/* Background Glow */}

      <div className="absolute top-32 left-20 w-72 h-72 bg-cyan-500/20 blur-[120px] rounded-full" />

      <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500/20 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-cyan-400 mb-4 font-medium text-lg">
              Hello, I'm
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              M. Rosyid
              <br />
              Habibulloh
            </h1>

            <div className="mt-6 text-xl md:text-2xl font-medium text-slate-300 min-h-[70px]">
              <TypeAnimation
                sequence={[
                  "Information Systems Student",
                  2000,
                  "Aspiring Fullstack Web Developer",
                  2000,
                  "AI-Assisted Developer",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>

            <p className="mt-8 text-slate-400 max-w-xl leading-relaxed text-lg">
              Information Systems student with a strong interest in web
              development, REST API development, and modern application
              architecture. Passionate about building useful digital
              solutions while leveraging AI-assisted development to
              accelerate learning and innovation.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="px-7 py-3 rounded-full bg-cyan-400 text-black font-semibold hover:scale-105 transition duration-300"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="px-7 py-3 rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition duration-300"
              >
                Contact Me
              </a>
            </div>
          </motion.div>

          {/* Right Content */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Photo Glow */}

              <div className="absolute inset-0 bg-cyan-500/20 blur-[90px] rounded-full" />

              <div className="relative glass p-2 rounded-3xl">
                <img
                  src={profile}
                  alt="M. Rosyid Habibulloh"
                  className="w-[300px] md:w-[380px] lg:w-[420px] rounded-3xl object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;