import logo from '../assets/me1.jpg'
import logo2 from '../assets/me2.jpg'
import logo3 from '../assets/me3.jpg'
import Typewriter from 'typewriter-effect';

function Hero() {
  return (
    <div className="h-[90vh] mt-[10vh]  w-full relative   ">
      <div className='h-full  flex opacity-[0.02] z-[-1]'>
        <img src={logo2} alt="" className='w-[33.33%] h-full' />
        <img src={logo3} alt="" className='w-[33.33%] h-full' />
        <img src={logo} alt="" className='w-[33.33%] h-full' />
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
            <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque dicta repudiandae hic, repellendus ratione aspernatur rerum mollitia necessitatibus qui enim officiis, neque nisi fugit praesentium labore, reprehenderit aliquam iusto ducimus.</p>
            <button className='text-white border-[1px] border-[var(--primaryColor)] rounded-full p-4 px-14 hover:bg-[var(--primaryColor)] transition-all mt-[50px]'>Download CV</button>
         </div>
      </div>
    </div>
  )
}

export default Hero;