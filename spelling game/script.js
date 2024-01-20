const words = ["lantern", "chinaman", "jackiechan", "chingchongchan"];
let inputContainer = document.getElementById("input-container");
let chosenWord = selectWord();

const checkBtn = document.getElementById("check-btn");
function selectWord() {
  const selectedWordindex = Math.floor(Math.random() * words.length);
  // selectedWordindex += 1;
  return words[selectedWordindex];
}
selectWord();
console.log(chosenWord);

function renderWordInput() {
  const chosenWordArr = chosenWord.split("");
  let htmlText = "";
  chosenWordArr.forEach((letter) => {
    htmlText += `<input class="input-box" maxLength="1"></input>`;
  });
  inputContainer.innerHTML = htmlText;
}

function checkInput() {
  const inputList = document.querySelectorAll("input");
  const answerArr = [];
  inputList.forEach((item) => answerArr.push(item.value));
  console.log(answerArr.join("") === chosenWord);

  //   console.log(guess);
}

inputContainer.addEventListener("input", () => {
  //   console.log(inputContainer.children[0].value);
  const arr = Array.from(inputContainer.children);
  //   arr.forEach((child) => console.log(child.value));
  arr.forEach((child, i) => {
    if (child.value && i < arr.length - 1) {
      child.nextElementSibling.focus();
    }
  });
});

checkBtn.addEventListener("click", checkInput);

renderWordInput();
