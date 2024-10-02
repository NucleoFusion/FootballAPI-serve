import React, { useEffect } from "react";
import styles from "./Docs.module.css";
// import bgimg from "../../images/1338700 (1).png";
import Navbar from "../Navbar/Navbar";
import $ from "jquery";
import BG from "../bg/BG";

export default function Docs() {
  useEffect(() => {
    $("body").css("overflow-y", "scroll");
  });

  return (
    <>
      <BG />
      <Navbar />
      <div className={styles.DocsDiv}>
        <div>
          <div className={styles.aboutDiv}>
            <h2 className="bebas-neue-regular">About Us</h2>
            <h3 className="oswald">BASE URL: something.com/</h3>
            <p className="oswald">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut
              pariatur perferendis vitae quis, iure minima recusandae porro
              veritatis expedita vel alias corporis nulla, doloribus tenetur,
              itaque sequi quidem ducimus ea.
            </p>
          </div>
          <div className={styles.aboutDiv}>
            <h2 className="bebas-neue-regular">Authentication</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              minus doloribus autem aspernatur ratione! Non quidem porro animi
              amet tempore nam eos quaerat sequi cupiditate quod. Perspiciatis
              ut molestias corporis.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
