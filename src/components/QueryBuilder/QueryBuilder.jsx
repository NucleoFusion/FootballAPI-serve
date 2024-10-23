import React, { useState } from "react";
import styles from "./QueryBuilder.module.css";
import BG from "../bg/BG";
import Navbar from "../Navbar/Navbar";
import Dropdown from "../misc/Dropdown";

export default function QueryBuilder() {
  const [data, setData] = useState({
    dataset: "",
    endpoint: "",
    params: "",
  });

  function handleDataset(val) {
    console.log(val);
  }
  function handleEndpoint(val) {
    console.log(val);
  }

  return (
    <>
      <BG />
      <Navbar />
      <div className={styles.container}>
        <h1 className="bebas-neue-regular">Query Builder</h1>

        <div className={styles.dropdownCont}>
          <div>
            <Dropdown
              func={handleDataset}
              values={[
                { key: "clubs", value: "Clubs" },
                { key: "stadiums", value: "Stadiums" },
                { key: "players", value: "Players" },
              ]}
              name="Dataset"
              id="dataset"
            />
          </div>
          <div>
            <Dropdown
              func={handleEndpoint}
              values={[
                { key: "/get/all", value: "/get/all" },
                { key: "/get/all/:limit", value: "/get/all/:limit" },
                { key: "/get/query", value: "/get/query" },
                { key: "/get/query/:limit", value: "/get/query/:limit" },
                { key: "/sortBy/:sortVal", value: "/sortBy/:sortVal" },
                {
                  key: "/sortBy/:sortVal/:limit",
                  value: "/sortBy/:sortVal/:limit",
                },
              ]}
              name="Endpoint"
              id="endpoint"
            />
          </div>
          <div className={styles.paramsCont}></div>
          <div className={styles.generateCont}>
            <button>Generate</button>
          </div>
        </div>
      </div>
    </>
  );
}
