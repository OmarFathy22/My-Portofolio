import { buttons } from "./ProjectsData";
import { ALL, REACT_NATIVE, REACT, MERN } from "./ProjectsData";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
// import { AiFillStar } from "react-icons/ai";
import ReactGA from "react-ga";

const Animation = [
  "zoom-out-down",
  "zoom-out-up",
  "zoom-out",
  "zoom-in-right",
  "zoom-in-left",
  "zoom-in-down",
  "zoom-in-up",
  "zoom-in",
  "flip-down",
  "flip-up",
  "flip-right",
  "flip-left",
  "fade-down-left",
  "fade-down-right",
  "fade-up-left",
  "fade-up-right",
  "fade-left",
  "fade-right",
  "fade-down",
  "fade-up",
  "zoom-out-left",
  "zoom-out-right",
];
function Projects() {
  const [projects, setProjects] = useState(ALL);
  const [currBtn, setcurrBtn] = useState("ALL");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);
  ReactGA.pageview(window.location.pathname + window.location.search);
  return (
    <div className=" gap-[30px]  flex items-center flex-col  justify-center px-[10%] mt-[100px] no-scrollbar">
      <Helmet>
        <meta
          name="Description"
          content="On this page You will find my recent Projects that I was working on"
        />
        <title>Projects</title>
        <link rel="canonical" href="https://omarfathy.pages.dev" />
      </Helmet>
      <h1
        data-aos={Animation[Math.floor(Math.random() * Animation.length)]}
        className="text-[50px] font-bold mb-7 gradient-text"
      >
        Projects
      </h1>
      <div
        data-aos={Animation[Math.floor(Math.random() * Animation.length)]}
        style={{ transition: "all 0.3s ease-in" }}
        className={` px-5 flex sm:gap-[10px] gap-6 py-4 z-1 bg-[var(--primaryBackground)]`}
      >
        {buttons.map((item, index) => (
          <button
            onClick={() => {
              setcurrBtn(item);
              setProjects(
                item === "ALL"
                  ? ALL
                  : item === "REACT NATIVE"
                  ? REACT_NATIVE
                  : item === "REACT"
                  ? REACT
                  : MERN
              );
            }}
            key={index}
            className={`text-white border-[1px] sm:text-[10px] font-bold  shadow-[0px_px_0px_5px_#00000024] shadow-orange-500  border-orange-500 rounded-full sm:px-[10px] sm:py-1 px-4 py-2 hover:gradient-bg transition-all  ${
              item === currBtn ? "gradient-bg" : ""
            }`}
          >
            {item}
          </button>
        ))}
      </div>
      <section className=" grid grid-cols-3 max-1300:grid-cols-2 sm-md:!grid-cols-1 gap-[50px]  py-[30px]">
        {projects.map((item, index) => (
          <div
            key={index}
            data-aos={Animation[Math.floor(Math.random() * Animation.length)]}
          >
            <div className="rounded-md overflow-hidden">
              <div className="gradient-bg   p-[2px]">
                <div className=" h-[630px] sm:h-fit sm:w-full flex flex-col gap-[10px] bg-[#333] border-[1px] border-[#333]    rounded-md  pb-[20px]  ">
                  {isLoaded && (
                    <div>
                      {item.video ? (
                        <iframe
                          height="100%"
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          loading="eager"
                          className="!w-full h-[320px] border-0  rounded-md "
                          src={
                            "https://www.youtube.com/embed/" + item?.youtubeId
                          }
                        ></iframe>
                      ) : (
                        <img
                          className="!w-full h-[320px]  border-0  !rounded-lg "
                          src={item.image}
                          alt={item.name}
                        />
                      )}
                    </div>
                  )}
                  <div className="mx-[10px] flex flex-col gap-[10px] items-center">
                    <div className="flex items-center justify-center">
                      <h1
                        data-aos="fade-left"
                        className="uppercase text-[20px] font-bold gradient-text"
                      >
                        {item.name}
                      </h1>
                      {/* {item.name === 'CONNECTIVEA' &&   <h1 data-aos="fade-left" className="star absolute right-[70px] xxl:right-[90px] z-[10] gradient-text text-[25px]"><AiFillStar/></h1>} */}
                    </div>
                    <div className="gradient-bg w-[100px] h-[3px]" />
                    <h3 className="text-white text-[15px] lowercase text-capitalize text-center h-[40px]">
                      {item.description}
                    </h3>
                    {/* <p className="text-white text-justify">{item.description}</p> */}
                    <h1
                      data-aos="fade-right"
                      className="text-white my-3 border-b-[1px] font-semibold"
                    >
                      Stack
                    </h1>
                    <div
                      data-aos="fade-up"
                      className=" h- flex justify-center gap-[10px] flex-wrap text-white"
                    >
                      {item.stack.map((item, index) => (
                        <h3
                          key={index}
                          className=" rounded px-2 py-1 bg-[#222121] transition-all cursor-default"
                        >
                          {item}
                        </h3>
                      ))}
                    </div>
                    <div className="w-full flex justify-around gap-3   ">
                      <a
                        href={item.SourceCode}
                        target="_blank"
                        rel="noreferrer"
                        className=" shadow-[0px_px_0px_5px_#00000024] shadow-orange-500 text-center w-[130px] text-white border-[1px] border-orange-500 rounded-full p-1  hover:gradient-bg transition-all mt-[20px] "
                      >
                        Source Code
                      </a>

                      <a
                        href={item.LiveDemo}
                        target="_blank"
                        rel="noreferrer"
                        className="  shadow-[0px_px_0px_5px_#00000024] shadow-orange-500 text-center flex items-center justify-center  w-[130px] text-white border-[1px] border-orange-500 rounded-full p-1  hover:gradient-bg transition-all mt-[20px]"
                      >
                        View App
                      </a>
                      {/* {item.name !== "JS Bootcamp" && (
                        <button
                          onClick={() => {
                            if (item.name === "CONNECTIVEA") {
                              setVideoDemo(
                                "https://firebasestorage.googleapis.com/v0/b/postatiwith.appspot.com/o/Portofolio%20website%20videos%2FConnectivea.mp4?alt=media&token=3db91fe2-f311-4482-8310-3ff4ed67fbfa&_gl=1*1kajvhq*_ga*MjE0NDEzNDExNy4xNjg0MDMyMTIy*_ga_CW55HF8NVT*MTY4NTczNTU2MC40Mi4xLjE2ODU3MzY4MTcuMC4wLjA"
                              );
                            } else if (item.name === "Memory Card Game") {
                              setVideoDemo(
                                "https://firebasestorage.googleapis.com/v0/b/postatiwith.appspot.com/o/Portofolio%20website%20videos%2FMemory%20Card%20Game.mp4?alt=media&token=096da0d0-f6c7-43ac-8cad-834ddff6c5e6"
                              );
                            } else if (item.name === "TASKATI") {
                              setVideoDemo(
                                "https://firebasestorage.googleapis.com/v0/b/postatiwith.appspot.com/o/Portofolio%20website%20videos%2FTaskati.mp4?alt=media&token=8a6c135a-f004-496e-a2a6-9aaeaa02e27c"
                              );
                            } else if (item.name === "Way To Forma") {
                              setVideoDemo(
                                "https://firebasestorage.googleapis.com/v0/b/postatiwith.appspot.com/o/Portofolio%20website%20videos%2Fway%20to%20forma.mp4?alt=media&token=580317a5-a2e4-4a2a-9ea1-994136724489"
                              );
                            } else if (item.name === "3D Portfolio App") {
                              setVideoDemo(
                                "https://firebasestorage.googleapis.com/v0/b/postatiwith.appspot.com/o/Portofolio%20website%20videos%2FUntitled%20video%20-%20Made%20with%20Clipchamp%20(3).mp4?alt=media&token=37a6b2bd-ca7a-4307-b10b-c52bb59e9a08"
                              );
                            }
                            setOpen(true);
                          }}
                          className="text-center  w-[130px] text-white border-[1px] border-[var(--primaryColor)] rounded-full p-1  hover:bg-[var(--primaryColor)] transition-all mt-[20px]"
                        >
                          Video Demo
                        </button>
                      )} */}
                      {/* {item.name === 'CONNECTIVEA' &&   <h1 className="star z-[10000] gradient-text absolute top-5 right-3 text-[25px]"><AiFillStar/></h1>} */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Projects;
