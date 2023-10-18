import React, { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import { getMenuStyles } from "../utils/common";
import OutsideClickHandler from "react-outside-click-handler";

const Header = () => {
    const [menuOpened, setMenuOpened] = useState(false);


  return (
    <section className="h-wrapper" >
    <div className="flexCenter innerWidth paddings h-container">
      {/* logo */}
      
        <img src="./logo-final.png" alt="logo" width={70} />


      {/* menu */}
      <OutsideClickHandler
        onOutsideClick={() => {
          setMenuOpened(false);
        }}  
      >
        <div
          // ref={menuRef}
          className="flexCenter h-menu"
          style={getMenuStyles(menuOpened)}
        >
          <a href="/">Alquileres</a>

          <a href="mailto:metralciro@gmail.com">Contacto</a>

          {/* add property */}
          <div>Actividades</div>
         
          {/* login button */}
          
            <button className="button" >
              Login
            </button>
          
        </div>
      </OutsideClickHandler>

      {/* for medium and small screens */}
      <div
        className="menu-icon"
        onClick={() => setMenuOpened((prev) => !prev)}
      >
        <BiMenuAltRight size={30} />
      </div>
    </div>
  </section>
);
};

export default Header;

