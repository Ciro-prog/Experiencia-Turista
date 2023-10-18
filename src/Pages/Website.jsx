import React from 'react'
import Hero from '../components/hero/Hero';
import Companies from '../components/companies/companies';
import Contact from "../components/contact/Contact";
import Actividades from '../components/Actividades/Actividades';
import Hospedaje from '../components/Hospedajes/Hospedaje';


const Website = () => {
  return (
    <div className="App">
    <div>
      <div className="white-gradient" />
      <Hero />
    </div>
    <Companies />
    <Actividades/>
    <Hospedaje/>
    <Contact/>
  </div>
  )
}

export default Website