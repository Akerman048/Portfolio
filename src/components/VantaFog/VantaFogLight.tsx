import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import FOG from "vanta/dist/vanta.fog.min";
import { useTheme } from "../../context/ThemeContext"; // імпорт контексту

const VantaFog = () => {
  const ref = useRef(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const { theme } = useTheme(); // витягуємо тему

  useEffect(() => {
    // Очистити попередній ефект
    if (vantaEffect) {
      vantaEffect.destroy();
      setVantaEffect(null);
    }

    if (ref.current) {
      const effect = FOG({
        el: ref.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200,
        minWidth: 200,
        highlightColor: theme === "light" ? 0xbcc3ff : 0x3b0787,
        midtoneColor: theme === "light" ? 0xbee8ff : 0x50950,
        lowlightColor: theme === "light" ? 0xa0a0ff : 0x2f045f,
        baseColor: theme === "light" ? 0xffffff : 0x0,
        blurFactor: 0.62,
        speed: 1.7,
      });

      setVantaEffect(effect);
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [theme]); // <-- додали theme як залежність

  return (
    <div
      ref={ref}
      style={{
        width: "100%",
        height: "100%",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
      }}
    ></div>
  );
};

export default VantaFog;
