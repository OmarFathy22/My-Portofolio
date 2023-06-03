import Hero from './Hero';
import AboutMe from './AboutMe';
import Projects from './Projects/Projects';
import Testmonials from './Testmonials';
import Contact from './Contact';
import Skills from './Skills';
import HomeTitle from './HomeTitle';
import ProjectVideo from './Projects/ProjectsVideos'
import { useState } from 'react';
import ReactGA from 'react-ga';

function Home() {
  const [open , setOpen] = useState(false)
  ReactGA.pageview(window.location.pathname + window.location.search);
  return (
    <div className='flex flex-col  '>
        <Hero />
        <AboutMe/>
        <Skills/>
        <Projects setOpen={setOpen}/>
        <Testmonials/>
        <Contact/>
        <HomeTitle/>
        {open && <ProjectVideo videoSrc="https://firebasestorage.googleapis.com/v0/b/postatiwith.appspot.com/o/Portofolio%20website%20videos%2FConnectivea.mp4?alt=media&token=3db91fe2-f311-4482-8310-3ff4ed67fbfa&_gl=1*1kajvhq*_ga*MjE0NDEzNDExNy4xNjg0MDMyMTIy*_ga_CW55HF8NVT*MTY4NTczNTU2MC40Mi4xLjE2ODU3MzY4MTcuMC4wLjA." setOpen={setOpen}/>}
    </div>
  )
}

export default Home;