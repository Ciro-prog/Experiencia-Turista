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

const Hospedaje = () => {
    const { propertyId } = useParams(); // Suponiendo que estás usando react-router-dom
    const { data, isLoading, isError } = useHospedajes(propertyId);
  console.log(propertyId)
  console.log(propertyId.data.name)
    if (isLoading) {
      return <div>Cargando...</div>;
    }
  
    if (isError) {
      return <div>Error al cargar los datos del hospedaje.</div>;
    }

  // Si no encuentras la propiedad, puedes manejar el error como prefieras


  return (
    <div>
      {data ? (
        <div>
          {/* Renderiza la información de hospedaje aquí */}
          <h1>{data.name}</h1>
          {/* otros detalles */}
          {console.log(data.name)}
        </div>
      ) : (
        <div>Hospedaje no encontrado.</div>
      )}
    </div>
  );
};

export default Hospedaje;
