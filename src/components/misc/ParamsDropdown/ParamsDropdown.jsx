import React from "react";
import $ from "jquery";
import styles from "../../QueryBuilder/QueryBuilder.module.css";

export default function ParamsDropdown(props) {
  function bufferFunc() {
    props.func([
      props.id,
      $(`select[name="${props.id}"]`).find(":selected").val(),
    ]);
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
          Object.entries(props.values).map(([key, val]) => {
            return <option value={key}>{val}</option>;
          })
        )}
      </select>
    </div>
  );
}
