import { motion } from "framer-motion";
import { fadeIn, fadeInUp, staggerContainer } from "../animations/Animations";

const AboutMe = () => {
  return (
    <motion.div
      className="bg-zinc-900 text-slate-300"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6 py-20">
        {/* Left Content */}
        <motion.div variants={fadeInUp}>
          <h1 className="text-4xl font-bold text-white mb-4">About Me</h1>
          <p className="text-slate-400 leading-relaxed mb-10 max-w-xl">
            I'm a{" "}
            <span className="text-indigo-400 font-semibold">
              Fullstack Developer
            </span>{" "}
            with a passion for building clean, scalable, and impactful digital
            solutions. From responsive front-ends with{" "}
            <span className="font-mono text-slate-200">React</span> to robust
            back-ends using{" "}
            <span className="font-mono text-slate-200">Node.js</span> and{" "}
            <span className="font-mono text-slate-200">NestJS</span>, I enjoy
            crafting end-to-end experiences that solve real-world problems.
            <br />
            <br />I thrive in collaborative, agile environments and constantly
            seek to expand my skillset with modern technologies and best
            practices.
          </p>

          <motion.div className="flex justify-start" variants={fadeInUp}>
            <motion.a
              href="mailto:firmaaanr@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 rounded-md bg-indigo-600 px-6 py-3 text-white font-medium hover:bg-indigo-500 transition-colors shadow-md"
            >
              Hire Me
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.75 3.75h4.5c.621 0 1.125.504 1.125 1.125V6H21v12a2.25 
                  2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18V6h5.625V4.875c0-.621.504-1.125 
                  1.125-1.125z"
                />
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Image - Terminal Style */}
        <motion.div
          className="flex justify-center md:justify-end"
          variants={fadeIn}
        >
          <div className="bg-[#1e1e1e] rounded-lg shadow-xl border border-zinc-700 w-80 overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-2 bg-zinc-800 border-b border-zinc-700">
              <span className="w-3 h-3 rounded-full bg-red-500"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
              <span className="w-3 h-3 rounded-full bg-green-500"></span>
            </div>
            <img
              src="/src/assets/foto_firman_2.jpg"
              alt="Firman Ramadhan"
              className="object-cover w-full h-96 grayscale hover:grayscale-0 transition duration-300"
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutMe;
