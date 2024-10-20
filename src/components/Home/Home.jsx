import React, { useEffect } from "react";
import styles from "./Home.module.css";
// import bgimg from "../../images/1338700 (1).png";
import wave from "../../images/wp3469892.webp";
import $ from "jquery";
import Navbar from "../Navbar/Navbar";
import BG from "../bg/BG";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
    $("body").css("overflow", "hidden");
  });

  return (
    <>
      <BG />
      <Navbar />
      <div className={styles.heading}>
        <div>
          <h3 className="bebas-neue-regular">Lapis Presents</h3>
        </div>
        <div>
          <h1 className="bebas-neue-regular">FootballAPI</h1>
        </div>
      </div>
      <div className={styles.HomeDiv}>
        {/* <img src={bgimg} /> */}
        <img src={wave} className={styles.wave} alt="background" />
        <div className={styles.navbar}>
          <ul>
            <li></li>
          </ul>
        </div>
        <div>
          <p className="oswald">
            Football API by LAPIS is a RESTful API Designed entirely in Golang
            to conquer high requests per second and also have blazing fast
            responses due to golangs unique concurrency model. <br />
            It aims to provide users with a seamless interaction with the
            relevant and also provides various methods to filter the data.
          </p>
        </div>
      </div>
    </>
  );
}
