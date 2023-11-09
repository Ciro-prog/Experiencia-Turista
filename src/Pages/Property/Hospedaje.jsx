import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { PuffLoader } from "react-spinners";
import { AiFillHeart } from "react-icons/ai";
import "./Hospedaje.css";
import { FaShower } from "react-icons/fa";
import { AiTwotoneCar } from "react-icons/ai";
import { MdLocationPin, MdMeetingRoom } from "react-icons/md";
import Map from "../../components/Map/Map";
import { Button } from "@mantine/core";
import Heart from "../../components/Heart/Heart";
import useHospedajes from "../../hooks/useProperties";
import { useLocation } from "react-router-dom";
import SlideProducts from "../../components/SlideProducts/SlideProducts";

const Hospedaje = () => {
  const { propertyId } = useParams(); // Suponiendo que estás usando react-router-dom
  const { data, isLoading, isError } = useHospedajes(propertyId);
  console.log(propertyId);
  console.log(data);
  if (isLoading) {
    return <div>Cargando...</div>;
  }

  if (isError) {
    return <div>Error al cargar los datos del hospedaje.</div>;
  }

  // Si no encuentras la propiedad, puedes manejar el error como prefieras

  return (
    <div>
      {data[propertyId] ? (
        <div className="flexColStart paddings innerWidth property-container">
          {/* Renderiza la información de hospedaje aquí */}
          <div className="like">
          <Heart id={propertyId}/>
        </div>
{/*         <SlideProducts propertyId={propertyId}/>
 */}        <img src={data[propertyId]?.imagenes} alt="home image" />
        {console.log(data[propertyId]?.imagenes)}
        <div className="flexCenter property-details">
        <div className="flexStart head">
              <span className="primaryText">{data[propertyId]?.name}</span>
              <span className="orangeText" style={{ fontSize: "1.5rem" }}>
                $ {data[propertyId]?.precio}
              </span>
            </div>
                 {/* facilities */}
                 <div className="facilities">
              {/* bathrooms */}
              <div className="flexStart facility">
                <FaShower size={20} color="#1F3E72" />
                <span>{data[propertyId]?.facilities?.tiempo} Tiempo</span>
              </div>

              {/* parkings */}
              <div className="flexStart facility">
                <AiTwotoneCar size={20} color="#1F3E72" />
                <span>{data[propertyId]?.facilities.edad}  Edad mínima</span>
              </div>

              {/* rooms */}
              <div className="flexStart facility">
                <MdMeetingRoom size={20} color="#1F3E72" />
                <span>{data[propertyId]?.facilities.distancia} Recorrido</span>
              </div>
            </div>
              {/* description */}

              <span className="secondaryText" style={{ textAlign: "justify" }}>
              {data[propertyId]?.detalle}
            </span>

            {/* address */}

            <div className="flexStart" style={{ gap: "1rem" }}>
              <MdLocationPin size={25} />
              <span className="secondaryText">
                {data[propertyId]?.address}{" "}
                {data[propertyId]?.city}{" "}
                {data[propertyId]?.country}
              </span>
            </div>
            <button
                className="button"
              >
                Agregar Actividad al carrito
              </button>
        </div>

        </div>
      ) : (
        <div>Hospedaje no encontrado.</div>
      )}
    </div>
  );
};

export default Hospedaje;
