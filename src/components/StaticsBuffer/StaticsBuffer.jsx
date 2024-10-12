import React from "react";
import ClubStatics from "./Clubs/ClubStatics";
import { useParams } from "react-router-dom";

export default function StaticsBuffer() {
  const { category } = useParams();

  if (category === "clubs") {
    return <ClubStatics />;
  } else if (category === "stads") {
    return <h1>Stadiums</h1>;
  } else if (category === "players") {
    return <h1>Players</h1>;
  } else {
    return <h1> ERROR </h1>;
  }
}
