import { Helmet } from 'react-helmet-async';
// import { Link } from 'react-router-dom';

function AboutMe() {
  return (
      <section data-aos="fade-down-left" className="min-h-[calc(100vh-200px)]  gap-[30px]  !overflow-x-hidden flex items-center flex-col  justify-center px-[10%] mt-[100px]">
      <Helmet>
        <meta name="Description" content="On this page you will find some information about me" />
        <title>About</title>
        <link rel="canonical" href="https://omarfathy.pages.dev" />
    </Helmet>
        <h1 className='text-[50px]  font-bold mb-7 text-[var(--primaryColor)]'>About Me</h1>
        <p className='text-white text-center text-[20px ] leading-[30px] sm:text-center'>As a web developer, I am passionate about creating elegant and functional websites that provide seamless user experiences. I specialize in front-end development, using my skills in HTML, CSS, and JavaScript to create designs that are not only visually appealing but also optimized for performance and accessibility.</p>
        {/* <Link to={'/Contact'} className='text-white border-[1px] border-[var(--primaryColor)] rounded-full p-4 px-14 hover:bg-[var(--primaryColor)] transition-all mt-[50px]'>Hire Me</Link> */}
      </section>
  )
}

export default AboutMe;