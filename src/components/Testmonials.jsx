import { FaQuoteRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Helmet } from 'react-helmet-async';
import { Link } from "react-router-dom";
import ReactGA from 'react-ga';


const testimonials = [
  {
    id: 1,
    name: "Ahmed Sobhi",
    title: "Music Producer",
    disc: "really well-functional website and very good prices for the value.",
    image: "https://res.cloudinary.com/dqhdokahr/image/upload/v1691835174/my-portfolio/sobhi_qii6w8.jpg",
  },
  {
    id: 2,
    name: "Abdullah Tarek",
    title: "Front End Developer",
    disc: "Highly skilled web developer with great team work and a very healthy mindset. A bright future lues ahead of you my friend! Hopefully we can work together again in the future",
    image: "https://res.cloudinary.com/dqhdokahr/image/upload/v1691836213/my-portfolio/photo_2023-08-12_13-19-03_tgnxqw.jpg",
  },
  {
    id: 3,
    name: "Samy Aziz",
    title: "Civil Engineer",
    disc: "Highly recommend this web developer for their impressive website designs and strong work ethic.",
    image: "https://res.cloudinary.com/dqhdokahr/image/upload/v1691835172/my-portfolio/anoni_pdh2qo.png",
  },
  {
    id: 4,
    name: "Ryan Adam",
    title: "Back End Developer",
    disc: "very good developer , it was so nice to work with this man .",
    image: "https://res.cloudinary.com/dqhdokahr/image/upload/v1691835172/my-portfolio/anoni_pdh2qo.png",
  },
]
function Testmonials() {
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
  
  return (
    <div  className="my-[100px]">
      <Helmet>
        <meta name="Description" content="On this page You will find what people say about me and my work" />
        <title>Testimonials</title>
        <link rel="canonical" href="https://omarfathy.pages.dev" />
    </Helmet>
      <h1 data-aos="zoom-out" className='text-[50px] font-bold text-[var(--primaryColor)] text-center mb-[100px]'> Testimonials </h1>
      <div className="w-[80%] mx-auto  ">
        <Slider {...settings} className="">
      
          {testimonials.map((item , index) => (
              <div key={index} className="   mx-auto gap-[50px] !w-[70%] !flex flex-col justify-center items-center">
              <h3 data-aos="zoom-in" className="bg-white px-[20px] py-[25px] text-[var(--primaryColor)] text-[20px]">
                <FaQuoteRight />
              </h3>
              <p data-aos="flip-right" className="text-center text-gray-300">
                {item.disc}
              </p>
              <div className="flex flex-col justify-center items-center gap-[5px] ">
                <div data-aos="fade-down" className="border-[3px] border-[var(--primaryColor)]  shadow-[0px_px_0px_5px_#00000024] shadow-[--primaryColor] rounded-full p-2 h-[200px] w-[200px] ">
                  <img
                    src={item.image}
                    alt="image"
                    className="rounded-full w-full h-full object-cover "
                  />
                </div>
              <div>
                  <h1 data-aos="fade-left" className="text-white text-[22px] font-medium text-center capitalize">
                    {item.name}
                  </h1>
                  <h1 data-aos="fade-right" className="text-[var(--primaryColor)] text-[18px] text-center capitalize">
                    {item.title}
                  </h1>
              </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="w-full flex flex-col gap-3 justify-center items-center">
        <Link to={"/Contact"} className='text-white border-[1px] border-[var(--primaryColor)] rounded-full p-4 px-8 hover:bg-[var(--primaryColor)] transition-all mt-[50px]  shadow-[0px_px_0px_5px_#00000024] shadow-[--primaryColor]'>Give Feedback</Link>
        <p className="text-white text-center">You are welcome to provide your feedback, and I will include it in this section</p>
      </div>
    </div>
  );
}

export default Testmonials;
