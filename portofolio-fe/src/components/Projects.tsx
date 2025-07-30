import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { sanityClient } from "../sanity/sanity";
import { Link } from "react-router-dom";

interface Project {
  _id: string;
  title: string;
  description: string;
  category: string;
  bg?: string;
  image: string;
  tags?: {
    label: string;
    color: string;
    textColor: string;
  }[];
}

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 },
};

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", "Website", "UI/UX", "Application"];

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{
          _id,
          title,
          description,
          category,
          bg,
          "image": image.asset->url,
          tags
        }`
      )
      .then((data) => {
        console.log("Fetched projects:", data);
        setProjects(data);
      })
      .catch((err) => {
        console.error("Sanity error:", err);
      });
  }, []);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="bg-zinc-900 text-slate-200 px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            <span className="text-indigo-400">&lt;</span>Projects
            <span className="text-indigo-400">/&gt;</span>
          </h2>
          <p className="text-slate-400 font-mono text-sm">
            Some things I've built recently.
          </p>
        </motion.div>

        <div className="mb-10 flex flex-wrap gap-3 justify-center">
          {categories.map((category, index) => {
            const isActive = category === activeCategory;
            return (
              <button
                key={index}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-1.5 rounded-md font-mono text-sm transition duration-200 border ${
                  isActive
                    ? "bg-indigo-600 text-white border-indigo-500"
                    : "bg-zinc-800 text-slate-300 border-zinc-700 hover:border-indigo-400 hover:text-white"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project._id}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                layout
                transition={{ duration: 0.3 }}
                className="overflow-hidden rounded-lg bg-zinc-800 border border-zinc-700 shadow-md hover:shadow-xl transition-transform hover:scale-[1.02]"
              >
                <div className={`h-48 overflow-hidden ${project.bg || ""}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-slate-400 text-sm">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags?.map((tag, index) => (
                      <span
                        key={index}
                        className={`rounded-full px-3 py-1 text-xs font-mono ${tag.color} ${tag.textColor} bg-opacity-20`}
                      >
                        {tag.label}
                      </span>
                    ))}
                  </div>
                  <a
                    href="#"
                    className="mt-4 inline-flex items-center text-indigo-400 text-sm hover:text-indigo-300 font-mono"
                  >
                    View case study
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-1 h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 
                          010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 
                          11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 
                          0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-16 text-center">
          <Link
            to="/projects"
            className="inline-block bg-indigo-600 text-white font-mono px-6 py-3 rounded-md text-sm hover:bg-indigo-500 transition"
          >
            View all projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
