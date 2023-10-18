import React, { useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./Properties.css";
const Properties = () => {
  const [filter, setFilter] = useState("");

  return (
    <div className="wrapper">
      <div className="flexColCenter paddings innerWidth properties-container">
        <SearchBar filter={filter} setFilter={setFilter} />

        <div className="paddings flexCenter properties">
          {
            // data.map((card, i)=> (<PropertyCard card={card} key={i}/>))

            data
              .filter(
                (property) =>
                  property.title.toLowerCase().includes(filter.toLowerCase()) ||
                  property.city.toLowerCase().includes(filter.toLowerCase()) ||
                  property.country.toLowerCase().includes(filter.toLowerCase())
              )
              .map((card,i)=> (
                <div key={i}>
                    <div className="flexColStart r-card">
                        <img src={card.image} alt="home" />
                        <span className='secondaryText r-price'>
                            <span style={{color:"orange"}}>$</span><span>{card.price}</span>
                        </span>
                        <span className='primaryText'>{card.name}</span>
                        <span className='primaryText'>{card.detail}</span>
                    </div>
                </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Properties;
