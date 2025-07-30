import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Achievement from "../components/Achievement";
import ContactForm from "../components/ContactForm";
import Projects from "../components/Projects";
import AboutMe from "../components/AboutMe";

const Home = () => {
  return (
    <div className="bg-zinc-900">
      <Navbar />
      <Header />
      <AboutMe />
      <Achievement />
      <Projects />
      <ContactForm />
    </div>
  );
};

export default Home;
