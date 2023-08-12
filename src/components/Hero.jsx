import logo from "../assets/remove_bg.png";
import my_cv from "../assets/Resume.pdf";
import Typewriter from "typewriter-effect";
import { Helmet } from "react-helmet-async";
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
    <div className=" w-full px-[7%] max-1300:px-[3%] max-1100:px-[1%] mt-[10vh]   relative flex flex-row-reverse  items-center max-1200:flex-col   ">
      <Helmet>
        <meta name="Description" content="this is my home page" />
        <title>Home</title>
        <link rel="canonical" href="https://omarfathy.pages.dev" />
      </Helmet>
      <div className="HeroLeft  h-[620px] w-full mt-[35px] flex flex-1 justify-end max-1200:justify-center max-1200:mb-[30px] items-center">
        <img
          src={logo}
          alt=""
          className="AnimatedHero w-[500px] h-[500px] sm:w-[350px] sm:h-[350px] pt-2    
          border-[1px] border-[--primaryColor] rounded-full  object-contain  sticky top-0 right-0 left-0 bottom-0
          shadow-[0px_-10px_20px_1px_#e2e8f0] shadow-[--primaryColor]  transition-all duration-500 ease-in-out
          
           "
        />
      </div>
      <div className="HeroRight  flex justify-center flex-1">
        <div className="h-full w-full flex flex-col gap-[30px] justify-center items-center">
          <h1 className="text-white text-[20px] font-semibold">
            Hello I&apos;M
          </h1>
          <h1 className="text-[var(--primaryColor)] sm-md:text-[30px] lg:text-[50px] text-[70px]">
            <Typewriter
              options={{
                strings: ["OMAR FATHY", "WEB DEVELOPER"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p className="text-white text-center sm:px-3">
            Motivated junior front-end developer looking for a role as 
            full-stack web developer. Passionate about building elegant
            and functional websites that provide seamless user experiences.
            Enjoy solving complex problems and building custom solutions
            that meet the unique needs of my clients. Outside of work,
            I enjoy spending time at the gym, socializing
             and watching TV Series.
          </p>
          <a
            href={my_cv}
            download
            className="shadow-[0_1px_10px_rgba(8,_112,_184,_0.3)] shadow-[--primaryColor] text-white border-[1px] border-[var(--primaryColor)] rounded-full p-4 px-14 hover:bg-[var(--primaryColor)] transition-all mt-[50px]"
          >
            Download CV
          </a>
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
              <FaWhatsappSquare />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
