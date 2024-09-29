import React, { useEffect } from "react";
import styles from "./Home.module.css";
// import bgimg from "../../images/1338700 (1).png";
import wave from "../../images/wp3469892.webp";
import $ from "jquery";
import Navbar from "../Navbar/Navbar";

export default function Home() {
  useEffect(() => {
    $("body").css("overflow", "hidden");
  });

  return (
    <>
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
        <img src={wave} className={styles.wave} />
        <div className={styles.navbar}>
          <ul>
            <li></li>
          </ul>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            sint aspernatur temporibus, odio minima impedit veniam
            exercitationem quidem, laborum, ab id ullam? Provident vero enim qui
            asperiores perspiciatis vitae libero!
          </p>
        </div>
      </div>
    </>
  );
}
