//import Contact from "./components/Contact/Contact";
import ContactTest from "./components/ContactTest/ContactTest";
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
      <ContactTest />
      <Footer />
    </div>
  );
}

export default App;
