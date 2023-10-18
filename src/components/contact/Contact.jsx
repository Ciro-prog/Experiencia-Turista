import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import {IoLogoWhatsapp} from 'react-icons/io'
import {FaLocationDot} from 'react-icons/fa6'

const Contact = () => {
  return (
    <div id="contact-us" className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* left side */}
        <div className="flexColStart c-left">
          <span className="orangeText">Nuestros Contactos</span>
          <span className="primaryText">Consultanos</span>
          <span className="secondaryText">
          "Explora, descansa y sumérgete en experiencias inolvidables con nosotros."
          </span>

          <div className="flexColStart contactModes">
            {/* first row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Llamar</span>
                    <span className="secondaryText">2604806017</span>
                  </div>
                </div>
                <div className="flexCenter button">Llamar Ahora</div>
              </div>

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <IoLogoWhatsapp size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Whasapp</span>
                    <span className="secondaryText">2604806017</span>
                  </div>
                </div>
                <div className="flexCenter button">Escríbenos</div>
              </div>
            </div>

            {/* second row */}
            <div className="flexStart row">
        

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <FaLocationDot size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Ubicacion</span>
                    <span className="secondaryText">San Rafael</span>
                  </div>
                </div>
                <div className="flexCenter button">Ir ahora</div>
              </div>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flexEnd c-right">
          <div className="image-container">
            <img src="./contact.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
