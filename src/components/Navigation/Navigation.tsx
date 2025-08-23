import { useEffect } from "react";
import { createPortal } from "react-dom";
import s from "./Navigation.module.css";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export default function Navigation({ open, onOpenChange }: Props) {
  const { pathname } = useLocation();
  const onHome = pathname === "/";

  const Item = ({ to, label }: { to: string; label: string }) =>
    onHome ? (
      <ScrollLink className={s.link} to={to} smooth duration={500} offset={-80}
                  onClick={() => onOpenChange(false)}>{label}</ScrollLink>
    ) : (
      <RouterLink className={s.link} to="/" state={{ scrollTo: to }}
                  onClick={() => onOpenChange(false)}>{label}</RouterLink>
    );

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Портал: рендеримо мобільне меню у <body>
  return (
    <>
      {/* (опційно) тут можна залишити десктопне горизонтальне меню */}
      {createPortal(
        <div
          className={`${s.overlay} ${open ? s.show : ""}`}
          aria-hidden={!open}
          onClick={() => onOpenChange(false)}
        >
          <div className={s.sheet} onClick={(e) => e.stopPropagation()}>
            <div className={s.drawerTop}>
              <button className={s.closeButton} aria-label="Close menu"
                      onClick={() => onOpenChange(false)}>✕</button>
              <ThemeToggle />
            </div>

            <ul className={s.menu} id="main-menu">
              <li><Item to="home" label="Home" /></li>
              <li><Item to="about" label="About" /></li>
              <li><Item to="projects" label="Portfolio" /></li>
              <li><Item to="contact" label="Contact" /></li>
            </ul>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
