import React from "react";
import './PropertyCard.css'
import {AiFillHeart} from 'react-icons/ai'
import {truncate} from 'lodash'
import { useNavigate } from "react-router-dom";
import Heart from "../Heart/Heart";
const PropertyCard = ({card}) => {

  const navigate = useNavigate();
  return (
    <div className="flexColStart r-card"
    onClick={()=>navigate(`../hospedajes/${card.id}`)}
    >
      <Heart id={card?.id}/>
      <img src={card.imagenes} alt="home" />
      <span className="secondaryText r-price">
        <span style={{ color: "orange" }}>$</span>
        <span>{card.precio}</span>
      </span>
      <span className="primaryText">{truncate(card.name, {length: 15})}</span>
      <span className="secondaryText">{truncate(card.detalle, {length: 80})}</span>
    </div>
  );
};

export default PropertyCard;

