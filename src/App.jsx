import About from "./Components/About"
import ContactMe from "./Components/ContactMe"
import Education from "./Components/Education"
import Footer from "./Components/Footer"
import Hero from "./Components/Hero"
import MyProjects2 from "./Components/MyProjects"
import MyProjects from "./Components/MyProjects"
import Navbar from "./Components/Navbar"
import SkillsSection from "./Components/SkillsSection"

function App() {
  

  return (
    <div className="bg-gradient-to-b from-black to-indigo-950 h-full w-full">
        <Navbar/>
        <Hero/>
        <About/>
        <MyProjects/>
        {/* <MyProjects2/> */}
        <SkillsSection/>
        <Education/>
        <ContactMe/>
        <Footer/>
    </div>
  )
}

export default App
