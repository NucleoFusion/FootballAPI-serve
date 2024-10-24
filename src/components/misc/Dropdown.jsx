import React from "react";
import styles from "../QueryBuilder/QueryBuilder.module.css";
import $ from "jquery";

export default function Dropdown(props) {
  function bufferFunc() {
    props.func($(`select[name="${props.id}"]`).find(":selected").val());
  }

  return (
    <div className={styles.dropdownDivs}>
      <label htmlFor={props.id} className="bebas-neue-regular">
        {props.name}
      </label>
      <select className={styles.dropdown} name={props.id} onChange={bufferFunc}>
        <option value="NA">None</option>
        {!props.values ? (
          <option>No Values Found</option>
        ) : (
          props.values.map((obj) => {
            return <option value={obj.key}>{obj.value}</option>;
          })
        )}
      </select>
    </div>
  );
}
