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
          <img src="flag.jpg" />
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#f3f4f5"
              fill-opacity="1"
              d="M0,160L240,96L480,32L720,96L960,160L1200,32L1440,192L1440,320L1200,320L960,320L720,320L480,320L240,320L0,320Z"
            ></path>
          </svg>
        </div>
        <div className={style.pages}>
          <div className={style.page}>
            <img src="PRUEBA.png" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
