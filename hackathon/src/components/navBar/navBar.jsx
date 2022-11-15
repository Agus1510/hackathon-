import React from "react";
import style from "./navBar.module.css";

function NavBar() {
  return (
    <div className={style.flexContainer}>
      <div className={style.logoContainer}>
        <img src="logo.webp" />
        <p>Grupos Electrógenos</p>
      </div>
      <div className={style.buttonsContainer}>
        <button>INICIO</button>
        <button>TIENDA</button>
        <button>SERVICIOS</button>
        <button>NOSOTROS</button>
        <button>OTROS PRODUCTOS</button>
        <button>CONTACTO</button>
      </div>
    </div>
  );
}

export default NavBar;
