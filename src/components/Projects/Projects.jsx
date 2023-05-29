import { buttons } from "./ProjectsData";
import { ALL, VANILLA_JS, REACT, NEXT } from "./ProjectsData";
import { useState } from "react";
import { Helmet } from 'react-helmet-async';
const Animation = ["zoom-out-down" , "zoom-out-up" , "zoom-out","zoom-in-right","zoom-in-left","zoom-in-down","zoom-in-up","zoom-in","flip-down","flip-up","flip-right","flip-left","fade-down-left","fade-down-right","fade-up-left","fade-up-right","fade-left","fade-right","fade-down","fade-up" , "zoom-out-left" ,"zoom-out-right" ]
function Projects() {
  const [projects, setProjects] = useState(ALL);
  const [currBtn , setcurrBtn] = useState('ALL')
  return (
    <div className="min-h-[100vh]  gap-[30px]  !overflow-x-hidden flex items-center flex-col  justify-center px-[10%] mt-[100px]">
      <Helmet>
        <meta name="Description" content="On this page You will find my recent Projects that I was working on" />
        <title>Projects</title>
        <link rel="canonical" href="https://omarfathy.pages.dev" />
    </Helmet>
      <h1 data-aos={Animation[Math.floor(Math.random() * Animation.length)]} className="text-[50px] font-bold mb-7 text-[var(--primaryColor)]">
        Projects
      </h1>
      <div data-aos={Animation[Math.floor(Math.random() * Animation.length)]} style={{transition : "all 0.3s ease-in" , }} className={` px-5 flex sm:gap-[10px] gap-6 py-4 z-10 bg-[var(--primaryBackground)]`}>
        {buttons.map((item, index) => (
          <button 
           
           onClick={() => {
            setcurrBtn(item)
            setProjects(item === 'ALL' ? ALL : item === 'VANILLA JS' ? VANILLA_JS : item === 'REACT' ? REACT : NEXT)
           }}
            key={index}
            className={`text-white border-[1px] sm:text-[10px] w-[fit-content] border-[var(--primaryColor)] rounded-full sm:px-[10px] sm:py-1 px-4 py-2 hover:bg-[var(--primaryColor)] transition-all  ${item === currBtn ? 'bg-[var(--primaryColor)]' : ''}`}
          >
            {item}
          </button>
        ))}
      </div>
      <section className=" flex justify-center flex-wrap gap-[50px]  overflow-hidden">
        {projects.map((item, index) => (
          <div
          data-aos={Animation[Math.floor(Math.random() * Animation.length)]}
            key={index}
            className="w-[400px] h-[500px]  sm:w-[350px] flex flex-col gap-[10px] bg-[#333] border-[1px] border-[#333] shadow-lg shadow-[#111] rounded-md  pb-[20px]  "
          >
            <img
              className=" rounded-t-md !w-full !h-[200px]"
              src={item.image}
              alt="image"
            />
            <div className="mx-[10px] flex flex-col gap-[10px] items-center">
              <h1 data-aos="fade-left" className="text-[20px] font-bold mb-3 text-[var(--primaryColor)]">
                {item.name}
              </h1>
              <div className="bg-[var(--primaryColor)] w-[100px] h-[3px]" />
              <h3 className="text-white text-[15px] lowercase text-capitalize text-center">{item.description}</h3>
              {/* <p className="text-white text-justify">{item.description}</p> */}
              <h1 data-aos="fade-right" className="text-white my-3 border-b-[1px] font-semibold">
                Stack
              </h1>
              <div data-aos="fade-up" className=" h- flex justify-center gap-[10px] flex-wrap text-white">
                {item.stack.map((item, index) => (
                  <h3
                    key={index}
                    className=" rounded px-2 py-1 bg-[#222121] transition-all cursor-default"
                  >
                    {item}
                  </h3>
                ))}
              </div>
              <div className="w-full flex justify-around">
                <a href={item.SourceCode} target="_blank" rel="noreferrer" className="text-center w-[130px] text-white border-[1px] border-[var(--primaryColor)] rounded-full p-1  hover:bg-[var(--primaryColor)] transition-all mt-[20px] ">
                  Source Code
                </a>
                <a  href={item.LiveDemo} target="_blank" rel="noreferrer" className="text-center  w-[130px] text-white border-[1px] border-[var(--primaryColor)] rounded-full p-1  hover:bg-[var(--primaryColor)] transition-all mt-[20px]">
                  View Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Projects;
