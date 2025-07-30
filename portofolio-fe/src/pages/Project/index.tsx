import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../../animations/Animations";
import { Link } from "react-router-dom";
import { sanityClient } from "../../sanity/sanity";
import Navbar from "../../components/Navbar/Navbar";

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

const ProjectsPage = () => {
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
      .then((data) => setProjects(data))
      .catch(console.error);
  }, []);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      <Navbar />
      <motion.section
        className="min-h-screen bg-zinc-900 text-white px-6 py-20"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-screen-xl mx-auto">
          <motion.div variants={fadeInUp} className="mb-12 text-center">
            <h2 className="text-4xl font-bold tracking-tight">
              My <span className="text-indigo-400">Projects</span>
            </h2>
            <p className="text-slate-400 mt-2 text-lg max-w-2xl mx-auto">
              Here are some software and web projects I've worked on recently.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="flex justify-center flex-wrap gap-4 mb-12"
          >
            {categories.map((category) => {
              const isActive = category === activeCategory;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full px-5 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "bg-indigo-600 text-white"
                      : "bg-zinc-700 text-slate-300 hover:bg-zinc-600"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <Link to={`/projects/${project._id}`} key={project._id}>
                <motion.div
                  variants={fadeInUp}
                  className="bg-zinc-800 rounded-xl overflow-hidden shadow-xl border border-zinc-700 hover:shadow-2xl transition-transform hover:scale-105"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-2xl font-semibold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags?.map((tag, index) => (
                        <span
                          key={index}
                          className={`rounded-full px-3 py-1 text-xs font-mono ${tag.color} ${tag.textColor} bg-opacity-20 border border-slate-700`}
                        >
                          {tag.label}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default ProjectsPage;
