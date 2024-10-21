import React from "react";
import styles from "../Category/Category.module.css";

export default function APIRoute(props) {
  // const name = props.name;
  return (
    <div className={styles.routeDiv}>
      <h2 className="oswald">{props.route}</h2>
      <p>
        <div>
          Query Params :-
          <br />
          <br />
          {!props.query ? (
            <>&ensp;&ensp;No Query Parameters</>
          ) : (
            props.query.map((obj) => {
              return (
                <>
                  &ensp;&ensp;
                  {`${props.query.indexOf(obj) + 1}. ${obj}`}
                  <br />
                </>
              );
            })
          )}
        </div>
        <br />
        <div>
          Path Params :-
          <br />
          <br />
          {!props.path ? (
            <>&ensp;&ensp;No Path Parameters</>
          ) : (
            props.path.map((obj) => {
              return (
                <>
                  &ensp;&ensp;
                  {`${props.path.indexOf(obj) + 1}. ${obj}`}
                  <br />
                </>
              );
            })
          )}
        </div>
        <br />
        {props.descr}
      </p>
    </div>
  );
}
