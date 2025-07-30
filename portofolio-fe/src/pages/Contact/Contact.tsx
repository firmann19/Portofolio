import Navbar from "../../components/Navbar";
import ContactForm from "../../components/ContactForm";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../../animations/Animations";

const Contact = () => {
  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      <Navbar />

      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="px-6 py-24 max-w-screen-md mx-auto"
      >
        <motion.div variants={fadeInUp} className="text-center mb-10">
          <h1 className="text-4xl font-bold text-indigo-400 mb-3">
            Get in Touch
          </h1>
          <p className="text-slate-400 text-base">
            Interested in working together or just want to say hi? <br />
            I'm open for freelance, collaboration, or full-time opportunities.
          </p>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <ContactForm />
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Contact;
