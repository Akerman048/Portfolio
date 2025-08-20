
import { Fade, Zoom } from "react-awesome-reveal";
import BlockTitle from "../BlockTitle/BlockTitle";
import s from "./Projects.module.css";
import projects from "../../data/projects.json";
import { IoMdOpen } from "react-icons/io";
import { Link } from "react-router-dom";


export default function Projects() {
  return (
    <section id="projects" className={s.projects}>
      <Fade direction="up" cascade duration={1200} triggerOnce={false}>
        <BlockTitle title="Portfolio Showcase" />
      </Fade>
      <Fade direction="up" cascade duration={1200} triggerOnce={false}>
        <p className={s.projects__subtitle}>
          Explore my journey through a collection of projects, each reflecting a
          step forward in my growth as a developer.
        </p>
      </Fade>

      <div className={s.projects__grid}>
        {projects.map((project, idx) => {
         
          return (
            <Zoom
              key={project.id}
              delay={idx * 200}
              triggerOnce={false}
              duration={500}
            
              fraction={0}
            >
              <div className={s.projects__item}>
                <div className={s.imageContainer}>
                  <img
                    src={project.cover}
                    className={s.projects__image}
                    alt={project.title}
                    loading="lazy"
                  />
                </div>

                <h4 className={s.projects__title}>{project.title}</h4>

                <p className={s.projects__descr}>
                  {project.description.slice(0, 100)}...
                </p>

                <div className={s.projects__linksWrap}>
                  <a
                    href={project.links.link}
                    className={s.projects__link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open link <IoMdOpen />
                  </a>
                  <Link
                    to={`/projects/${String(project.id)}`}
                    className={s.projects__openDetails}
                  >
                    Open details
                  </Link>
                </div>
              </div>
            </Zoom>
          );
        })}
      </div>
    </section>
  );
}
