import Home from "./components/Home";
import Root from "./components/Root";
import About from "./components/AboutMe";
import Projects from "./components/Projects/Projects";
import Testimonials from "./components/Testmonials";
import Contact from "./components/Contact";
import Skill from "./components/Skills";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { useEffect } from "react";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
       <Route path="/" element={<Home />} />
       <Route path="About" element={<About />} />
       <Route path="Projects" element={<Projects />} />
       <Route path="Testimonials" element={<Testimonials />} />
       <Route path="Contact" element={<Contact />} />
       <Route path="Skills" element={<Skill />} />
    </Route>
  )
);


function App() {
  useEffect(() => {
    AOS.init();
  } , [])
  return (
     <RouterProvider router={router} />
  );
}

export default App;