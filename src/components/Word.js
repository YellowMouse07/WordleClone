import { word1 } from "./Words";

var words;

function word() {
  words = word1;

  console.log(words);
}
function getWord() {
  return words;
}

export default word;
export { getWord };
