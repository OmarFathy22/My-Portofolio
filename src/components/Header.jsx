import { Link } from "react-router-dom";
const Links = ["/", "About", "Skills", "Projects", "Testimonials", "Contact"];
import logo from "../assets/logo.png";
import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { useRef, useEffect } from "react";
function Header() {
  const [isOpen, setisOpen] = useState(false);
  const [shadow, setshodow] = useState(false);
  const [Active, setActive] = useState("/");
  const menuRef = useRef(null);

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
  return (
    <header className="sm:px-3 z-[200] fixed top-0 bg-[#262525] flex justify-around items-center w-full h-[10vh] ">
      <Link
        to="/"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
      <div data-aos="fade-right">
          <img src={logo} alt="image" className="w-[100px] h-[100px] logo" />
      </div>
        
      </Link>
      <ul data-aos="fade-left" className="hidden lg:flex xl:flex  w-[70%] justify-end items-center gap-[50px]">
        {Links.map((item, index) => (
          <li
            key={index}
            onClick={() => {
              setActive(item);
            }}
          >
            <Link
              className={`image-link relative transition-all hover:text-white text-[#858792] text-[20px] ${
                item === Active ? "active" : ""
              }`}
              to={"/" + item !== "/" ? item : ""}
            >
              {item !== "/" ? item : "Home"}
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex justify-end lg:hidden xl:hidden w-[70%]">
        <button
          ref={menuRef}
          onClick={() => {
            setisOpen(!isOpen);
            setTimeout(() => {
              setshodow(!shadow);
            }, 300);
          }}
          className="text-center cursor-pointer text-[30px]  text-white"
        >
          <BiMenu className="text-center !sm:text-red-500" />
        </button>
      </div>

      <div>
        <ul
          style={{ transition: "all 0.5s ease-in-out" }}
          className={`lg:hidden xl:hidden  fixed top-[10vh] right-0 h-[90vh] w-[220px] bg-[#3f3e3e] flex flex-col items-center justify-center z-1000 gap-[50px]  ${
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
                className={`image-link relative transition-all hover:text-white text-[#858792] text-[20px] ${
                  item === Active ? "active" : ""
                }`}
                to={"/" + item !== "/" ? item : ""}
              >
                {item !== "/" ? item : "Home"}
              </Link>
            </li>
          ))}
        </ul>
        {shadow && (
          <div
            style={{ transition: "all 3s ease-in-out" }}
            className={`lg:hidden xl:hidden fixed top-[10vh] left-0 h-[90vh] w-[100%] z-[-1] bg-[#222222a4] flex flex-col items-center justify-center  gap-[50px]  ${
              isOpen ? "opacity-[0.9]" : "opacity-[0]"
            }`}
          />
        )}
      </div>
    </header>
  );
}

export default Header;
