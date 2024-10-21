import React from "react";
import styles from "../Category/Category.module.css";
import { Link } from "react-router-dom";

export default function Statics(props) {
  return (
    <div className={styles.staticDiv}>
      <h1 className="bebas-neue-regular">
        Statics {props.name ? `- ${props.name}` : ""}
      </h1>
      <div>
        <p className="oswald">
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
        </p>
        <div className={styles.buttonDiv}>
          <Link to={`/statics/${props.name}`}>
            <button>Go To</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
