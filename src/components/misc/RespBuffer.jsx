import React from "react";
import ClubsResp from "../ResponseTypes/ClubsResp";
import StadResp from "../ResponseTypes/StadResp";
import PlayerResp from "../ResponseTypes/PlayerResp";

export default function RespBuffer(props) {
  if (props.name === "clubs") {
    return <ClubsResp />;
  } else if (props.name === "players") {
    return <PlayerResp />;
  } else if (props.name === "stad") {
    return <StadResp />;
  }
}
