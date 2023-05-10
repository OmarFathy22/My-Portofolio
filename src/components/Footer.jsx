import {FaGithubSquare} from 'react-icons/fa';
import {AiFillInstagram} from 'react-icons/ai';
import {BsLinkedin} from 'react-icons/bs';
import {FaFacebookSquare} from 'react-icons/fa';
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <div className='bg-[#111] h-[100px] flex flex-col justify-center items-center '>
      <div className="flex justify-center items-center gap-[20px]">
        <a href="" className="text-[var(--primaryColor)] text-[30px] hover:opacity-[0.9] transition-all">
          <AiFillInstagram />
        </a>
        <a href="" className="text-[var(--primaryColor)] text-[25px] hover:opacity-[0.9] transition-all">
          <FaGithubSquare />
        </a>
      <Link to={"/"}>
        <img src={logo} alt="" className='w-[100px] h-[100px] mx-[20px]' />
      </Link>
        <a href="" className="text-[var(--primaryColor)] text-[22px] hover:opacity-[0.9] transition-all">
          <BsLinkedin />
        </a>
        <a href="" className="text-[var(--primaryColor)] text-[25px] hover:opacity-[0.9] transition-all">
          <FaFacebookSquare />
        </a>
    </div> 
      {/* <h1  className='text-white text-[20px] font-extrabold border-b-[var(--primaryColor)] border-b-[3px] cursor-default'>OMAR FATHY</h1> */}
    </div>
  )
}

export default Footer;