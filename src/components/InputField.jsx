import React, { useState } from "react";

import { getWord } from "./Word";
import { UserStats } from "./UserStats";

function InputField(props) {
  const [disable, setDisable] = useState(false);
  const [lost, setLost] = useState(false);

  let inputWord;
  function handleChange(event) {
    inputWord = event.target.value;

    props.fetch(inputWord);
  }
  function clearInput() {
    props.fetch("");
  }

  function submitResponse() {
    if (props.value.length === 5 && props.response.length <= 6) {
      let count = JSON.parse(localStorage.getItem("count"));
      let winCount = JSON.parse(localStorage.getItem("winCount"));
      let loseCount = JSON.parse(localStorage.getItem("loseCount"));

      if (props.value === getWord()) {
        props.setResponse(props.value);
        props.fetch("");
        count++;
        winCount++;
        localStorage.setItem("count", JSON.stringify(count));
        localStorage.setItem("winCount", JSON.stringify(winCount));
        setDisable(true);
      } else {
        props.setResponse(props.value);
        props.fetch("");
      }
      if (props.response.length === 5) {
        if (!(props.value === getWord())) {
          setLost(true);
          loseCount++;
          localStorage.setItem("loseCount", JSON.stringify(loseCount));
        }
      }
    }
  }
  return (
    <>
      <div className="flex flex-col gap-5">
        <input
          autoComplete="off"
          autoFocus
          onChange={handleChange}
          onKeyDown={(event) => {
            event.key === "Enter" && submitResponse();
          }}
          placeholder="Start typing..."
          type="text"
          name="input"
          disabled={disable}
          value={props.value}
          maxLength="5"
          className="border-b-2 outline-none border-black"
        ></input>
        <div className="flex justify-evenly">
          <button
            onClick={submitResponse}
            className="border border-black py-2 px-4 hover:text-white hover:bg-black "
          >
            Submit
          </button>
          <button
            onClick={clearInput}
            className="border hover:text-white hover:bg-black border-black py-2 px-4"
          >
            Clear
          </button>
        </div>
      </div>

      <div
        className={`flex items-center justify-center duration-300 absolute h-[100vh] w-[100vw]  backdrop-blur-[2px]  ${
          disable ? " scale-100 bg-opacity-5 " : " scale-0 bg-opacity-0 "
        }`}
      >
        <UserStats
          setResponse={props.clearResponse}
          setDisable={setDisable}
          value="CONGRATULATIONS!"
        />
      </div>
      <div
        className={`flex items-center justify-center duration-300 absolute h-[100vh] w-[100vw]  backdrop-blur-[2px]  ${
          lost ? " scale-100 bg-opacity-5 " : " scale-0 bg-opacity-0 "
        }`}
      >
        <UserStats
          setResponse={props.clearResponse}
          setDisable={setDisable}
          value={`Sorry! The word is "${getWord()}"`}
        />
      </div>
    </>
  );
}

export { InputField };
