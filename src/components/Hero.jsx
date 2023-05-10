import logo from '../assets/me3.jpg'
import logo2 from '../assets/me2.jpg'
import logo3 from '../assets/me1.jpg'
import Typewriter from 'typewriter-effect';

function Hero() {
  return (
    <div className="h-[90vh] mt-[10vh]  w-full relative   ">
      <div className='h-full  flex opacity-[0.02] z-[-1]'>
        <img src={logo2} alt="" className='sm:hidden md:w-[50%] lg:w-[33.33%] h-full' />
        <img src={logo3} alt="" className='sm-md:hidden lg:w-[33.33%] h-full' />
        <img src={logo} alt="" className=' sm:w-[100%]  md:w-[50%] lg:w-[33.33%] h-full' />
      </div>
      <div className='absolute top-0 right-0 bottom-0 left-0 flex justify-center' >
         <div className='h-full sm:w-[90%] w-[80%] flex flex-col gap-[30px] justify-center items-center'>
            <h1 className='text-white text-[20px] font-semibold'>Hello I&apos;M</h1>
            <h1 className='text-[var(--primaryColor)] sm:text-[30px] text-[70px]'>
                <Typewriter 
                    options={{
                        strings: ['OMAR FATHY', 'FRONT END DEVELOPER', 'FREELANCER'],
                        autoStart: true,
                        loop: true,
                    }}  
                />
            </h1>
            <p className='text-white text-center'> I consistently stay up-to-date with the latest web technologies and trends, and I collaborate closely with clients to ensure their vision is brought to life. With a user-centered design approach, I take pride in delivering high-quality output that exceeds client expectations and provides a positive impact on the end-users.</p>
            <button className='text-white border-[1px] border-[var(--primaryColor)] rounded-full p-4 px-14 hover:bg-[var(--primaryColor)] transition-all mt-[50px]'>Download CV</button>
         </div>
      </div>
    </div>
  )
}

export default Hero;