import { Routes, Route } from "react-router-dom";

// Pages
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import FeatureIcons from "./components/FeatureIcons/FeatureIcons";
import About from "./components/About/About";
import { Register } from "./components/Register/Register";
import Client from "./components/Clients/Clients";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";
import Tracks from "./components/Tracks/Tracks";
import { OurLearning } from "./components/OurLearning/OurLearning";
import Courses from "./components/Courses/Courses";


function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeatureIcons />
      <About />
      <Register />
      <Tracks />
      <Projects />
      <Client />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/ourlearning" element={<OurLearning />} />
      <Route path="/ourcourses" element={<Courses />} />

    </Routes>
  );
}

export default App;
