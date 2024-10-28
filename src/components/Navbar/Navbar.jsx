import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import dots from "../../images/3dots.png";
import $ from "jquery";

export default function Navbar() {
  function toggleNavbar() {
    if ($("#navbarList").css("visibility") == "hidden") {
      $("#navbarList").css("visibility", "visible");
    } else {
      $("#navbarList").css("visibility", "hidden");
    }
  }

  return (
    <div id={styles.navCont}>
      <div>
        <img src="" alt="logo" />
      </div>
      <ul id="navbarList">
        <li>
          <Link to="/">
            <button>Home</button>
          </Link>
        </li>
        <li>
          <Link to="/querybuilder">
            <button>Query Builder</button>
          </Link>
        </li>
        <li>
          <Link to="/docs">
            <button>Docs</button>
          </Link>
        </li>
        <li>
          <Link to="/statics">
            <button>Statics</button>
          </Link>
        </li>
      </ul>
      <div className={styles.responsiveButton}>
        <button onClick={toggleNavbar}>
          <img src={dots} />
        </button>
      </div>
    </div>
  );
}
