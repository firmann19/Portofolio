import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import Achievement from "../components/Achievement/Achievement";
import Projects from "../components/Projects/Projects";
import AboutMe from "../components/AboutMe/AboutMe";
import ContactForm from "../components/ContactForm/ContactForm";

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
