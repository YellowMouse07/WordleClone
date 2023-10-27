import React, { useEffect, useState } from "react";
import { InputGrid } from "./InputGrid";
import { InputField } from "./InputField";
let val = JSON.parse(localStorage.getItem("userResponse"));
let setlen;
if (val == []) {
  setlen = [];
} else {
  setlen = val;
}
export const GridLayout = () => {
  const [response, setResponse] = useState(setlen || []);
  useEffect(() => {
    localStorage.setItem("userResponse", JSON.stringify(response));
  }, [response]);
  const [value, setValue] = useState("");

  function onSubmit(value) {
    setResponse((initialVal) => [...initialVal, value]);
  }

  return (
    <>
      <div className="grid grid-rows-6 gap-3">
        <InputGrid value={value} response={response} row={0} />
        <InputGrid value={value} response={response} row={1} />
        <InputGrid value={value} response={response} row={2} />
        <InputGrid value={value} response={response} row={3} />
        <InputGrid value={value} response={response} row={4} />
        <InputGrid value={value} response={response} row={5} />
      </div>
      <InputField
        fetch={setValue}
        response={response}
        setResponse={onSubmit}
        clearResponse={setResponse}
        value={value}
      />
    </>
  );
};
