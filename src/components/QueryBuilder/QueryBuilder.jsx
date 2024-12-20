import React, { useEffect, useState } from "react";
import styles from "./QueryBuilder.module.css";
import BG from "../bg/BG";
import Navbar from "../Navbar/Navbar";
import Dropdown from "../misc/Dropdown";
import ParamsDropdownBuffer from "../misc/ParamsDropdown/ParamsDropdownBuffer";
import $ from "jquery";

import paramObj from "./params.json";
import PathParams from "../misc/PathParams";

export default function QueryBuilder() {
  const [data, setData] = useState({
    dataset: "",
    endpoint: "",
  });

  const [params, setParams] = useState({
    path: [],
    query: false,
  });

  const [path, setPath] = useState({
    limit: "",
    sortVal: "",
  });

  const [requestURL, setRequestURL] = useState("");

  useEffect(() => {
    setPath({ limit: "", sortVal: "" });
    setQuery([]);
  }, [data]);

  const [query, setQuery] = useState([]);

  function generateRequest() {
    let modifiedEndpoint = data.endpoint;
    let finalEndpoint = modifiedEndpoint.split("/");
    finalEndpoint.map((str, idx, arr) => {
      if (str.slice(1) === "limit" && path.limit) {
        arr[idx] = path.limit;
      } else if (str.slice(1) === "sortVal" && path.sortVal) {
        arr[idx] = path.sortVal;
      }
    });

    let queryString = "?";
    if (query && query.length !== 0) {
      query.forEach((obj) => {
        const [key, val] = Object.entries(obj)[0];
        queryString += `${key}=${val}&`;
      });
    }
    queryString += "key=testkey";

    setRequestURL(
      `https://footballapi-5210c36e4e2d.herokuapp.com/${
        data.dataset
      }${finalEndpoint.join("/")}${queryString}`
    );

    $(`#popup`).css("visibility", "visible");
  }

  function handleDataset(val) {
    setData({
      ...data,
      dataset: val,
    });
  }

  function handleEndpoint(val) {
    setData({
      ...data,
      endpoint: val,
    });
  }

  function handlePathChange(val) {
    setPath(val);
  }

  function handleQueryChange(val) {
    const [key, value] = val;

    if (value === "NA") {
      return;
    }

    let found = false;
    query.forEach((obj) => {
      if (obj[key]) {
        obj[key] = value;
        found = true;
      }
    });

    if (!found) {
      setQuery([...query, { [key]: value }]);
    }
  }

  function hidePopup() {
    $(`#popup`).css("visibility", "hidden");
  }

  useEffect(() => {
    const handleParams = () => {
      if (data.endpoint === "") {
        return;
      }

      const parameters = paramObj.params.find(
        (obj) => obj.key === data.endpoint
      );

      const obj = {
        path: parameters.values.path,
        query: parameters.values.query,
      };

      setParams(obj);
    };

    handleParams();
  }, [data]);

  return (
    <>
      <BG />
      <Navbar />
      <div className={styles.popUp} id="popup">
        <div>
          <p className="oswald">
            <a href={requestURL}>{requestURL}</a>
          </p>
          <div>
            <button onClick={hidePopup}>Ok</button>
          </div>
        </div>
      </div>
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
          <div className={styles.paramsCont}>
            {data.dataset === "" || data.endpoint === "" ? (
              <h1 className="bebas-neue-regular">
                Please Select Dataset and/or Endpoint
              </h1>
            ) : (
              <>
                <div>
                  <h1 className="bebas-neue-regular">Path</h1>
                  {!params.path || !params.path[0] ? (
                    <h2>No Path Parameters Required</h2>
                  ) : params.path.length === 2 ? (
                    <PathParams
                      query={params.path}
                      name={data.dataset}
                      func={handlePathChange}
                    />
                  ) : params.path[0].key === "limit" ? (
                    <PathParams
                      query={params.path}
                      name={data.dataset}
                      show="limit"
                      func={handlePathChange}
                    />
                  ) : (
                    <PathParams
                      query={params.path}
                      name={data.dataset}
                      show="sortVal"
                      func={handlePathChange}
                    />
                  )}
                </div>
                <div>
                  <h1 className="bebas-neue-regular">Query</h1>
                  {params.query !== true ? (
                    <h2>No Query Parameters Required</h2>
                  ) : (
                    <>
                      <ParamsDropdownBuffer
                        func={handleQueryChange}
                        name={data.dataset}
                      />
                    </>
                  )}
                </div>
              </>
            )}
          </div>
          <div className={styles.generateCont}>
            <button onClick={generateRequest}>Generate</button>
          </div>
        </div>
      </div>
    </>
  );
}
