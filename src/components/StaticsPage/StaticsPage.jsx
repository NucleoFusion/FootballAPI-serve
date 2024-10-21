import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import BG from "../bg/BG";
import styles from "./StaticsPage.module.css";
import $ from "jquery";
import { Link } from "react-router-dom";

export default function StaticsPage() {
  useEffect(() => {
    $("body").css("overflow-y", "hidden");
  });

  return (
    <>
      <BG />
      <Navbar />
      <div className={styles.StaticsDiv}>
        <h1 className="bebas-neue-regular">Statics Page</h1>
        <div className="oswald">
          Velit est amet ad deserunt exercitation exercitation adipisicing
          exercitation. Eiusmod laboris qui consectetur nostrud reprehenderit
          minim cillum. Fugiat fugiat proident occaecat ut aliqua. Et aute ut
          cillum nulla occaecat. Lorem duis est aliquip est deserunt laboris in
          dolor do laboris ex. Nostrud elit labore enim consequat quis nisi
          officia enim sint non irure elit consectetur. Laboris sint voluptate
          excepteur fugiat ullamco nostrud quis excepteur aute ex irure qui elit
          laboris.
        </div>
        <div>
          <Link to="/statics/clubs">
            <button className="oswald">Clubs</button>
          </Link>
          <Link to="/statics/stadiums">
            <button className="oswald">Stadiums</button>
          </Link>
          <Link to="/statics/players">
            <button className="oswald">Players</button>
          </Link>
        </div>
      </div>
    </>
  );
}
