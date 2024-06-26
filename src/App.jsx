import Home from "./components/Home";
import Root from "./components/Root";
import About from "./components/AboutMe";
import Projects from "./components/Projects/Projects";
import Testimonials from "./components/Testmonials";
import Contact from "./components/Contact";
import Skill from "./components/Skills";
import Impression from "./components/Impression";
import NotFound from "./components/Error404";
import AOS from "aos";
import "aos/dist/aos.css";
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
      <Route
        path="About"
        element={
          <div>
            <About />
          </div>
        }
      />
      <Route
        path="Projects"
        element={
          <div className="sm:mt-[150px]">
            <Projects />
          </div>
        }
      />
      <Route
        path="Testimonials"
        element={
          <div>
            <Testimonials />
          </div>
        }
      />
      <Route
        path="Contact"
        element={
          <div className="sm:mt-[150px]">
            <Contact />
          </div>
        }
      />
      <Route
        path="Skills"
        element={
          <div className="sm:mt-[150px]">
            <Skill />
          </div>
        }
      />
      <Route path="Impression" element={<Impression />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
    if (localStorage.getItem("--primaryColor") === null) {
      localStorage.setItem("--primaryColor", JSON.stringify("#69B6DD"));
    }
    document.documentElement.style.setProperty(
      "--primaryColor",
      JSON.parse(localStorage.getItem("--primaryColor"))
    );
  }, []);
  const { theme } = useContext(ColorContext);
  return (
    <div style={{ color: theme }}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
