import './App.css';
import AboutSection from './Components/AboutSection';
import BlogSection from './Components/BlogsSection';
import ContactSection from './Components/ContactSection';
import HeroSection from './Components/HeroSection';
import NavigationBar from './Components/NavigationBar';
import ProjectSection from './Components/ProjectSection';
import SkillSection from './Components/SkillsSection';

function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <HeroSection/>
      <AboutSection/>
      <SkillSection/>
      <ProjectSection/>
      <BlogSection/>
      <ContactSection/>
    </div>
  );
}

export default App;
