import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

function AboutMe() {
  const location = useLocation();
  return (
    <div className={`flex sm:flex-col  justify-center items-center  h-[calc(100vh-430px)]   ${location.pathname === '/About' ? "mt-[30vh]" : ""}`}>
      <Helmet>
        <meta name="Description" content="On this page you will find some information about me" />
        <title>About</title>
        <link rel="canonical" href="https://omarfathy.pages.dev" />
    </Helmet>
      <section data-aos="fade-down-left" className='flex items-center flex-col justify-center px-[10%]'>
        <h1 className='text-[50px]  font-bold mb-7 text-[var(--primaryColor)]'>About Me</h1>
        <p className='text-white text-center text-[20px ] leading-[30px] sm:text-center'>As a web developer, I am passionate about creating elegant and functional websites that provide seamless user experiences. I specialize in front-end development, using my skills in HTML, CSS, and JavaScript to create designs that are not only visually appealing but also optimized for performance and accessibility.</p>
      </section>
    </div>
  )
}

export default AboutMe;