
import Typewriter from "typewriter-effect";
function Footer() {
  return (
    <div className="bg-[#111] h-[100px] flex flex-col justify-center items-center flex-shrink-0 px-[20px]  ">
      <h1 className="gradient-text sm-md:text-[20px] text-[20px] text-center">
        <Typewriter
          options={{
            strings: [
              `" It's not just about being better. It's about being different. You need to give people a reason to choose your business "`,
              `" Keep going everything comes to you at the right time "`,
              `" The journey of a thousand miles begins with one step "`,
              `" Don't let the noise of others' opinions drown out your own inner voice "`,
              `" Don't count the days, make the days count "`,
              `" Nothing is impossible, the word itself says “I’m possible! "`,
              `" The best preparation for tomorrow is doing your best today "`,
            ],
            timeout: 10,
            autoStart: true,
            loop: true,
            deleteSpeed	: 10,
            delay: 70,
            pauseFor: 5000,
          }}
        />
      </h1>
    </div>
  );
}

export default Footer;
