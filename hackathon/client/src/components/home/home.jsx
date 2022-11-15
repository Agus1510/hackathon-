import React from "react";
import style from "./home.module.css";
import { RiSeparator } from "react-icons/ri";
import { useCallback } from "react";
import {
  IoChevronDownOutline,
  IoSearchSharp,
  IoLogoInstagram,
  IoPhonePortraitOutline,
} from "react-icons/io5";
function Home() {
  return (
    <div className={style.home}>
      <div className={style.container} id="home">
        <div className={style.flexContainer}>
          <img src="PRUEBA.png"></img>
        </div>
      </div>
    </div>
  );
}

export default Home;
