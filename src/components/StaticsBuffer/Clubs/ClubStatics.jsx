import React from "react";
import styles from "../Statics.module.css";
import Navbar from "../../Navbar/Navbar";
import BG from "../../bg/BG";

import clubs from "./Clubs.json";
import tournaments from "./Tournaments.json";
import sortVal from "./Sort.json";

export default function ClubStatics() {
  return (
    <>
      <BG />
      <Navbar />
      <div className={styles.container}>
        <h1 className="bebas-neue-regular">Team</h1>
        <div>
          <h1 className="bebas-neue-regular">Club Names</h1>
          <div className={styles.jsonMap}>
            {Object.entries(clubs).map(([key, val]) => {
              return (
                <div
                  className={`${styles.keyVal} oswald`}
                >{`${key} : ${val}`}</div>
              );
            })}
          </div>
        </div>

        <div>
          <h1 className="bebas-neue-regular">Tournament</h1>
          <div className={styles.jsonMap}>
            {Object.entries(tournaments).map(([key, val]) => {
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
