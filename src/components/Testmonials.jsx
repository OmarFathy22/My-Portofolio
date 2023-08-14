import { FaQuoteRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Helmet } from 'react-helmet-async';
import { Link, useLocation } from "react-router-dom";
import ReactGA from 'react-ga';
import { useCollection } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import { db } from "../../firebase/firebase";


function Testmonials() {
  const [value, loading, error] = useCollection(collection(db, "feedback"));
  ReactGA.pageview(window.location.pathname + window.location.search);
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000
  };
  if(loading)return <div className='min-h-[63.5vh]  mt-[10vh] pt-[10vh] w-[100vw] flex justify-center flex-col items-center text-white  '>
   <svg
            aria-hidden="true"
          className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-300 fill-[--white]"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
</div>
  if(error)return <div className='min-h-[63.5vh]  mt-[10vh] pt-[10vh] w-[100vw] flex justify-center flex-col items-center text-white  '>
  <h1>Error...</h1>
</div>
  const testimonials = value?.docs?.map((doc) => doc?.data());
  const {pathname} = useLocation();
  return (
    <div  className="my-[100px]">
      <Helmet>
        <meta name="Description" content="On this page You will find what people say about me and my work" />
        <title>{pathname === "/"?"Home": "Testmonials"}</title>
        <link rel="canonical" href="https://omarfathy.pages.dev" />
    </Helmet>
      <h1 data-aos="zoom-out" className='text-[50px] font-bold text-[var(--primaryColor)] text-center mb-[100px]'> Testimonials </h1>
      <div className="w-[80%] mx-auto  ">
        <Slider {...settings} >
      
          {testimonials?.map((item , index) => (
              <div key={index} className="   mx-auto gap-[50px] !w-[70%] !flex flex-col justify-center items-center">
              <h3 data-aos="zoom-in" className="bg-white px-[20px] py-[25px] text-[var(--primaryColor)] text-[20px]">
                <FaQuoteRight />
              </h3>
              <p data-aos="flip-right" className="text-center text-gray-300">
                {item?.desc}
              </p>
              <div className="flex flex-col justify-center items-center gap-[5px] ">
                <div data-aos="fade-down" className="border-[3px] border-[var(--primaryColor)]  shadow-[0px_px_0px_5px_#00000024] shadow-[--primaryColor] rounded-full p-2 h-[200px] w-[200px] ">
                  <img
                    src={item?.imageUrl || "https://res.cloudinary.com/dqhdokahr/image/upload/v1691835172/my-portfolio/anoni_pdh2qo.png"}
                    alt="image"
                    className="rounded-full w-full h-full object-cover "
                  />
                </div>
              <div>
                  <h1 data-aos="fade-left" className="text-white text-[22px] font-medium text-center capitalize">
                    {item?.name}
                  </h1>
                  <h1 data-aos="fade-right" className="text-[var(--primaryColor)] text-[18px] text-center capitalize">
                    {item?.title}
                  </h1>
              </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="w-full flex flex-col gap-3 justify-center items-center">
        <Link to={"/Impression"} className='text-white border-[1px] border-[var(--primaryColor)] rounded-full p-4  hover:bg-[var(--primaryColor)] transition-all mt-[50px] text-[15px] min-w-[200px] text-center  shadow-[0px_px_0px_5px_#00000024] shadow-[--primaryColor]'>Give Impression</Link>
        <p className="text-white text-center">You are welcome to provide your Impression about me, and it will be included in this section</p>
      </div>
    </div>
  );
}

export default Testmonials;
