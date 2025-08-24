import { Fade, Slide, Zoom } from "react-awesome-reveal";

import s from "./About.module.css";
import BlockTitle from "../BlockTitle/BlockTitle";

import avatar from "../../assets/avatar/photo_2025-07-26_22-12-23.jpg";

import { LuSparkles } from "react-icons/lu";

import { IoDocumentTextOutline } from "react-icons/io5";
import { FaCode } from "react-icons/fa6";
import WhatCanIDo from "../WhatCanIDo/WhatCanIDo";
import { useEffect, useState } from "react";

const detailsData = [
  { icon: "👨🏻", text: "29 years old" },
  {
    icon: (
      <img
        src='https://em-content.zobj.net/thumbs/120/apple/354/flag-ukraine_1f1fa-1f1e6.png'
        alt='Ukrainian flag'
        width={24}
        height={24}
      />
    ),
    text: "Ukraine",
  },
  {
    icon: (
      <>
        <img
          src='https://em-content.zobj.net/thumbs/120/apple/354/flag-ukraine_1f1fa-1f1e6.png'
          alt='UA'
          width={24}
        />
        <img
          src='https://em-content.zobj.net/thumbs/120/apple/354/flag-united-kingdom_1f1ec-1f1e7.png'
          alt='UK'
          width={24}
        />
        <img
          src='https://em-content.zobj.net/thumbs/120/apple/354/flag-poland_1f1f5-1f1f1.png'
          alt='PL'
          width={24}
        />
        <img
          src='https://em-content.zobj.net/thumbs/120/apple/354/flag-russia_1f1f7-1f1fa.png'
          alt='RU'
          width={24}
        />
        <img
          src='https://em-content.zobj.net/thumbs/120/apple/354/flag-spain_1f1ea-1f1f8.png'
          alt='ES'
          width={24}
        />
      </>
    ),
    text: "Languages",
  },
  { icon: "📍", text: "Based in Reykjavik, Iceland" },
  { icon: "🎓", text: "ONU Mechnikov" },
  { icon: "🌍🧑‍💻", text: "Freelancer / Looking for a job" },
  { icon: "⏳🚀", text: "1.5 years" },
  { icon: "⚽️🥊🏀🎮🎬✈️🏋🏻‍♂️", text: "Hobbies" },
  { icon: "💻🛠️", text: "9+ Projects" },
];

export default function About() {
  const [,setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % detailsData.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);



  return (
    <section id='about' className={s.wrap}>
      <div className={s.titleWrap}>
        <Zoom duration={800} triggerOnce={false}>
          {" "}
          <BlockTitle title='About me' />
        </Zoom>
        <Fade direction='up' triggerOnce={false} duration={700}>
          <p className={s.subTitle}>
            {" "}
            <LuSparkles className={s.subIcon} />
            Translating ideas into impact <LuSparkles className={s.subIcon} />
          </p>
        </Fade>
      </div>
      <div className={s.contentWrap}>
        <div className={s.infoWrap}>
          <Slide direction='left' triggerOnce={false} duration={1100}>
            <h3 className={s.introduction}>
              Hello <span>👋</span>, I'm <br />
              Valerii Oleksiienko
            </h3>{" "}
          </Slide>

          <Slide direction='left' triggerOnce={false} duration={1100}>
            <p className={s.shortDescr}>
              A frontend developer who never stops progressing. I am focused on
              creating engaging digital experiences and always strive to offer
              the best solutions in every project.
            </p>
          </Slide>

          <div className={s.buttons}>
            <Fade direction='up' cascade damping={0.18} triggerOnce={false}>
              <a
                href='/cv/Valerii_Oleksiienko_CV.pdf'
                className={`${s.button} ${s.primary}`}
                download
              >
                <IoDocumentTextOutline className={s.icon} />
                Download CV
              </a>
              <a href='/#projects' className={`${s.button} ${s.secondary}`}>
                <FaCode className={s.icon} />
                View projects
              </a>
            </Fade>
          </div>
        </div>

        {/* AVATAR */}

        <Fade direction='right' cascade damping={0.18} triggerOnce={false}>
          {" "}
          <div className={s.avatarWrap}>
            <div className={s.avatar}>
              <img src={avatar} alt='profile avatar' />
            </div>
          </div>
        </Fade>
      </div>

      {/* DETAILS */}
      <ul className={s.details}>
        <Slide direction='up' cascade damping={0.09} triggerOnce={false}>
          <li className={s.detailsItem}>
            <span>👨🏻</span>29 years old
          </li>
          <li className={s.detailsItem}>
            <span>
              <img
                src='https://em-content.zobj.net/thumbs/120/apple/354/flag-ukraine_1f1fa-1f1e6.png'
                alt='Ukrainian flag'
                width={24}
                height={24}
              />
            </span>{" "}
            Ukraine
          </li>
          <li className={s.detailsItem}>
            <span>
              <img
                src='https://em-content.zobj.net/thumbs/120/apple/354/flag-ukraine_1f1fa-1f1e6.png'
                alt='Ukrainian flag'
                width={24}
                height={24}
              />
              <img
                src='https://em-content.zobj.net/thumbs/120/apple/354/flag-united-kingdom_1f1ec-1f1e7.png'
                alt='United Kingdom flag'
                width={24}
                height={24}
              />
              <img
                src='https://em-content.zobj.net/thumbs/120/apple/354/flag-poland_1f1f5-1f1f1.png'
                alt='Polish flag'
                width={24}
                height={24}
              />
              <img
                src='https://em-content.zobj.net/thumbs/120/apple/354/flag-russia_1f1f7-1f1fa.png'
                alt='russian flag'
                width={24}
                height={24}
              />{" "}
              <img
                src='https://em-content.zobj.net/thumbs/120/apple/354/flag-spain_1f1ea-1f1f8.png'
                alt='Spanish flag'
                width={24}
                height={24}
              />
            </span>
            Languages
          </li>
          <li className={s.detailsItem}>
            <span>📍</span>Based in Reykjavik, Iceland
          </li>
          <li className={s.detailsItem}>
            <span>🎓</span>ONU Mechnikov
          </li>
          <li className={s.detailsItem}>
            <span>🌍🧑‍💻</span>Freelancer / Looking for a job
          </li>
          <li className={s.detailsItem}>
            <span>⏳🚀</span>1,5 years
          </li>
          <li className={s.detailsItem}>
            <span>⚽️🥊🏀🎮🎬✈️🏋🏻‍♂️</span>Hobbies
          </li>
          <li className={s.detailsItem}>
            <span>💻🛠️</span>9+ Projects
          </li>
        </Slide>
      </ul>
      <WhatCanIDo />
    </section>
  );
}
