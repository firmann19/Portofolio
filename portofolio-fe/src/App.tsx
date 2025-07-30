import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProjectsPage from "./pages/Project";
import ProjectDetail from "./pages/Project/detail";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
