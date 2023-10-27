import { generate } from "random-words";

export const word1 = generate({ minLength: 5, maxLength: 5 });
const temp=localStorage.getItem('wordle')||[]
if(temp!=localStorage.getItem('clone')){
    localStorage.setItem('wordle',word1)
    localStorage.setItem('clone',word1)
}
