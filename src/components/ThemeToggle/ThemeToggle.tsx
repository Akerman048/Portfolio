import s from "./ThemeToggle.module.css"
import { useTheme } from "../../context/ThemeContext";

import sun from "../../assets/themePngs/sun.png";
import moon from "../../assets/themePngs/moon.png";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const isDark = theme === "dark";

  return (
    <button 
      className={s.btn} 
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      <div className={s.iconWrapper}>
        <img className={s.icon} src={sun} alt="light" />
        <img className={`${s.icon} ${s.moon}`} src={moon} alt="dark" />
      </div>
      
      <div className={`${s.thumb} ${isDark ? s.dark : s.bright}`}></div>
    </button>
  );
}
