import React, { useEffect } from "react";
import styles from "./Docs.module.css";
// import bgimg from "../../images/1338700 (1).png";
import Navbar from "../Navbar/Navbar";
import $ from "jquery";
import Route from "../misc/Route";

export default function Docs() {
  useEffect(() => {
    $("body").css("overflow-y", "scroll");
  });

  return (
    <>
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
          <div className={styles.routes}>
            <h1 className="bebas-neue-regular">Routes</h1>
            <div className={styles.routeDiv}>
              <h2 className="oswald">/clubs/get/all</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                sed et rerum eveniet architecto ullam. Fugit id maxime voluptate
                excepturi quaerat distinctio? Commodi eligendi fuga totam at
                natus rem consectetur.
              </p>
              <div className={styles.response}>
                <p className="inconsolata">
                  {`[`}
                  <br />
                  &emsp;
                  {`{`}
                  <br />
                  &emsp; &emsp;
                  {`name: Lakshit,`}
                  <br />
                  &emsp;&emsp;
                  {`club: Real Madrid,`}
                  <br />
                  &emsp;&emsp;
                  {`rating: 99\n`}
                  <br />
                  &emsp;
                  {`},...`}
                  <br />
                  {`]`}
                  <br />
                </p>
              </div>
            </div>
          </div>
          <Route
            route="/club/get/all/:limit"
            descr="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum quod asperiores quos dolorum nam obcaecati, aut nisi. Blanditiis quo ea assumenda, doloribus reprehenderit similique sunt? Nulla at dicta quia iure!"
          />
        </div>
      </div>
    </>
  );
}
