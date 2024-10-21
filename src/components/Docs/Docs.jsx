import React, { useEffect } from "react";
import styles from "./Docs.module.css";
// import bgimg from "../../images/1338700 (1).png";
import Navbar from "../Navbar/Navbar";
import $ from "jquery";
import BG from "../bg/BG";
import { Link } from "react-router-dom";

export default function Docs() {
  useEffect(() => {
    $("body").css("overflow-y", "scroll");
  });

  return (
    <>
      <BG />
      <Navbar />
      <div className={styles.DocsDiv}>
        <div>
          <div className={styles.aboutDiv}>
            <h2 className="bebas-neue-regular">About Us</h2>
            <h3 className="oswald">BASE URL: something.com/</h3>
            <p className="oswald">
              FootballAPI - By LAPIS,
              <br /> is a REST API written purely in Golang to provide users
              with a large and relevant Football Data for free. To check out the
              API and its Responses refer to the Document Section below.
            </p>
          </div>
          <div className={styles.aboutDiv}>
            <h2 className="bebas-neue-regular">Authentication</h2>
            <p className="oswald">
              The API uses API KEY Authentication which is to be added as a
              query parameter in the HTTP Request.
              <br />
              Example: {`www.ourbaseurl.com/{endpoint}`}?key=testkey
              <br />
              To get a sample of the API, the above key, ie, "testkey" also
              serves as a valid API Key.
            </p>
          </div>
          <div className={styles.aboutDiv}>
            <h2 className="bebas-neue-regular">Documentation</h2>
            <div className={styles.buttonDiv}>
              <Link to="/docs/clubs">
                <button>Clubs</button>
              </Link>
              <Link to="/docs/stadiums">
                <button>Stadiums</button>
              </Link>
              <Link to="/docs/players">
                <button>Players</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
