import React, { useState } from "react";
import s from "./Contact.module.css";

import { Fade, Zoom } from "react-awesome-reveal";

import emailjs from "@emailjs/browser";

import { GrContact } from "react-icons/gr";
import { FiSend } from "react-icons/fi";

import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const SERVICE_ID = "service_evsriv6";
const TEMPLATE_ID = "template_b2glhrn";
const PUBLIC_KEY = "JDfwAdPCkSBVg9QFC";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">(
    "idle"
  );
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setError("");

    try {
      const res = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        { publicKey: PUBLIC_KEY }
      );

      if (res.status != 200) throw new Error("EmailJs failed");
      setStatus("ok");
      setFormData({ name: "", email: "", message: "" });
    } catch (err: any) {
      setStatus("error");
      setError(err.message || "Failed to send");
    }
  };
  return (
    <section id='contact' className={s.contact}>
      <div className={s.contact__wrap}>
        <form className={s.contact__form} onSubmit={sendEmail}>
          <div className={s.h}>
            <Fade direction='up' triggerOnce={false} duration={700}>
              {" "}
              <h3 className={s.contact__formtitle}>
                Contact me <GrContact className={s.contact__formTitleIcon} />
              </h3>
            </Fade>
            <Fade direction='up' triggerOnce={false} duration={700}>
              <p className={s.contact__formSubTitle}>
                Anything you'd like to discuss? Send me a message and let's
                talk.
              </p>
            </Fade>
          </div>
          <input
            id='formName'
            className={s.contact__formField}
            name='name'
            placeholder='Name'
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            id='formEmail'
            className={s.contact__formField}
            name='email'
            type='email'
            placeholder='Email'
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            id='formMessage'
            className={s.contact__formField}
            name='message'
            placeholder='Message'
            value={formData.message}
            onChange={handleChange}
            required
          />
          <Zoom duration={800} triggerOnce={false}>
            {" "}
            <button className={s.contact__submit} type='submit'>
              <FiSend className={s.contact__submitIcon} />
              {status === "sending" ? "Sending..." : "Send"}
            </button>
          </Zoom>
          {status === "ok" && <p style={{ color: "green" }}>Message sent ✅</p>}
          {status === "error" && (
            <p style={{ color: "crimson" }}>Error: {error}</p>
          )}
        </form>

        <div className={s.contact__socials}>
          <Fade direction='down' cascade duration={1200} triggerOnce={false}>
            <h4 className={s.contact__socialsTitle}> Connect With Me</h4>
          </Fade>

          <Fade direction='up' cascade duration={1200} triggerOnce={false}>
            {" "}
            <a
              href='https://www.linkedin.com/in/valerii-oleksiienko-b50562330/'
              className={`${s.contact__lnkdnWrap} ${s.contact__socialLink}`}
              target='_blank'
            >
              <FaLinkedinIn
                className={`${s.contact__socialIcon} ${s.contact__socialLnkd}`}
              />{" "}
              <p className={s.contact_paragraph}>
                {" "}
                Let's Connect <span>on LinkedIn</span>{" "}
              </p>
            </a>
          </Fade>

          <div className={s.socilaBlockWrap}>
            <Fade
              direction='up'
              duration={1200}
              triggerOnce={false}
              className={s.revealFlex}
            >
              <a
                href='https://www.linkedin.com/in/valerii-oleksiienko-b50562330/'
                className={`${s.contact_Link} ${s.contact__socialLink} ${s.contact__gitHubWrap}`}
                target='_blank'
              >
                <FaGithub
                  className={`${s.contact__socialIcon} ${s.contact__gitHub}`}
                />
                <p className={s.contact_paragraph}>
                  GitHub <span>@Akerman048</span>
                </p>
              </a>
            </Fade>
            <Fade
              direction='up'
              duration={1200}
              triggerOnce={false}
              className={s.revealFlex}
            >
              <a
                href='https://www.instagram.com/akerman.048/'
                className={`${s.contact_Link} ${s.contact__socialLink} ${s.contact__instWrap}`}
                target='_blank'
              >
                <FaInstagram
                  className={`${s.contact__socialIcon} ${s.contact__inst}`}
                />
                <p className={s.contact_paragraph}>
                  Instagram <span>@Akerman.048</span>
                </p>
              </a>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
}
