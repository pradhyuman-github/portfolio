import './App.css'
import Header from "./components/Header";
import AuroraBg from './components/AuroraBg';
import About from "./components/About";
import Skill from "./components/Skill";
import Experience from './components/Experience';
import Project from "./components/Project";
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {

  return (
    <div className="relative text-white">

      <AuroraBg />
      <div className="relative z-10">
        <Header />
        <About />
        <Skill />
        <Experience />
        <Project />
        <Contact />
        <Footer />

      </div>

    </div>

  );
}

export default App
