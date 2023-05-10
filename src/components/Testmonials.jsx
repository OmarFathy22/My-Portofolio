import { FaQuoteRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import logo1 from "../assets/me1.jpg";
import logo2 from "../assets/me2.jpg";
import logo3 from "../assets/me3.jpg";
const testimonials = [
  {
    id: 1,
    name: "Someone",
    title: "web developer",
    disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas illo veniam ipsum non molestiae nostrum corrupti cum .",
    image: logo1,
  },
  {
    id: 2,
    name: "Morata fathy",
    title: "React developer",
    disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas illo veniam ipsum non molestiae nostrum corrupti cum .",
    image: logo2,
  },
  {
    id: 3,
    name: "Someone",
    title: "Next developer",
    disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas illo veniam ipsum non molestiae nostrum corrupti cum .",
    image: logo3,
  },
]
function Testmonials() {
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
      <h1 data-aos="zoom-out" className='text-[50px] font-bold text-[var(--primaryColor)] text-center mb-[100px]'> Testimonials </h1>
      <div className="w-[80%] mx-auto">
        <Slider {...settings}>
        
          {testimonials.map((item , index) => (
              <div key={index} className="  mx-auto gap-[50px] !w-[70%] !flex flex-col justify-center items-center">
              <h3 data-aos="zoom-in" className="bg-white px-[20px] py-[25px] text-[var(--primaryColor)] text-[20px]">
                <FaQuoteRight />
              </h3>
              <p data-aos="flip-right" className="text-center text-gray-300">
                {item.disc}
              </p>
              <div className="flex flex-col justify-center items-center gap-[5px]">
                <div data-aos="fade-down" className="border-[3px] border-[var(--primaryColor)] rounded-full p-2 w-[120px] h-[120px]">
                  <img
                    src={item.image}
                    alt="image"
                    className="rounded-full w-full h-full "
                  />
                </div>
                <h1 data-aos="fade-left" className="text-white text-[22px] font-medium capitalize">
                  {item.name}
                </h1>
                <h1 data-aos="fade-right" className="text-[var(--primaryColor)] text-[18px] capitalize">
                  {item.title}
                </h1>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Testmonials;
