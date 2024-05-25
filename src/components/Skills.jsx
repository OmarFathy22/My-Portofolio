import  { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import ReactGA from 'react-ga';

const skills = [
  { name: "HTML", percentage: "85%" },
  { name: "CSS", percentage: "80%" },
  { name: "JAVASCRIPT", percentage: "85%" },
  { name: "C++", percentage: "85%" },
  { name: "REACT.JS", percentage: "80%" },
  { name: "REACT NATIVE", percentage: "80%" },
  { name: "NEXT.JS", percentage: "70%" },
  { name: "TAILWIND CSS", percentage: "85%" },
  { name: "FIREBASE", percentage: "80%" },
  { name: "GIT-GITHUB", percentage: "65%" },
  { name: "NODE JS", percentage: "70%" },
  { name: "EXPRESS JS", percentage: "70%" },
  // { name: "MONGO DB", percentage: "65%" },
];


function AboutMe() {
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  ReactGA.pageview(window.location.pathname + window.location.search);
  useEffect(() => {
    const hasAnimatedStorage = JSON.parse(localStorage.getItem('hasAnimated'));
    if (hasAnimatedStorage) {
      setHasAnimated(hasAnimatedStorage);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          localStorage.setItem('hasAnimated', JSON.stringify(true));
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  useEffect(() => {
    const handleUnload = () => {
      localStorage.removeItem('hasAnimated');
    };

    window.onbeforeunload = handleUnload;
    return () => {
      window.onbeforeunload = null;
    };
  }, []);
  
  return (
    <section  data-aos="zoom-in-up" className=" mb-[50px] min-h-[80vh] xxl:mb-0 flex items-center flex-col   justify-center px-[10%]  mt-[100px] ">
      <Helmet>
        <meta name="Description" content="On this page you will find my skills section" />
        <title>Skills</title>
        <link rel="canonical" href="https://omarfathy.pages.dev" />
    </Helmet>
      <h1 className="text-[50px]  font-bold mb-7 gradient-text">
        Skills
      </h1>
      <div ref={sectionRef} className="flex justify-center  gap-10 gap-x-[200px] flex-wrap ">
        {skills.map((item, index) => {
          return (
            <div
              key={index}
              className="relative flex shadow-[0px_px_0px_5px_#00000024] shadow-orange-500  border-[1px] border-orange-500 rounded-full w-full h-10"
            >
            <div className='absolute w-full flex h-full '>
                <h4 className="text-white text-center !w-[100%] flex items-center justify-center  !h-full  font-semibold">
                  {item.name}
                </h4>
            </div>
              <div
                style={{ width: item.percentage }}
                className="h-full rounded-full "
              >
                <div className={`w-0 h-full rounded-full gradient-bg ${hasAnimated ? "skills" : ''} `}></div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default AboutMe;
