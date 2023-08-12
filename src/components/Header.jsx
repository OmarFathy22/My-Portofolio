import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
const Links = ["", "Skills", "Projects", "Testimonials", "Contact"];
import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { useRef, useEffect } from "react";
import ColorContext from "../context/ColorTheme";
import { useContext } from "react";
function Header() {
  const { theme, changeColor } = useContext(ColorContext);
  const [isOpen, setisOpen] = useState(false);
  const [shadow, setshodow] = useState(false);
  const [setActive] = useState("/");
  const menuRef = useRef(null);
  const location = useLocation();
  console.log(location.pathname);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setisOpen(false);
      setshodow(false);
    }
  };
  const navigate = useNavigate();
  const Nav = () => {
    navigate("/");
  };

  return (
    <header className="pl-7 pr-6 z-[200] fixed top-0 bg-[#262525] flex justify-between items-center w-full sm:h-[7vh] h-[10vh] ">
      <Link
        to="/"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <div data-aos="fade-left" className="">
          {/* <img src={logo} alt="image" className="w-[200px] h-[100px] " /> */}
          <h1
            onClick={Nav}
            className="cursor-pointer text-[--primaryColor] sm:text-[20px] sm:w-[200px]    w-[250px]  logoFont   uppercase text-[30px]"
          >
            Omar Fathy
          </h1>
        </div>
      </Link>
      <ul
        data-aos="fade-left"
        className="hidden lg:flex xl:flex flex-1 justify-end items-center gap-[50px]"
      >
        {Links.map((item, index) => (
          <li key={index}>
            <Link
              className={` font-extrabold image-link relative transition-all hover:text-white text-[#cdced1] text-[20px] ${
                "/" + item === location.pathname ? "active" : ""
              }`}
              to={"/" + item !== "/" ? item : ""}
            >
              {item !== "" ? item : "Home"}
            </Link>
          </li>
        ))}
        <input
          type="color"
          value={theme}
          onChange={changeColor}
          className=" cursor-pointer  w-[30px] h-[25px] py-1 px-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-[--priamryColor]"
        />
      </ul>
      <div
        data-aos="fade-right"
        className="flex justify-end item-center lg:hidden xl:hidden w-[70%] "
      >
        <input
          type="color"
          value={theme}
          onChange={changeColor}
          className="cursor-pointer mt-[7px] sm:mr-1  w-[30px] h-[25px] py-1 px-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-[--primaryColor]"
        />
        <button
          ref={menuRef}
          onClick={() => {
            setisOpen(!isOpen);
            setTimeout(() => {
              setshodow(!shadow);
            }, 300);
          }}
          className="  cursor-pointer text-[40px]   text-[--primaryColor]"
        >
          <BiMenu className="text-center" />
        </button>
      </div>

      <div>
        <ul
          style={{ transition: "all 0.5s ease-in-out" }}
          className={`lg:hidden xl:hidden  fixed sm:top-[7vh] top-[10vh] bottom-0 right-0 h-[100vh] w-[220px] bg-[#3f3e3e] flex flex-col items-center justify-start pt-[5vh] z-1000 gap-[50px]  ${
            isOpen ? "translate-x-[0]" : "translate-x-[1000px]"
          }`}
        >
          {Links.map((item, index) => (
            <li
              key={index}
              onClick={() => {
                setActive(item);
              }}
            >
              <Link
                className={`font-bold image-link relative transition-all hover:text-white text-[#c4c1c1] text-[20px] ${
                  "/" + item === location.pathname ? "active" : ""
                }`}
                to={"/" + item !== "/" ? item : ""}
              >
                {item !== "" ? item : "Home"}
              </Link>
            </li>
          ))}
        </ul>
        {shadow && (
          <div
            style={{ transition: "all 3s ease-in-out" }}
            className={`lg:hidden xl:hidden fixed sm:top-[7vh] top-[10vh] left-0 h-[100vh] w-[100%] z-[-1] bg-[#222222a4] flex flex-col items-center justify-center  gap-[50px]  ${
              isOpen ? "opacity-[0.9]" : "opacity-[0]"
            }`}
          />
        )}
      </div>
    </header>
  );
}

export default Header;
