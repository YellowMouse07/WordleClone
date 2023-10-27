import { word1 } from "./Words";

var words;

function word() {
  words = localStorage.getItem("wordle");

  console.log(words);
}
function getWord() {
  return words;
}

export default word;
export { getWord };
