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
        <div className={s.left}>
          <Logo />
        </div>

        {/* центр: тут показується ДЕСКТОПНЕ меню */}
        <div className={s.center}>
          {/* Navigation сам рендерить desktop-меню інлайн, а мобільне — через портал */}
          <Navigation open={menuOpen} onOpenChange={setMenuOpen} />
        </div>

        <div className={s.right}>
          {/* бургер тільки на мобайлі; ховаємо коли меню відкрито */}
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

          <div className={s.desktopOnly}>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
