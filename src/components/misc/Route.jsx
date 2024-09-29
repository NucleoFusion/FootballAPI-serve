import React from "react";
import styles from "../Docs/Docs.module.css";

export default function Route(props) {
  return (
    <div className={styles.routeDiv}>
      <h2 className="oswald">{props.route}</h2>
      <p>{props.descr}</p>
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
  );
}
