import React from "react";

export const InputCell = (props) => {
  return (
    <div className="bg-gray-200 w-10 h-10 flex justify-center items-center  text-white font-bold text-2xl">
      <span className=" text-center  text-white font-extrabold text-2xl">
        {props.value}
      </span>
    </div>
  );
};
