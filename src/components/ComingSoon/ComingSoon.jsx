import React from "react";
import Navbar from "../Navbar/Navbar";
import BG from "../bg/BG";
import styles from "./ComingSoon.module.css";

export default function ComingSoon() {
  return (
    <>
      <BG />
      <Navbar />
      <div className={styles.container}>
        <h1 className="bebas-neue-regular">Coming Soon</h1>
      </div>
    </>
  );
}
