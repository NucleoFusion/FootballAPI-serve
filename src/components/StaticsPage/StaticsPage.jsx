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
          To provide an easier to understand interaction with our API, instead
          of having the user to enter complicated phrases and names (which makes
          it easier for errors to occur). We use a Mapping System to counter
          this.
          <br />
          For Example:- <br />
          &ensp; The Query -
          /get/clubs/query/20?key=testkey&Team=Hoffenheim?Tournament=Bundesliga
          <br />
          &ensp; Turns into -
          /get/clubs/query/20?key=testkey&Team=HOF?Tournament=BUND
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
