import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import styles from "./Category.module.css";
import BG from "../bg/BG";
import APIRoute from "../misc/APIRoute";
import * as $ from "jquery";
import Statics from "../misc/Statics";
import RespBuffer from "../misc/RespBuffer";

import getQuery from "./queryRouteParams.json";

export default function Category() {
  const { category } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    $("body").css("overflow-y", "scroll");
    $(".bgimg").css("z-index", -1);
    if (
      category !== "clubs" &&
      category !== "stadiums" &&
      category !== "players"
    ) {
      navigate("/docs");
    }
  });

  return (
    <>
      <Navbar />
      <BG />
      <div className={styles.categoryContainer}>
        <Statics name={category} />
        <div className={styles.RespFormat}>
          <h1 className="bebas-neue-regular">Response Format</h1>
          <div className={styles.response}>
            <RespBuffer name={`${category}`} />
          </div>
        </div>
        <div className={styles.RoutesContainer}>
          <h1 className="bebas-neue-regular">
            Routes {category ? `- ${category}` : ""}
          </h1>
          <APIRoute
            name={`${category}`}
            route={`/${category}/get/all`}
            descr={`- Returns an array of objects containing all the ${category} data.`}
          />
          <APIRoute
            name={`${category}`}
            route={`/${category}/get/all/{limit}`}
            descr={`- Returns an array of objects with the given length containing the ${category} data.`}
            path={[
              "limit - an integer defining the length of the response, ie, the number of documents you want. (REQUIRED)",
            ]}
          />
          <APIRoute
            name={`${category}`}
            route={`/${category}/get/query`}
            query={getQuery[category]}
            descr={`- Returns an array of objects containing the data after querying all the ${category} data.`}
          />
          <APIRoute
            name={`${category}`}
            route={`/${category}/get/query/{limit}`}
            query={getQuery[category]}
            path={[
              "limit - an integer defining the length of the response, ie, the number of documents you want. (REQUIRED)",
            ]}
            descr={`- Returns an array of objects with user defined length containing the data after querying all the ${category} data.`}
          />
          <APIRoute
            name={`${category}`}
            route={`/${category}/get/sortBy/{sortVal}`}
            path={[
              "sortVal - the value you want to sort the documents by (for the value, please refer to statics for clubs). (REQUIRED)",
            ]}
            descr={`- Returns an array of objects after sorting by the respective field.`}
          />
          <APIRoute
            name={`${category}`}
            route={`/${category}/get/sortBy/{sortVal}/{limit}`}
            path={[
              "limit - an integer defining the length of the response, ie, the number of documents you want. (REQUIRED)",
              "sortVal - the value you want to sort the documents by(for the value, please refer to statics for clubs). (REQUIRED)",
            ]}
            descr={`- Returns an array of objects, with given length, after sorting by the respective field.`}
          />
        </div>
      </div>
    </>
  );
}
