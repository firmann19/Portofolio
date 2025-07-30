import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
import {
  fadeIn,
  fadeInUp,
  staggerContainer,
} from "../../animations/Animations";
import { SocialLink } from "./types";

const socialLinks: SocialLink[] = [
  {
    href: "https://instagram.com/yourusername",
    label: "Instagram",
    icon: <FaInstagram />,
    colorClass: "text-pink-500 hover:text-pink-400",
  },
  {
    href: "https://x.com/yourusername",
    label: "Twitter",
    icon: <FaXTwitter />,
    colorClass: "text-white hover:text-slate-300",
  },
  {
    href: "https://facebook.com/yourusername",
    label: "Facebook",
    icon: <FaFacebookF />,
    colorClass: "text-blue-500 hover:text-blue-400",
  },
];

const Header = () => {
  return (
    <motion.div
      className="py-30 bg-zinc-900 text-white"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6 py-20">
        <motion.div variants={fadeInUp}>
          <h1 className="text-4xl font-bold mb-2 tracking-tight leading-snug">
            <span className="text-slate-400">Hi, I'm</span>{" "}
            <span className="text-white">Firman Ramadhan</span>
          </h1>
          <div className="inline-block bg-indigo-600 text-sm px-3 py-1 rounded-full font-mono mt-2 mb-4">
            Fullstack Developer
          </div>
          <h2 className="text-2xl text-indigo-400 font-semibold mb-6">
            I build things for the web and mobile.
          </h2>
          <p className="text-slate-300 leading-relaxed mb-10 max-w-xl">
            Passionate about{" "}
            <span className="text-indigo-400 font-semibold">
              modern web technologies
            </span>
            , I specialize in building scalable fullstack applications.
            Experienced in working with{" "}
            <span className="text-white font-mono">React</span>,{" "}
            <span className="text-white font-mono">Node.js</span>, and{" "}
            <span className="text-white font-mono">TypeScript</span>, I enjoy
            clean code, problem solving, and continuous learning.
          </p>

          <motion.div
            className="flex flex-wrap gap-4 mb-10"
            variants={fadeInUp}
          >
            <motion.a
              href="/CV_Firman_Ramadhan.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-indigo-600 px-5 py-3 rounded-lg font-medium hover:bg-indigo-500 transition-colors"
            >
              Download CV
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
                  d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 
                    12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </motion.a>

            <motion.link
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 border-2 border-indigo-500 px-5 py-3 rounded-lg text-indigo-400 font-medium hover:bg-indigo-500 hover:text-white transition-colors"
            >
              Contact Me
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
                  d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 
                  12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </motion.link>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h3 className="text-md text-indigo-400 font-semibold mb-2">
              Find me on
            </h3>
            <div className="flex space-x-4 text-xl">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  className={link.colorClass}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex justify-center md:justify-end"
          variants={fadeIn}
        >
          <img
            src="/assets/foto_firman.jpeg"
            alt="Firman Ramadhan"
            className="w-72 md:w-96 rounded-xl object-cover shadow-2xl border-4 border-indigo-600"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Header;
