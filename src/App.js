import Contact from "./components/Contact/Contact";
//import Test from "./components/Test/Test";
import Footer from "./components/Footer/Footer";
import Intro from "./components/Intro/Intro";
import NavBar from "./components/NavBar/NavBar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Intro />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
