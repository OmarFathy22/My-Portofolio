import { FaGithubSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
const socialLinks = [
  "https://m.facebook.com/profile.php?id=100004875043718",
  "https://www.linkedin.com/in/omar-fathy-a3b987223",
  "https://www.instagram.com/o_fathy_/",
  "https://github.com/OmarFathy22",
];
function Footer() {
  return (
      <div className="bg-[#111] h-[100px] flex flex-col justify-center items-center flex-shrink-0  ">
        <div className="flex justify-center items-center gap-[20px]">
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
          <Link
            to={"/"}
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <img src={logo} alt="" className="w-[100px] h-[100px] mx-[20px]" />
          </Link>
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
            className="text-[var(--primaryColor)] text-[25px] hover:opacity-[0.9] transition-all"
          >
            <FaFacebookSquare />
          </a>
        </div>
        {/* <h1  className='text-white text-[20px] font-extrabold border-b-[var(--primaryColor)] border-b-[3px] cursor-default'>OMAR FATHY</h1> */}
      </div>
  );
}

export default Footer;
