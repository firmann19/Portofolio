import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../../animations/Animations";
import { useEffect, useState } from "react";
import { sanityClient } from "../../sanity/sanity";
import { AchievementItem } from "./types";

const Achievement = () => {
  const [stats, setStats] = useState<AchievementItem[]>([]);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "achievement"]{ _id, label, value }`)
      .then((data) => setStats(data))
      .catch(console.error);
  }, []);

  return (
    <section className="bg-zinc-900 text-white py-20">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="text-left mb-12">
          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="text-3xl sm:text-4xl font-extrabold tracking-tight"
          >
            Terminal <span className="text-green-400">Stats</span>
          </motion.h2>
          <p className="mt-2 text-sm text-zinc-400 font-mono">
            $ npx developer-achievements
          </p>
        </div>

        <motion.dl
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 justify-center items-center max-w-6xl mx-auto"
        >
          {stats.slice(0, 3).map((stat) => (
            <motion.div
              key={stat._id}
              variants={fadeInUp}
              className="bg-zinc-900 p-10 border border-zinc-700 hover:border-green-400 transition-all duration-300 flex flex-col justify-center items-center text-center"
            >
              <div className="mb-3">
                <dt className="text-base font-mono text-zinc-400 uppercase tracking-wide">
                  {stat.label}
                </dt>
              </div>
              <dd className="text-5xl font-extrabold font-mono text-green-400">
                {stat.value}
              </dd>
            </motion.div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
};

export default Achievement;
