import React, { useState, useEffect } from "react";
import styles from "./about.module.scss";

import pic1 from "../../assets/me/webp/pic1.webp";
import pic2 from "../../assets/me/webp/pic2.webp";
import pic3 from "../../assets/me/webp/pic3.webp";


const photos = [pic1, pic2, pic3];

const About= () => {
  const [photo, setPhoto] = useState("");

  useEffect(() => {
    const randomPhoto = photos[Math.floor(Math.random() * photos.length)];
    setPhoto(randomPhoto);
  }, []);

  return (
      <div className={styles['about-container']} id="about">
        <section className={styles['about-intro']}>
          <div className={styles['about-text']}>
            <h2 className={styles['about-title']}>About Me</h2>
            <p>
              Hey there! I’m <span className={"text-primary"}>Morten Ghafarnia</span>,
              though if you see <i>Mohammad</i> somewhere, that’s me too (our little secret).
              I’m a passionate <span className={"text-primary"}>Frontend Developer</span>{" "}
              with over 6 years of experience building modern, fast, and intuitive web applications.
              Most recently, I’ve been working as a{" "}
              <span className={"text-primary"}>
          Senior Frontend Engineer at{" "}
                <a
                    href="https://asax.ir/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "inherit", textDecoration: "underline" }}
                >
            Asa
          </a>
        </span>
              , and previously collaborated with great teams at{" "}
              <span className={"text-primary"}>Kilid</span>,{" "}
              <span className={"text-primary"}>Esafar</span>, and{" "}
              <span className={"text-primary"}>Quarterback</span>.
            </p>
            <p>
              I specialize in frameworks like{" "}
              <span className={"text-primary"}>Angular, React, and Next.js</span>,
              and I’m currently expanding my stack with{" "}
              <span className={"text-primary"}>Node.js</span> to strengthen my
                <span className={"text-primary"}> full-stack </span> abilities. I love solving challenges around performance,
              modularity, and clean architecture — crafting interfaces that not only
              look good but also feel great to use. I’m a quick learner who thrives in
              fast-paced environments, always excited to pick up new tools and
              techniques to deliver high-quality products.
            </p>
            <p>
              Outside of coding, When I’m not experimenting with{" "}
                <span className={"text-primary"}>
                    Coding
                </span>{" "}
                 or design
              ideas, you can find me learning, travelling, or just chasing good coffee
              and inspiration. If you’d like to connect or see my work, visit{" "}
              <a
                  href="https://mognia.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "underline" }}
              >
                mognia.dev
              </a>{" "}
              or reach out on{" "}
              <a
                  href="https://www.linkedin.com/in/morten-ghafarnia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
              >
                LinkedIn
              </a>{" "}
              and{" "}
              <a
                  href="https://github.com/mognia"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
              >
                GitHub
              </a>
              .
            </p>
          </div>
          <div className={styles['about-photo']}>
            <img src={photo} alt="Morten Ghafarnia" />
          </div>
        </section>
      </div>

  );
};

export default About;
