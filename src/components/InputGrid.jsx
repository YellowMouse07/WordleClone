import React from "react";

import { GridCell } from "./GridCell";

export const InputGrid = (props) => {
  let value =
    props.response[props.row] !== undefined
      ? props.response[props.row]
      : props.response.length === props.row
      ? props.value
      : "";

  return (
    <div className="grid grid-cols-5 gap-1 self-center">
      {[0, 1, 2, 3, 4].map((position) => (
        <GridCell
          
          key={position}
          value={value}
          response={props.response[props.row]}
          position={position}
        />
      ))}
    </div>
  );
};
