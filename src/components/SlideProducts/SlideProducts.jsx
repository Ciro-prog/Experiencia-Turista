import React, { useState, useRef } from "react";
import { Slide } from "react-slideshow-image";
import "../SlideProducts/SlideProducts.css";
import "react-slideshow-image/dist/styles.css";
import data from "../../data/hospedajes.json"


const SlideProducts = ({ propertyId }) => {
  
  const slideRef = useRef();
  const [current, setCurrent] = useState(0);

  const back = () => {
    slideRef.current.goBack();
  };

  const next = () => {
    slideRef.current.goNext();
  };

  const properties = {
    duration: 5000,
    autoplay: true,
    transitionDuration: 500,
    arrows: true,
    infinite: true,
    easing: "ease",
    indicators: (i) => <div className="indicator">{i + 1}</div>
  };
  // Encuentra el objeto con id igual a "1"
 const itemWithIdOne = data.find(item => item.id === "1");
// Si el objeto existe, extrae las URLs de las imágenes

const imageUrls = itemWithIdOne ? [
  itemWithIdOne.imagenes,
  itemWithIdOne.imagenes2,
  itemWithIdOne.imagenes3,
  itemWithIdOne.imagenes4
].filter(Boolean) : [];
  console.log(imageUrls)
  

  return (
    <div className="app">
      <div className="slide-container">
      <Slide {...properties}>
        {imageUrls.map((url, index) => (
          <div key={index} className="each-slide">
            <img src={url} alt={`Slide ${index}`} />
          </div>
        ))}
      </Slide>
      </div>
    </div>
  );
};

export default  SlideProducts;
