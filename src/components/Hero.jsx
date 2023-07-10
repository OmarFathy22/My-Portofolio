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
      <div data-aos="fade-right" className='h-full hidden lg:flex mt-[35px]'>
      
        <img src={logo} alt="" className='w-[100%] h-full object-contain' />

      </div>
      <div data-aos="fade-left" className='absolute lg:static top-0 right-0 bottom-0 left-0 flex justify-center' >
         <div className='h-full sm:w-[90%] w-[80%] flex flex-col gap-[30px] justify-center items-center'>
            <h1 className='text-white text-[20px] font-semibold'>Hello I&apos;M</h1>
            <h1 className='text-[var(--primaryColor)] sm-md:text-[30px] lg:text-[50px] text-[70px]'>
                <Typewriter 
                    options={{
                        strings: ['OMAR FATHY', 'FRONT END DEVELOPER'],
                        autoStart: true,
                        loop: true,
                    }}  
                />
            </h1>
            <p className='text-white text-center'> I consistently stay up-to-date with the latest web technologies and trends, and I collaborate closely with clients to ensure their vision is brought to life. With a user-centered design approach, I take pride in delivering high-quality output that exceeds client expectations and provides a positive impact on the end-users.</p>
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