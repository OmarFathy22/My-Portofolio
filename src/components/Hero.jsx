import logo from '../assets/remove_bg.png'
import my_cv from '../assets/Resume.pdf'
import Typewriter from 'typewriter-effect';
import { Helmet } from 'react-helmet-async';
import { FaGithubSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { FaWhatsappSquare } from "react-icons/fa";
const socialLinks = [
  "https://api.whatsapp.com/send?phone=1271527590&text=Omar%20Fathy%20%7C%20Web%20Developer",
  "https://www.linkedin.com/in/omar-fathy-a3b987223",
  "https://www.instagram.com/o_fathy_/",
  "https://github.com/OmarFathy22",
];
function Hero() {
  return (
    <div className="h-[90vh] mt-[10vh]  w-full relative flex lg:flex-1  ">
      <Helmet>
        <meta name="Description" content="this is my home page" />
        <title>Home</title>
        <link rel="canonical" href="https://omarfathy.pages.dev" />
    </Helmet>
      <div  className='HeroLeft h-[620px] w-[1000px] hidden lg:flex mt-[35px]'>
      
        <img src={logo} alt="" className='w-full h-full ' />

      </div>
      <div  className='HeroRight absolute lg:static top-0 right-0 bottom-0 left-0 flex justify-center' >
         <div className='h-full sm:w-[90%] w-[80%] flex flex-col gap-[30px] justify-center items-center'>
            <h1 className='text-white text-[20px] font-semibold'>Hello I&apos;M</h1>
            <h1 className='text-[var(--primaryColor)] sm-md:text-[30px] lg:text-[50px] text-[70px]'>
                <Typewriter 
                    options={{
                        strings: ['OMAR FATHY', 'WEB DEVELOPER'],
                        autoStart: true,
                        loop: true,
                    }}  
                />
            </h1>
            <p className='text-white text-center'> 
            Motivated junior front-end developer looking for a role as full-stack web developer. 
            Passionate about building elegant and functional websites that provide seamless user experiences.
            Enjoy solving complex problems and building custom solutions that meet the unique needs of my clients.
            Outside of work, I enjoy spending time at the gym, socializing, and watching TV Series.
            </p>
            <a href={my_cv} download className='text-white border-[1px] border-[var(--primaryColor)] rounded-full p-4 px-14 hover:bg-[var(--primaryColor)] transition-all mt-[50px]'>Download CV</a>
              <div className="flex justify-center items-center gap-[15px]">
          <a
            href={socialLinks[3]}
            target="_blank"
            rel="noreferrer"
            className="text-[var(--primaryColor)] text-[25px] hover:opacity-[0.9] transition-all"
          >
            <FaGithubSquare />
          </a>
          <a
            href={socialLinks[1]}
            target="_blank"
            rel="noreferrer"
            className="text-[var(--primaryColor)] text-[22px] hover:opacity-[0.9] transition-all"
          >
            <BsLinkedin />
          </a>
          
          <a
            href={socialLinks[2]}
            target="_blank"
            rel="noreferrer"
            className="text-[var(--primaryColor)] text-[30px] hover:opacity-[0.9] transition-all"
          >
            <AiFillInstagram />
          </a>
          <a
            href={socialLinks[0]}
            target="_blank"
            rel="noreferrer"
            className="text-[var(--primaryColor)] text-[26px] hover:opacity-[0.9] transition-all"
          >
            <FaWhatsappSquare/>
          </a>
        </div>
         </div>
      </div>
    </div>
  )
}

export default Hero;