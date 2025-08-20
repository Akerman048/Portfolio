// routes/HomePage/HomePage.tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Home from "../../components/Home/Home";
import About from "../../components/About/About";
import StackSlider from "../../components/StackSlider/StackSlider";
import Projects from "../../components/Projects/Projects";
import Contact from "../../components/Contact/Contact";

export default function HomePage() {
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
  }, [hash]);

  return (
    <>
      <Home />
      <About />
      <StackSlider />
      <Projects />
      <Contact/>
    </>
  );
}
