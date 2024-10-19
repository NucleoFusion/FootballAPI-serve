import React from "react";
import styles from "../Category/Category.module.css";

export default function APIRoute(props) {
  // const name = props.name;
  return (
    <div className={styles.routeDiv}>
      <h2 className="oswald">{props.route}</h2>
      <p>{props.descr}</p>
    </div>
  );
}
