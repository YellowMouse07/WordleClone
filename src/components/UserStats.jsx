import React from "react";

export const UserStats = (props) => {
  let winCount = JSON.parse(localStorage.getItem("winCount"));
  let loseCount = JSON.parse(localStorage.getItem("loseCount"));
  function handleClick() {
    localStorage.removeItem("wordle");
    localStorage.removeItem("clone");
    props.setDisable(false);
    props.setResponse([]);
  }
  return (
    <form onSubmit={handleClick}>
      <div className=" bg-neutral-100 bg-clip-padding backdrop-filter backdrop-blur-[100px] bg-opacity-70 border border-gray-100 text-black  shadow-xl w-fit h-fit mt-4 rounded-md p-20 font-bold text-base ">
        <h1 className="mb-7 text-2xl">{props.value}</h1>
        <p>No. of times played: {winCount + loseCount}</p>
        <p>Won: {winCount} </p>
        <p>Lost: {loseCount} </p>
        <div className="flex items-center justify-center mt-10">
          <button className="bg-green-500 shadow-md border-black hover:bg-white text-white hover:text-black font-bold rounded-md px-3 py-2">
            Play again
          </button>
        </div>
      </div>
    </form>
  );
};
