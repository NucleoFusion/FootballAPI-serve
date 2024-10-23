import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div id={styles.navCont}>
      <div>
        <img src="" alt="logo" />
      </div>
      <ul>
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
    </div>
  );
}
