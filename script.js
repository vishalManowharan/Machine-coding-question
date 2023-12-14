let parent = document.getElementById("parent");
let elRef = [];
for(let i=0;i<10;i++) {
  let child = document.createElement("div");
  let input1 = document.createElement("input");
  let input2 = document.createElement("input");
  child.append(input1);
  child.append(input2);
  child.append(document.createElement("br"));
  input1.classList.add("input");
  input2.classList.add("input");
  input1.onkeyup = valueUpdate;
  input2.onkeyup = valueUpdate;
  let cumulativeScore = document.createElement("span");
  cumulativeScore.textContent = 0;
  cumulativeScore.classList.add("cumulativeVal");
  child.append(cumulativeScore);
  elRef.push(child);
}
let totalScore = document.createElement("div");
totalScore.id = "totalScore";
parent.append(...elRef);
parent.append(totalScore);
let inputs = parent.getElementsByClassName("input");
let spans = parent.getElementsByClassName("cumulativeVal");
let inputsArr = [...inputs];
let currentSum = 0;
let count = 0;
let sum = document.getElementById("totalScore");
sum.textContent = 0;
function valueUpdate(event) {
  let val = +(event.target.value);
  let currentIndex = inputsArr.indexOf(event.target);
  if(currentIndex > -1 && currentIndex < inputs.length - 1) {
    inputs[currentIndex + 1].focus();
  }
  let spanIndex = currentIndex == 0 || currentIndex == 1 ? 0 : Math.floor(currentIndex/2);
 if(count < 2) {
   currentSum = +spans[spanIndex].textContent;
   count++;
  }else {
    count = 1;
    currentSum = +spans[spanIndex - 1].textContent;
  }
  spans[spanIndex].textContent = currentSum + val;
  sum.textContent = spans[spanIndex].textContent;
}