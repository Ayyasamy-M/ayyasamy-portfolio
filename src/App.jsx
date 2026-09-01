import Hero from './components/Hero/Hero';
import Mind from './components/Mind/Mind';
import BuildProcess from './components/BuildProcess/BuildProcess';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Capabilities from './components/Capabilities/Capabilities';
import Contact from './components/Contact/Contact';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <>
      <Navbar />

      <Hero />
      <Mind />
      <BuildProcess />
      <Projects />
      <Experience />
      <Capabilities />
      <Contact />
    </>
  );
}

export default App;
