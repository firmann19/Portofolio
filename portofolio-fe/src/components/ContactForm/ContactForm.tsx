import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import { motion } from "framer-motion";
import { fadeInUp } from "../../animations/Animations";
import { useState } from "react";
import emailjs from "emailjs-com";
import { ContactFormData } from "./types";

const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "service_9e6ir4d",
        "template_hqmy2nj",
        formData as unknown as Record<string, unknown>,
        "U4hNYGxsT97s3Or1K"
      )
      .then(() => {
        alert("🚀 Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        alert("❌ Failed to send message. Please try again.");
        console.error(error.text);
      });
  };

  return (
    <motion.div
      className="max-w-screen-xl mx-auto px-6 py-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      <motion.div variants={fadeInUp} className="mb-10 text-start">
        <h2 className="text-4xl font-bold text-gray-100 tracking-tight">
          Let's <span className="text-blue-400">collaborate</span>
        </h2>
        <p className="text-gray-400 mt-2 font-mono text-sm">
          If you have an idea, let's ship it together 💻🚢
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-12 bg-[#1e1e1e] rounded-lg overflow-hidden shadow-lg border border-gray-700"
        variants={fadeInUp}
      >
        {/* Left - Contact Info */}
        <motion.div
          className="md:col-span-4 p-8 bg-[#252526] text-gray-200 space-y-6"
          variants={fadeInUp}
        >
          <h3 className="text-xl font-semibold">Contact Info</h3>
          <div className="flex items-center">
            <MdEmail className="mr-2 text-blue-400" />
            <span className="text-sm">firman19ramadhan@gmail.com</span>
          </div>
          <div className="flex items-center">
            <MdLocationOn className="mr-2 text-blue-400" />
            <span className="text-sm">Talaga Bestari Blok C7 No 27</span>
          </div>
          <div className="flex items-center">
            <MdPhone className="mr-2 text-blue-400" />
            <span className="text-sm">(+62) 851-7413-0891</span>
          </div>
        </motion.div>

        {/* Right - Form */}
        <motion.div
          className="md:col-span-8 p-8 bg-[#1e1e1e]"
          variants={fadeInUp}
        >
          <form className="space-y-6" onSubmit={handleSubmit}>
            <motion.div variants={fadeInUp}>
              <label
                htmlFor="name"
                className="block text-sm text-gray-300 mb-1"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Dev"
                className="w-full px-4 py-2 bg-[#2d2d2d] text-gray-100 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 font-mono"
                required
              />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <label
                htmlFor="email"
                className="block text-sm text-gray-300 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@devmail.com"
                className="w-full px-4 py-2 bg-[#2d2d2d] text-gray-100 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 font-mono"
                required
              />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <label
                htmlFor="message"
                className="block text-sm text-gray-300 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                placeholder="Hey, I need help with a full-stack project..."
                className="w-full px-4 py-2 bg-[#2d2d2d] text-gray-100 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 font-mono resize-none"
                required
              />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md text-sm font-semibold transition focus:ring-2 focus:ring-blue-300"
              >
                🚀 Send Message
              </button>
            </motion.div>
          </form>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ContactForm;
