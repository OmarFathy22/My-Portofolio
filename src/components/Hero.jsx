import my_cv from "../assets/OmarFathyMohamed.pdf";
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
          src={"https://res.cloudinary.com/dqhdokahr/image/upload/v1691835175/my-portfolio/remove_bg_yvxr7q.png"}
          alt=""
          className="AnimatedHero w-[500px] h-[500px] sm:w-[300px] sm:h-[300px] pt-2    
          border-[2px] border-orange-500 rounded-full  object-contain  sticky top-0 right-0 left-0 bottom-0
          shadow-[0px_-10px_20px_1px_#e2e8f0] shadow-orange-500  transition-all duration-500 ease-in-out
          
           "
        />
      </div>
      <div className="HeroRight  flex justify-center flex-1">
        <div className="h-full w-full flex flex-col gap-[30px] justify-center items-center">
          <h1 className="text-white text-[20px] font-semibold">
            Hello I&apos;M
          </h1>
          <h1 className="gradient-text text-center sm:!text-[25px] sm-md:text-[30px] lg:text-[50px] text-[70px]">
            <Typewriter
              options={{
                strings: ["OMAR FATHY", "FULL STACK DEVELOPER"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p className="text-white text-center sm:!text-[15px] sm:px-3">
            Motivated Junior Full-Stack Web Developer. Passionate about building
            elegant and functional websites that provide seamless user
            experiences. Enjoy solving complex problems and building custom
            solutions that meet the unique needs of my clients. Outside of work,
            I enjoy spending time at the gym, socializing and watching TV
            Series.
          </p>
          <a
            href={my_cv}
            download
            className="shadow-[0_1px_10px_rgba(8,_112,_184,_0.3)] shadow-orange-500 text-white border-[1px] border-orange-500 rounded-full p-4 px-14 hover:bg-[var(--primaryColor)] transition-all mt-[50px] sm:mt-[10px]"
          >
            Download CV
          </a>
          <div className="flex justify-center items-center gap-[15px]">
            <a
              href={socialLinks[3]}
              target="_blank"
              rel="noreferrer"
              className="gradient-text text-[25px] hover:opacity-[0.9] transition-all"
            >
              <FaGithubSquare />
            </a>
            <a
              href={socialLinks[1]}
              target="_blank"
              rel="noreferrer"
              className="gradient-text text-[22px] hover:opacity-[0.9] transition-all"
            >
              <BsLinkedin />
            </a>

            <a
              href={socialLinks[2]}
              target="_blank"
              rel="noreferrer"
              className="gradient-text text-[30px] hover:opacity-[0.9] transition-all"
            >
              <AiFillInstagram />
            </a>
            <a
              href={socialLinks[0]}
              target="_blank"
              rel="noreferrer"
              className="gradient-text text-[26px] hover:opacity-[0.9] transition-all"
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
