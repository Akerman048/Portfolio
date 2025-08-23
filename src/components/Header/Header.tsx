import s from "./Header.module.css";
import Navigation from "../Navigation/Navigation";
import Logo from "../Logo/Logo";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`${s.header} ${scrolled ? s.scrolled : ""}`}>
      <div className={s.container}>
        <Logo />

        {/* Бургер тільки на мобайлі; ховаємо коли меню відкрите */}
        {!menuOpen && (
          <button
            className={s.headerBurger}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
          >
            <span className={s.burgerBar} />
            <span className={s.burgerBar} />
            <span className={s.burgerBar} />
          </button>
        )}

        <div className={s.rightBlock}>
          <div className={s.linksWrap}>
            <Navigation open={menuOpen} onOpenChange={setMenuOpen} />
          </div>
          <div className={s.desktopOnly}>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
