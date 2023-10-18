import React from "react";
import "./Hero.css";
import { AiOutlineSearch } from "react-icons/ai";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container ">
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="circle-title">
              <img src="./circle-logo.png" alt="" />
            </div>
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: "ease-in",
              }}
            >
              Experiencia <br /> Turista
            </motion.h1>
          </div>
          <div className=" flexColStart hero-des">
            <span className="secondaryText">
              Tu Experiencia, nuestro camino
            </span>
            <span className="secondaryText">
              Creamos de tu tiempo, un recuerdo unico
            </span>
          </div>
          <div className="flexCenter search-bar">
            <AiOutlineSearch color="var(--pink-logo)" size={25} />
            <input type="text" />
            <button className="button">Buscar</button>
          </div>
          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={850} end={900} duration={3} />
                <span>+</span>
              </span>
              <span className="secondaryText">Actividades</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp start={0} end={10} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Bodegas</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp start={0} end={35} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">otra cosa</span>
            </div>
          </div>
        </div>
        <div className="flexCenter hero-rigth">
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
            className="image-container"
          >
            <img src="./hero-image.jpg" alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
