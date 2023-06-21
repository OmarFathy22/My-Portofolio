const ProjectsVideos = ({ setOpen , VideoDemo }) => {
  return (
    <div className="z-[100000] fixed h-[100vh] w-[100vw] bg-[#222] flex justify-center items-center pt-[100px]">
      <video
        controls
        autoPlay
        id="myVideo"
        src={VideoDemo}
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
