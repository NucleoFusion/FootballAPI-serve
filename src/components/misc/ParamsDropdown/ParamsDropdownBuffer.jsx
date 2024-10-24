import React from "react";
import ParamsDropdown from "./ParamsDropdown";

import queryParams from "./queryParams.json";

export default function ParamsDropdownBuffer(props) {
  const obj = queryParams[props.name];

  return (
    <>
      {obj.map((o) => {
        return (
          <ParamsDropdown
            func={props.func}
            id={o.key}
            values={o.value}
            name={o.key}
          />
        );
      })}
    </>
  );
}
