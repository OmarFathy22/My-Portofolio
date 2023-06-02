const ProjectsVideos = ({ videoSrc, setOpen }) => {
  return (
    <div className="fixed h-[100vh] w-[100vw] bg-[#222] flex justify-center items-center pt-[100px]">
      <video
        controls
        autoPlay
        id="myVideo"
        src={"https://firebasestorage.googleapis.com/v0/b/postatiwith.appspot.com/o/Portofolio%20website%20videos%2FConnectivea.mp4?alt=media&token=3db91fe2-f311-4482-8310-3ff4ed67fbfa&_gl=1*1kajvhq*_ga*MjE0NDEzNDExNy4xNjg0MDMyMTIy*_ga_CW55HF8NVT*MTY4NTczNTU2MC40Mi4xLjE2ODU3MzY4MTcuMC4wLjA."}
        className="z-[-1] w-[100%] h-[100%] relative"
      >
        Your browser does not support HTML video.
      </video>
      <button

        className="close_video z-11 text-white z-100 fixed top-[100px] right-[20px] cursor-pointer"
        onClick={() => {
          setOpen(false);
        }}
        
        
      >
        X
      </button>
    </div>
  );
};

export default ProjectsVideos;
