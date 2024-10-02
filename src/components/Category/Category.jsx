import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import styles from "./Category.module.css";
import BG from "../bg/BG";
import APIRoute from "../misc/APIRoute";
import $ from "jquery";
import Statics from "../misc/Statics";

export default function Category() {
  const { category } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    $(".bgimg").css("z-index", -1);
    if (
      category !== "clubs" &&
      category !== "stadiums" &&
      category !== "players"
    ) {
      navigate("/docs");
    }
  });

  console.log(category);

  return (
    <>
      <Navbar />
      <BG />
      <div className={styles.categoryContainer}>
        <Statics name={category} />
        <div className={styles.RoutesContainer}>
          <h1 className="bebas-neue-regular">
            Routes {category ? `- ${category}` : ""}
          </h1>
          <APIRoute
            route={`/${category}/get/all`}
            descr="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate assumenda, expedita minima dolore quam maxime totam omnis praesentium, consequatur laborum illum consectetur iste esse quis sapiente impedit sed laboriosam veniam."
          />
          <APIRoute
            route={`/${category}/get/all/:limit`}
            descr="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate assumenda, expedita minima dolore quam maxime totam omnis praesentium, consequatur laborum illum consectetur iste esse quis sapiente impedit sed laboriosam veniam."
          />
          <APIRoute
            route={`/${category}/get/query`}
            descr="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate assumenda, expedita minima dolore quam maxime totam omnis praesentium, consequatur laborum illum consectetur iste esse quis sapiente impedit sed laboriosam veniam."
          />
          <APIRoute
            route={`/${category}/get/query/:limit`}
            descr="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate assumenda, expedita minima dolore quam maxime totam omnis praesentium, consequatur laborum illum consectetur iste esse quis sapiente impedit sed laboriosam veniam."
          />
          <APIRoute
            route={`/${category}/get/sortBy/:sortVal`}
            descr="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate assumenda, expedita minima dolore quam maxime totam omnis praesentium, consequatur laborum illum consectetur iste esse quis sapiente impedit sed laboriosam veniam."
          />
          <APIRoute
            route={`/${category}/get/sortBy/:sortVal/:limit`}
            descr="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate assumenda, expedita minima dolore quam maxime totam omnis praesentium, consequatur laborum illum consectetur iste esse quis sapiente impedit sed laboriosam veniam."
          />
        </div>
      </div>
    </>
  );
}
