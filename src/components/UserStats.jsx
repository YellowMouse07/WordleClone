import React from "react";

export const UserStats = (props) => {
  let winCount = JSON.parse(localStorage.getItem("winCount"));
  let loseCount = JSON.parse(localStorage.getItem("loseCount"));
  return (
    <div className="bg-gray-400 shadow-lg w-fit h-fit mt-4 rounded-md p-20 text-white font-bold text-base ">
      <h1 className="mb-7 text-2xl">{props.value}</h1>
      <p>No. of times played: {winCount + loseCount}</p>
      <p>Won: {winCount} </p>
      <p>Lost: {loseCount} </p>
    </div>
  );
};
