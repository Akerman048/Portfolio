import  { useState } from "react";
import s from "./WhatCanIDo.module.css";

import { Fade } from "react-awesome-reveal";

import { IoCodeSlashOutline, IoBagCheckOutline } from "react-icons/io5";
import { LuLaptopMinimalCheck } from "react-icons/lu";
import { BsLightningCharge } from "react-icons/bs";
import { HiOutlineSupport } from "react-icons/hi";
import { MdOutlinePhonelink } from "react-icons/md";

export default function WhatCanIDo() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className={s.wrap}>
      <Fade triggerOnce={false}   duration={1800}><button className={s.btn} onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide what I can do" : "What can I do?"}
      </button></Fade>

      <div className={`${s.items} ${isVisible ? s.visible : s.hidden}`}>
        <div className={s.item}>
          <h5 className={s.title}>
            <IoCodeSlashOutline className={s.icon} /> Clean code
          </h5>
          <p>
            Writing code that is well-structured, readable, and maintainable —
            following best practices and consistent standards.
          </p>
        </div>

        <div className={s.item}>
          <h5 className={s.title}>
            <BsLightningCharge className={s.icon} /> Performance
          </h5>
          <p>
            Optimizing assets and code for fast load times and smooth
            interaction.
          </p>
        </div>

        <div className={s.item}>
          <h5 className={s.title}>
            <LuLaptopMinimalCheck className={s.icon} /> User interface
          </h5>
          <p>
            Designing intuitive and user-friendly interfaces with a focus on
            usability, accessibility, and visual clarity.
          </p>
        </div>

        <div className={s.item}>
          <h5 className={s.title}>
            <MdOutlinePhonelink className={s.icon} /> Responsive design
          </h5>
          <p>
            Making apps work flawlessly across all devices and screen sizes.
          </p>
        </div>

        <div className={s.item}>
          <h5 className={s.title}>
            <IoBagCheckOutline className={s.icon} /> User experience
          </h5>
          <p>
            Understanding user behavior and needs to craft efficient, engaging,
            and seamless digital experiences.
          </p>
        </div>

        <div className={s.item}>
          <h5 className={s.title}>
            <HiOutlineSupport className={s.icon} /> Fast support
          </h5>
          <p>
            Quickly addressing user feedback and resolving technical issues to
            ensure smooth product operation.
          </p>
        </div>
      </div>
    </div>
  );
}
