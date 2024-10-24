import React from "react";
import ParamsDropdown from "./ParamsDropdown/ParamsDropdown";
import styles from "../QueryBuilder/QueryBuilder.module.css";

import sortVals from "./sortVal.json";

export default function PathParams(props) {
  function handleChange(val) {
    console.log(val);
  }

  if (props.show === "limit") {
    return (
      <div className={styles.dropdownDivs}>
        <label htmlFor="limit">Limit</label>
        <input name="limit" onChange={handleChange} />
      </div>
    );
  } else if (props.show === "sortVal") {
    return (
      <div>
        <ParamsDropdown
          func={handleChange}
          id="SortVal"
          values={sortVals[props.name]}
          name="SortVal"
        />
      </div>
    );
  }

  return (
    <>
      <div className={styles.dropdownDivs}>
        <label htmlFor="limit">Limit</label>
        <input name="limit" onChange={handleChange} />
      </div>
      <div>
        <ParamsDropdown
          func={handleChange}
          id="SortVal"
          values={sortVals[props.name]}
          name="SortVal"
        />
      </div>
    </>
  );
}
