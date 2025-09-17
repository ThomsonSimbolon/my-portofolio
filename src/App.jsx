import "remixicon/fonts/remixicon.css";
import useAOS from "./hooks/useAOS";

import Header from "./components/Header/Header";
import Footer from "./components/Layout/Footer";
import ScrollToTop from "./components/UI/ScrollToTop";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Skills from "./pages/Skills/Skills";
import Education from "./pages/Education/Education";
import Projects from "./pages/Projects/Projects";
import Experience from "./pages/Experience/Experience";
import Contact from "./pages/Contact/Contact";

const App = () => {
  useAOS({ duration: 3000 });

  return (
    <div className="!bg-gray-950">
      <Header />
      <main className="min-h-[calc(100vh-var(--header-height))]">
        <div>
          <Home />
          <About />
          <Skills />
          <Education />
          <Projects />
          <Experience />
          <Contact />
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;
