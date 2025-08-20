import s from "./Navigation.module.css";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";

export default function Navigation() {
  const { pathname } = useLocation();
  const onHome = pathname === "/";

  const Item = ({ to, label }: { to: string; label: string }) =>
    onHome ? (
      <ScrollLink className={s.link} to={to} smooth duration={500} offset={-80}>
        {label}
      </ScrollLink>
    ) : (
      // передаємо цільову секцію через state
      <RouterLink className={s.link} to="/" state={{ scrollTo: to }}>
        {label}
      </RouterLink>
    );

  return (
    <ul className={s.links}>
      <li><Item to="home" label="Home" /></li>
      <li><Item to="about" label="About" /></li>
      <li><Item to="projects" label="Portfolio" /></li>
      <li><Item to="contact" label="Contact" /></li>
    </ul>
  );
}
