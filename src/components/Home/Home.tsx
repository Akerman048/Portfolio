import s from "./Home.module.css";

import { Link } from "react-scroll";
import { Typewriter } from "react-simple-typewriter";

import { Fade } from "react-awesome-reveal";

import Lottie from "lottie-react";
import coding from "../../assets/animations/coding.json";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export default function Home() {
  return (
    <section id='home' className={s.wrapper}>
      <div className={s.info}>
        <Fade direction='up' cascade duration={1200} triggerOnce={false}>
          <h2 className={s.title}>
            <span>Frontend</span> <br />
            <span className={s.textGradient}>Developer</span>
          </h2>{" "}
        </Fade>
        <Fade direction='up' duration={1300} triggerOnce={false}>
          {" "}
          <h3 className={s.subtitle}>
            <Typewriter
              words={[
                "Eager to Grow",
                "Learning daily, building constantly.",
                "Design. Code. Learn. Repeat.",
                "Building web experiences one line at a time",
              ]}
              loop={true}
              cursor
              cursorStyle='|'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h3>
        </Fade>
        <Fade direction='up' duration={1600} triggerOnce={false}>
          <p className={s.description}>
            Passionate about pixels, obsessed with progress.
          </p>
        </Fade>

        <Fade direction='up' cascade damping={0.2} triggerOnce={false}>
          <ul className={s.tags}>
            <li className={s.tag}>React</li>
            <li className={s.tag}>JavaScript</li>
            <li className={s.tag}>TypeScript</li>
            <li className={s.tag}>Firebase</li>
          </ul>
        </Fade>
        <Fade
          direction='up'
          duration={1700}
          cascade
          damping={2}
          triggerOnce={false}
        >
          <div className={s.buttons}>
            <Link to='projects' smooth duration={500} className={s.link}>
              Projects{" "}
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className={s.icon}
              />
            </Link>
            <Link
              to='contact'
              smooth={true}
              duration={500}
              className={`${s.link} ${s.secondary}`}
            >
              Contact <FontAwesomeIcon icon={faEnvelope} className={s.icon} />
            </Link>
          </div>
        </Fade>

        <Fade direction='up' cascade damping={0.2} triggerOnce={false}>
          <div className={s.socials}>
            <a href='https://github.com/Akerman048' target='_blank'>
              <FontAwesomeIcon className={s.socialIcon} icon={faGithub} />
            </a>
            <a
              href='https://www.linkedin.com/in/valerii-oleksiienko-b50562330/'
              target='_blank'
            >
              <FontAwesomeIcon className={s.socialIcon} icon={faLinkedinIn} />
            </a>
          </div>
        </Fade>
      </div>
      <Fade direction='up' cascade damping={0.18} triggerOnce={false}>
        <div className={s.animation}>
          <Lottie
            animationData={coding}
            loop={true}
            style={{ width: "100%", maxWidth: "500px", height: "auto" }}
          />
        </div>
      </Fade>
    </section>
  );
}
