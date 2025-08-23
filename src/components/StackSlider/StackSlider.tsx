import { useEffect, useState } from "react";

import { Fade, Zoom } from "react-awesome-reveal";

import s from "./StackSlider.module.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";
import BlockTitle from "../BlockTitle/BlockTitle";

export default function StackSlider() {
  const [stackIcons, setStackIcons] = useState<[string, string][]>([]);

  useEffect(() => {
    const fetchStackIcons = async () => {
      const docRef = collection(db, "stackIcons");
      const snapShot = await getDocs(docRef);

      if (!snapShot.empty) {
        const data = snapShot.docs[0].data();
        setStackIcons(Object.entries(data));
      }
    };

    fetchStackIcons();
  }, []);

  return (
    <div className={s.iconsSlider}>
      <Fade direction='up' triggerOnce={false} duration={700}>
        <BlockTitle title='Tech stack' />
      </Fade>
      <ul className={s.stackIcons}>
        {stackIcons.map(([name, url]) => (
          <li className={s.stackIconsWrap} key={name} title={name}>
            <Zoom duration={700} triggerOnce={false}>
              <img className={s.deviconIcon} src={url} alt={name} />
            </Zoom>
          </li>
        ))}
        {stackIcons.map(([name, url]) => (
          <li className={s.stackIconsWrap} key={name + "-copy"} title={name}>
            <img className={s.deviconIcon} src={url} alt={name} />
          </li>
        ))}
      </ul>
    </div>
  );
}
