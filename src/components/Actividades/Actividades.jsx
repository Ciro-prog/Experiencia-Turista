import React from 'react'
import{Swiper, SwiperSlide, useSwiper} from 'swiper/react'
import 'swiper/css'
import { Link } from 'react-router-dom'
import './Actividades.css'
import data from '../../utils/slider.json'
import { sliderSettings } from '../../utils/common'
import {GrFormNext,GrFormPrevious} from "react-icons/gr"

const Actividades = () => {
  return (
    <div id="residencies" className="r-wrapper">
    <div className="paddings innerWidth r-container">
      <div className="flexColStart r-head">
        <span className="orangeText">Actividades</span>
        <span className="primaryText">Recomendadas este mes</span>
      </div>

            <Swiper 
                
                 {...sliderSettings}
            >
                <SliderButtons/>
                {
                    data.map((card,i)=> (
                        <SwiperSlide key={i}>
                            <div className="flexColStart r-card">
                                <img src={card.image} alt="home" />
                                <span className='secondaryText r-price'>
                                    <span style={{color:"orange"}}>$</span><span>{card.price}</span>
                                </span>
                                <span className='primaryText'>{card.name}</span>
                                <span className='primaryText'>{card.detail}</span>
                                <Link to={`/hospedajes/${card.id}`}>
                                <button>
                                    
                                </button>
                                </Link>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>

    </div>
    )
}

export default Actividades

const SliderButtons =()=>{
    const Swiper = useSwiper()
    return(
    <div className="flexCenter r-button">
        <button onClick={()=> Swiper.slidePrev()}><GrFormPrevious className='flexCenter' color='var(--pink-logo)'/></button>
        <button onClick={()=> Swiper.slideNext()}><GrFormNext className='flexCenter 'color='blue    '/></button>     
    </div>
    )
}
