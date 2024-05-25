import { HiOutlineMail } from "react-icons/hi";
import { FaMobileAlt } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { Helmet } from "react-helmet-async";
import ReactGA from 'react-ga';

function Contact() {
  ReactGA.pageview(window.location.pathname + window.location.search);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const form = useRef();
  const HandleSubmit = () => {
    // e.preventDefault();
    emailjs
      .sendForm(
        "service_nybiiiu",
        "template_6n45jw7",
        form.current,
        "XNhKuhUxoH-AMKijA"
      )
      .then(
        (result) => {
          alert("Message sent successfully");
        },
        (error) => {
          alert("Message not sent");
        }
      );
    reset();
  };

  return (
    <div
      className="min-h-[80vh] lg:mx-auto flex flex-1 items-center flex-col  justify-center px-[10%] mt-[100px]"
      id="#Contact"
    >
      <Helmet>
        <meta
          name="Description"
          content="On this page you will find my Contact Information and a Contact form if you want to contact with me"
        />
        <title>Contact</title>
        <link rel="canonical" href="https://omarfathy.pages.dev" />
      </Helmet>
      <h1
        data-aos="flip-right"
        className="text-[50px] font-bold  mb-[20px] gradient-text text-center"
      >
        Keep in touch
      </h1>
      <div
        className="
      flex sm-md:flex-col sm-md:justify-center sm-md:items-center gap-[100px] sm-md:gap-[20px]  mx-[20px] 
      "
      >
        <form className="text-black" ref={form} onSubmit={handleSubmit(HandleSubmit)}>
          <div className="flex sm-md:flex-col sm-md:gap-[20px]  w-full">
            <div data-aos="flip-left" className="flex flex-col flex-1">
              <input
                {...register("name", {
                  required: { value: true, message: "Name is Required" },
                  pattern: {
                    value: /^[A-Za-z\s]+$/i,
                    message: "Please enter a valid name",
                  },
                  minLength: {
                    value: 3,
                    message: "Minimum length should be 3 characters",
                  },
                })}
                className="px-3 py-4 rounded-md sm-md:mr-0 mr-4 focus-within:outline-none"
                placeholder="Name"
                type="name"
                name="name"
              />
              {errors.name?.type === "required" && (
                <p className="text-red-500 font-medium">
                  {" "}
                  * {errors.name?.message.toString()}
                </p>
              )}
              {errors.name?.type === "minLength" && (
                <p className="text-red-500 font-medium">
                  {" "}
                  * {errors.name?.message}
                </p>
              )}
              {errors.name?.type === "pattern" && (
                <p className="text-red-500 font-medium">
                  {" "}
                  * {errors.name?.message}
                </p>
              )}
            </div>
            <div data-aos="flip-right" className="flex flex-col flex-1">
              <input
                {...register("email", {
                  required: { value: true, message: " Email is Required" },
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Please enter a valid email address",
                  },
                })}
                className=" px-3 py-4 rounded-md focus-within:outline-none"
                placeholder="Email"
                type="email"
                name="email"
              />
              {errors.email?.type === "required" && (
                <p className="text-red-500 font-medium">
                  * {errors.email?.message.toString()}
                </p>
              )}
              {errors.email?.type === "pattern" && (
                <p className="text-red-500 font-medium">
                  * {errors.email?.message.toString()}
                </p>
              )}
            </div>
          </div>
          <textarea
            data-aos="flip-up"
            {...register("message", {
              required: { value: true, message: "Message is Required" },
              minLength: {
                value: 10,
                message: "Minimum length should be 10 characters",
              },
            })}
            placeholder="Enter your message here..."
            className=" sm-md:block sm-md:mx-auto w-full sm-md:w-[100%] mt-[20px] p-3 rounded-md focus-within:outline-none"
            style={{ resize: "none" }}
            cols="98"
            rows="10"
            name="message"
          />
          {errors.message?.type === "required" && (
            <p className="text-red-500">{errors.message?.message}</p>
          )}
          {errors.message?.type === "minLength" && (
            <p className="text-red-500">{errors.message?.message}</p>
          )}
          <button
            data-aos="flip-down"
            type="submit"
            onClick={handleSubmit(HandleSubmit)}
            className="  shadow-[0px_px_0px_5px_#00000024] shadow-orange-500 sm-md:w-[40%] sm-md:mx-auto sm-md:block w-full lg:w-full text-center gradient-bg text-white px-5 py-3 rounded-md mt-[20px] focus-within:outline-none"
          >
            Send
          </button>
        </form>
        <div className="flex flex-col gap-[30px] items-center justify-center">
          <h1 data-aos="fade-right" className="text-white text-[25px]">
            <HiLocationMarker />
          </h1>
          <h3
            data-aos="fade-right"
            className="text-[var(--silver)] text-[20px]"
          >
            Egypt
          </h3>
          <h1 data-aos="fade-down" className="text-white text-[25px]">
            <FaMobileAlt />
          </h1>
          <h3 data-aos="fade-down" className="text-[var(--silver)] text-[20px]">
            +20 1271527590
          </h3>
          <h1 data-aos="fade-up" className="text-white text-[25px]">
            <HiOutlineMail />
          </h1>
          <h3 data-aos="fade-up" className="text-[var(--silver)] text-[20px]">
            omar.fathy.web@gmail.com
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Contact;
