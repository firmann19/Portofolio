import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { sanityClient } from "../../sanity/sanity";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../../animations/Animations";
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

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState<Project | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project" && _id == $id][0]{
          _id,
          title,
          description,
          bg,
          "image": image.asset->url,
          tags
        }`,
        { id }
      )
      .then((data) => {
        setProject(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching project:", error);
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading) {
    return (
      <div className="text-center mt-20 text-slate-400 text-lg">
        Loading project...
      </div>
    );
  }

  if (!project) {
    return (
      <div className="text-center mt-20 text-red-500 text-xl">
        Project not found.
      </div>
    );
  }

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
          <motion.div variants={fadeInUp} className="mb-10">
            <h1 className="text-4xl font-bold text-white mb-2">
              {project.title}
            </h1>
            <p className="text-slate-400 max-w-2xl leading-relaxed">
              {project.description}
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className={`overflow-hidden rounded-xl shadow-xl border border-indigo-500 mb-10 ${
              project.bg || ""
            }`}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-80 object-cover"
            />
          </motion.div>

          {project.tags && project.tags.length > 0 && (
            <motion.div variants={fadeInUp}>
              <h2 className="text-2xl font-semibold text-indigo-400 mb-4">
                Tech Stack
              </h2>
              <div className="flex flex-wrap gap-3">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className={`rounded-full px-3 py-1 text-xs font-mono bg-opacity-20 border border-slate-600 ${
                      tag.color || "bg-indigo-600"
                    } ${tag.textColor || "text-white"}`}
                  >
                    {tag.label}
                  </span>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </motion.section>
    </>
  );
};

export default ProjectDetail;
