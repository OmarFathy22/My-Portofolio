import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import uploadImage from "../utils/Upload";
import { generateUniqueId } from "../utils/Upload";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from 'react-helmet-async';

const Feedback = () => {
  const [image, setImage] = useState(null);
  const [imageName, setImageName] = useState("");
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    title: "",
    desc: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const imageUrl = await uploadImage(image);
    const id = generateUniqueId();
    await setDoc(doc(db, "feedback", id), {
      name: data.name,
      title: data.title,
      desc: data.desc,
      imageUrl: imageUrl,
    });
    setData({
      name: "",
      title: "",
      desc: "",
    });
    setImage(null);
    setImageName(null);
    setLoading(false);
    navigate("/Testimonials");
  };
  return (

    <div className="mt-[15vh]">
        <h1 className="text-white w-full text-center sm:text-[17px] text-[30px]">
          Give me your <span className="text-[var(--primaryColor)]">impression</span>
        </h1>
      <div className="min-h-[80vh]  text-white flex items-center justify-center">
            <Helmet>
          <meta name="Description" content="On this page You will find what people say about me and my work" />
          <title>Impression</title>
          <link rel="canonical" href="https://omarfathy.pages.dev" />
      </Helmet>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-10 sm:w-[80%] w-[50%]"
        >
        
          <div className="flex flex-col">
            <label className="mb-1"><span className="text-red-500">*</span> Name</label>
            <input
          data-aos="flip-down"
           value={data.name}
            required
            onChange={handleChange}
            type="text"
            name="name"
            className="p-3 rounded-md outline-none !text-[--primaryColor]  "
            placeholder="name"
          />
          </div>
          <div className="flex flex-col">
            <label className="mb-1"><span className="text-red-500">*</span> Title</label>
          <input
          data-aos="flip-up"
           value={data.title}
            required
            onChange={handleChange}
            type="text"
            name="title"
            className="p-3 rounded-md outline-none text-[--primaryColor]  "
            placeholder="title"
          />
          </div>
          <div className="flex flex-col">
            <label className="mb-1"><span className="text-red-500">*</span> Description</label>
          <textarea
          data-aos="flip-up"
           value={data.desc}
            required
            onChange={handleChange}
            name="desc"
            placeholder="What do you think about Me?"
            className="p-3 rounded-md outline-none text-[--primaryColor]  "
          />
          </div>
          <input
          
            id="MyInputFile"
            className="border hidden"
            onChange={(e) => {
              setImage(e.target.files[0]);
              setImageName(e.target.files[0].name);
            }}
            type="file"
            accept="image/*"
          />
          <div data-aos="flip-up" className="flex">
          <div className="flex flex-col">
            <label className="mb-1"> picture (optional)</label>
            <div className="flex ">
              <label 
                htmlFor="MyInputFile"
                className="mb-1 cursor-pointer text-[--primaryColor] bg-white w-fit p-3 rounded-md"
              >
                Choose file
              </label>
            <h1 className="text-white ml-3 truncate translate-y-[10px]">
              {imageName}
            </h1>
            </div>
          </div>
          </div>
          <button
          // data-aos="flip-down"
            disabled = {loading}
            type="submit"
            className="p-3 rounded-md bg-[--primaryColor]  mx-auto w-[100px] "
          >
          {loading ?   <svg
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
            : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Feedback;
