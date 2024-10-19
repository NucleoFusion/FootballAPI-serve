import React from "react";
import ClubStatics from "./Clubs/ClubStatics";
import { useParams } from "react-router-dom";
import PlayerStatics from "./Players/PlayerStatics";
import $ from "jquery";
import { useEffect } from "react";
import Stadiums from "./Stadiums/StadiumsStatics";

export default function StaticsBuffer() {
  const { category } = useParams();

  useEffect(() => {
    $("body").css("overflow-y", "scroll");
  });

  if (category === "clubs") {
    return <ClubStatics />;
  } else if (category === "stadiums") {
    return <Stadiums />;
  } else if (category === "players") {
    return <PlayerStatics />;
  } else {
    return <h1> ERROR </h1>;
  }
}
