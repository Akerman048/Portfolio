import s from "./Header.module.css";
import Navigation from "../Navigation/Navigation";
import Logo from "../Logo/Logo";
import ThemeToggle from "../ThemeSwitcher/ThemeToggle";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <nav className={`${s.header} ${scrolled ? s.scrolled : ""}`}>
      <div className={s.container}>
        <Logo />
        <div className={s.rightBlock}>
          <div className={s.linksWrap}>
            <Navigation />
          </div>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
