import Home from "./components/Home";
import Root from "./components/Root";
import About from "./components/AboutMe";
import Projects from "./components/Projects/Projects";
import Testimonials from "./components/Testmonials";
import Contact from "./components/Contact";
import Skill from "./components/Skills";
import NotFound from './components/Error404'
import AOS from 'aos';
import 'aos/dist/aos.css';
import ColorContext from "./context/ColorTheme"; 

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { useContext, useEffect } from "react";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
       <Route path="/" element={<Home />} />
       <Route path="About" element={<About />} />
       <Route path="Projects" element={<Projects />} />
       <Route path="Testimonials" element={<Testimonials />} />
       <Route path="Contact" element={<Contact />} />
       <Route path="Skills" element={<Skill />} />
       <Route path="*" element={<NotFound/>} />
    </Route>
  )
);


function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
    if(localStorage.getItem("--primaryColor") === null){
      localStorage.setItem("--primaryColor", JSON.stringify('cyan'));
    }
    document.documentElement.style.setProperty(
      "--primaryColor",
      JSON.parse(localStorage.getItem("--primaryColor"))
    );
  } , [])
  const {theme} = useContext(ColorContext)
  return (
      <div style={{color:theme}} >
         <RouterProvider router={router} />
      </div>
  );
}

export default App;