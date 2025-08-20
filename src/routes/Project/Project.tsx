// components/Project/Project.jsx
import { useParams, Link } from "react-router-dom";
import projects from "../../data/projects.json";
import s from "./Project.module.css";

import { IoCodeSlashOutline } from "react-icons/io5";
import { MdOpenInNew } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

export default function Project() {
  const { id } = useParams();
  const project = projects.find((p) => String(p.id) === String(id));

  if (!project) {
    return (
      <div className={s.wrap}>
        <p>Project not found.</p>
        <Link to='/'>← Back to portfolio</Link>
      </div>
    );
  }

  return (
    <article className={s.project__wrap}>
      <Link className={s.project__back} to='/'>
        ← Back
      </Link>
      <div className={s.project__contentWrap}>
        <div className={s.project__contentWrapLeft}>
          <h1 className={s.project__title}>{project.title}</h1>
          <span>{project.year}</span>
          <p className={s.project__descr}>{project.description}</p>

          <h5 className={s.project__technoTitle}>
            <IoCodeSlashOutline className={s.project__technoIcon} />
            Technologies Used
          </h5>
          <ul className={s.project__technologies}>
            {project.technologies.map((techno) => (
              <li key={techno} className={s.project__techno}>
                {techno}
              </li>
            ))}
          </ul>
        </div>{" "}
        <div className={s.project__contentWrapRight}>
          {" "}
          <div className={s.project__coverWrap}>
            <img
             src={`${import.meta.env.BASE_URL}${project.cover}`}
              alt={project.title}
              className={s.project__cover}
            />
          </div>
          <div className={s.project__linksWrap}>
            <a className={s.project__link} href={project.links.link} target="_blank">
              <MdOpenInNew />
              Live demo
            </a>{" "}
            <a className={s.project__link} href={project.links.repo} target="_blank">
              <FaGithub />
              Github
            </a>
          </div>
        </div>
        <div className={s.project__contentWrapBottom}>
          {" "}
          <h5 className={s.project__keyFeaturesTitle}>
            <FaRegStar className={s.project__keyFeaturesIcon} />
            Key Features
          </h5>
          <ul className={s.project__keyFeaturesList}>
            {project.keyFeatures?.map((keyFeature) => (
              <li className={s.project__keyFeature}>{keyFeature}</li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
