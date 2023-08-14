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
import { useContext } from 'react';
import ColorContext from '../context/ColorTheme';
import { Helmet } from 'react-helmet-async';

function Home() {
  const {theme} = useContext(ColorContext)
  const [open , setOpen] = useState(false)
  const [VideoDemo , setVideoDemo] = useState('https://firebasestorage.googleapis.com/v0/b/postatiwith.appspot.com/o/Portofolio%20website%20videos%2FConnectivea.mp4?alt=media&token=3db91fe2-f311-4482-8310-3ff4ed67fbfa&_gl=1*1kajvhq*_ga*MjE0NDEzNDExNy4xNjg0MDMyMTIy*_ga_CW55HF8NVT*MTY4NTczNTU2MC40Mi4xLjE2ODU3MzY4MTcuMC4wLjA.')
  ReactGA.pageview(window.location.pathname + window.location.search);
  return (
    <div className='flex flex-col text-[theme]'>
          <Helmet>
        <meta name="Description" content="On this page You will find what people say about me and my work" />
        <title>Home</title>
        <link rel="canonical" href="https://omarfathy.pages.dev" />
    </Helmet>
        <Hero />
        <Skills/>
        <Projects setOpen={setOpen} setVideoDemo = {setVideoDemo}/>
        <Testmonials/>
        <Contact/>
        <HomeTitle/>
        {open && <ProjectVideo VideoDemo={VideoDemo} setOpen={setOpen}/>}
    </div>
  )
}

export default Home;