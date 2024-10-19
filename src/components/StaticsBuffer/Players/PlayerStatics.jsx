import React from "react";
import BG from "../../bg/BG";
import styles from "../Statics.module.css";
import Navbar from "../../Navbar/Navbar";

import squads from "./Squad.json";
import nations from "./Nation.json";
import leagues from "./League.json";

export default function PlayerStatics() {
  return (
    <>
      <BG />
      <Navbar />
      <div className={styles.container}>
        <h1 className="bebas-neue-regular">Players</h1>
        <div>
          <h1 className="bebas-neue-regular">Squads</h1>
          <div className={styles.jsonMap}>
            {Object.entries(squads).map(([key, val]) => {
              return (
                <div
                  className={`${styles.keyVal} oswald`}
                >{`${key} : ${val}`}</div>
              );
            })}
          </div>
        </div>

        <div>
          <h1 className="bebas-neue-regular">Nations</h1>
          <div className={styles.jsonMap}>
            {Object.entries(nations).map(([key, val]) => {
              return (
                <div
                  className={`${styles.keyVal} oswald`}
                >{`${key} : ${val}`}</div>
              );
            })}
          </div>
        </div>

        <div>
          <h1 className="bebas-neue-regular">Leagues</h1>
          <div className={styles.jsonMap}>
            {Object.entries(leagues).map(([key, val]) => {
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
