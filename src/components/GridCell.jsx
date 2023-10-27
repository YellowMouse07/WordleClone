import React, { useEffect, useState } from "react";
import { getWord } from "./Word";

export const GridCell = ({ position, value, response }) => {
  const [style, setStyle] = useState(" bg-gray-200 ");

  const word = getWord();
  useEffect(() => {
    response !== undefined && handleColor();
  }, [response]);

  function handleColor() {
    if (word.includes(value[position])) {
      if (word[position] === value[position]) {
        setStyle(" bg-green-500 duration-[100ms] ");
      } else {
        setStyle(" bg-yellow-500 duration-[100ms] ");
      }
    } else {
      setStyle(" bg-gray-500 duration-[100ms] ");
    }
  }

  return (
    <div
      className={`"bg-gray-200 w-12 h-12 flex items-center justify-center " ${style} `}
    >
      <p className=" w-full text-center text-white font-extrabold text-2xl">
        {value && value.charAt(position)}
      </p>
    </div>
  );
};
