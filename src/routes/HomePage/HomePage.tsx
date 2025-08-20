import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Home from "../../components/Home/Home";
import About from "../../components/About/About";
import StackSlider from "../../components/StackSlider/StackSlider";
import Projects from "../../components/Projects/Projects";
import Contact from "../../components/Contact/Contact";
// Якщо ти користуєшся react-scroll:
import { scroller } from "react-scroll";

export default function HomePage() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const state = location.state as { scrollTo?: string } | null;
    if (state?.scrollTo) {
      // варіант A: якщо секції загорнуті в <Element name="...">
      scroller.scrollTo(state.scrollTo, { duration: 500, smooth: true, offset: -80 });

      // варіант B (якщо скролиш до елементів з id):
      // document.getElementById(state.scrollTo)?.scrollIntoView({ behavior: "smooth", block: "start" });

      // прибираємо state
      navigate(".", { replace: true, state: null });
    }
  }, [location.state, navigate]);

  return (
    <>
      <Home />
      <About />
      <StackSlider />
      <Projects />
      <Contact />
    </>
  );
}
