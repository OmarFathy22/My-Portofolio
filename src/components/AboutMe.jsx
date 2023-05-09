import Image from '../assets/man.png'
function AboutMe() {
  return (
    <div className='flex sm:flex-col  justify-center items-center h-[100vh]  gap-[100px]'>
      <section data-aos="fade-down-right">
        <img src={Image} alt="Image" />
      </section>
      <section data-aos="fade-down-left" className='sm:flex sm:flex-col sm:items-center  sm-justify-center px-[10%]'>
        <h1 className='text-[30px]  font-bold mb-7 text-[var(--primaryColor)]'>About Me</h1>
        <p className='text-white leading-[30px] sm:text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Veniam, voluptatum nobis porro aut impedit itaque<br/> maxime voluptates atque quas, unde eius, consequuntur illum nisi non fugiat <br/> distinctio vitae facere rem.</p>
        <button data-aos="zoom-in-up" className='sm:mb-[100px]  text-white border-[1px] border-[var(--primaryColor)] rounded-full p-4 px-14 hover:bg-[var(--primaryColor)] transition-all mt-[50px]'>Hire Me</button>
      </section>
    </div>
  )
}

export default AboutMe;