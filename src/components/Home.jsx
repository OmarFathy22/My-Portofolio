import Hero from './Hero';
import AboutMe from './AboutMe';
import Projects from './Projects/Projects';
import Testmonials from './Testmonials';
import Contact from './Contact';
import Skills from './Skills';
import HomeTitle from './HomeTitle';
function Home() {
  return (
    <div className='flex flex-col gap-[100px] '>
        <Hero />
        <AboutMe/>
        <Skills/>
        <Projects/>
        <Testmonials/>
        <Contact/>
        <HomeTitle/>
    </div>
  )
}

export default Home;