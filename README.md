# Experiencia-Turista
Experiencia Turista, proyecto Jr de desarrollo en React Js

----------------------------
 const card = [
    {
      name: "rafting",
      price:"15",
      img:"r3.jpg",
      description: "esto es una descrpcion de la actividad",
      id: 3,
      addCart:true  
    },
    {
      name: "otor",
      price:"15",
      img:"r3.jpg",
      description: "esto es una descrpcion de la actividad",
      id: 4,
      addCart:false
    },
  ]
  {
    card.map(actividad=>{
    const {name,price,img,description,id}= actividad
    return <PropertyCard 
    name={name}
    img={img}
    price={price}
    description={description}
    key={id}
    id={id}></PropertyCard>})
    
  }


  actividades destacadas
  