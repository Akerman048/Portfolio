import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import * as THREE from "three";
import FOG from "vanta/dist/vanta.fog.min";
import { useTheme } from "../../context/ThemeContext";

export default function VantaFog() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [vanta, setVanta] = useState<any>(null);
  const { theme } = useTheme();

  useEffect(() => {
    if (!ref.current) return;

    // знищуємо попередній інстанс
    vanta?.destroy?.();

    const effect = FOG({
      el: ref.current,
      THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200,
      minWidth: 200,
      highlightColor: theme === "light" ? 0xbcc3ff : 0x3b0787,
      midtoneColor:  theme === "light" ? 0xbee8ff : 0x050950, // виправлений hex
      lowlightColor: theme === "light" ? 0xa0a0ff : 0x2f045f,
      baseColor:     theme === "light" ? 0xffffff : 0x000000,
      blurFactor: 0.62,
      speed: 1.7,
    });
    setVanta(effect);

    const onResize = () => effect?.resize?.();

    // слухачі для всіх кейсів мобільного viewport’а
    window.addEventListener("resize", onResize);
    window.addEventListener("orientationchange", onResize);
    const vv = (window as any).visualViewport;
    vv?.addEventListener("resize", onResize);
    vv?.addEventListener("scroll", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("orientationchange", onResize);
      vv?.removeEventListener("resize", onResize);
      vv?.removeEventListener("scroll", onResize);
      effect.destroy();
    };
  }, [theme]); // оновлюємо при зміні теми

  // МОНТУЄМО ПРЯМО В <body>, щоб жоден предок не «ламав» fixed
  return createPortal(
    <div
    ref={ref}
    style={{
      position: "fixed",
      inset: 0,            // покриває весь в’юпорт
      pointerEvents: "none",
      overflow: "hidden",
      zIndex: 0,
      }}
    />,
    document.body
  );
}
