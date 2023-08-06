import  { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import ReactGA from 'react-ga';

const skills = [
  { name: "HTML", percentage: "95%" },
  { name: "CSS", percentage: "92%" },
  { name: "JAVASCRIPT", percentage: "90%" },
  { name: "TYPESCRIPT", percentage: "70%" },
  { name: "C++", percentage: "90%" },
  { name: "REACT.JS", percentage: "90%" },
  { name: "NEXT.JS", percentage: "80%" },
  { name: "TRHEE.JS", percentage: "75%" },
  { name: "TAILWIND CSS", percentage: "85%" },
  { name: "STYLED-COMPONENTS", percentage: "85%" },
  { name: "MATERIAL UI", percentage: "95%" },
  { name: "FIREBASE", percentage: "85%" },
  { name: "WORDPRESS", percentage: "90%" },
  { name: "GITHUB", percentage: "85%" },
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
    <section  data-aos="zoom-in-up" className=" mb-[50px] xxl:mb-0 flex items-center flex-col min-h-[calc(100vh-(13.2vh+100px))]  justify-center px-[10%]  mt-[100px] ">
      <Helmet>
        <meta name="Description" content="On this page you will find my skills section" />
        <title>Skills</title>
        <link rel="canonical" href="https://omarfathy.pages.dev" />
    </Helmet>
      <h1 className="text-[50px]  font-bold mb-7 text-[var(--primaryColor)]">
        Skills
      </h1>
      <div ref={sectionRef} className="flex justify-center  gap-10 gap-x-[200px] flex-wrap ">
        {skills.map((item, index) => {
          return (
            <div
              key={index}
              className="relative flex  border-[1px] border-[var(--primaryColor)] rounded-full sm:w-[300px] w-[500px] h-5"
            >
            <div className='absolute w-full'>
                <h4 className="text-white text-center !w-[100%] absolute top-[-3px]  font-semibold">
                  {item.name}
                </h4>
            </div>
              <div
                style={{ width: item.percentage }}
                className="h-full rounded-full "
              >
                <div className={`w-0 h-full rounded-full bg-[var(--primaryColor)] ${hasAnimated ? "skills" : ''} `}></div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default AboutMe;
