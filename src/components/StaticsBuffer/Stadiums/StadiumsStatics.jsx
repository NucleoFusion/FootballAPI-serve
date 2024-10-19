import React from "react";
import BG from "../../bg/BG";
import styles from "../Statics.module.css";
import Navbar from "../../Navbar/Navbar";

import country from "./Country.json";
import sortVal from "./Sort.json";

export default function Stadiums() {
  return (
    <>
      <BG />
      <Navbar />
      <div className={styles.container}>
        <h1 className="bebas-neue-regular">Stadiums</h1>
        <div>
          <h1 className="bebas-neue-regular">Countries</h1>
          <div className={styles.jsonMap}>
            {Object.entries(country).map(([key, val]) => {
              return (
                <div
                  className={`${styles.keyVal} oswald`}
                >{`${key} : ${val}`}</div>
              );
            })}
          </div>
        </div>

        <div>
          <h1 className="bebas-neue-regular">Sort Values</h1>
          <div className={styles.jsonMap}>
            {Object.entries(sortVal).map(([key, val]) => {
              return (
                <div
                  className={`${styles.keyVal} oswald`}
                >{`${key} : ${val}`}</div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
