const wordArray = [
  "artistic","alkaloid","aspiring",
  "barefoot","barterer","botanist",
  "cottager","catheter","cesspool",
  "devoutly","demeanor","danseuse",
  "edifying","enthrone","equalize",
  "feasible","follicle","fourthly",
  "glazing","graphics","gendarme",
  "herdsman","huckster","homeward",
  "incoming","immobile","interact",
  "jostling","junkyard","jeweled",
  "kilowatt","kangaroo","kedgeree",
  "laminate","ligneous","logician",
  "monoxide","macaroni","meekness",
  "neatness","nontoxic","newsroom",
  "overbold","ofttimes","optician",
  "perforce","pilchard","prideful",
  "quotient","quackery","quickset",
  "reducing","reaffirm","rashness",
  "stimulus","sneering","swerving",
  "turbaned","twilight","thoracic",
  "upstroke","unionism","ulterior",
  "varicose","violator","villager",
  "westward","wretched","wiriness",
  "xenotime","xenology","xeronate",
  "youthful","youngish","yeanling",
  "zucchini","zincking","zoneless",
];

const input = document.querySelector(".wordInput");
const button1 = document.querySelector(".btn");
const button2 = document.querySelector(".btnn");
const button3 = document.querySelector(".logButton");
const feedbackMessage = document.querySelector(".feedback-message");

let currentRandomWord = getRandomWord();

function getRandomWord() {
  const randomIndex = Math.floor(Math.random() * wordArray.length);
  return wordArray[randomIndex];
}

function insert() {
  button1.addEventListener("click", (e) => {
    e.preventDefault();
    input.value = "";
    currentRandomWord = getRandomWord();
    document.querySelector("h3").textContent = currentRandomWord;
    feedbackMessage.textContent = "";
    setTimeout(() => {
      document.querySelector("h3").textContent = "";
    }, 3000);
  });
}

function submit() {
  button2.addEventListener("click", (e) => {
    e.preventDefault();
    const inputValue = input.value.trim();
    if (inputValue === currentRandomWord) {
      feedbackMessage.textContent = "Correct";
    } else {
      feedbackMessage.textContent = "Incorrect";
    }
    input.value = "";
  });
}

function logWords() {
  for (let i = 0; i < wordArray.length; i++) {
    console.log("Word:", wordArray[i]);
  }
}

button3.addEventListener("click", (e) => {
  e.preventDefault()
    logWords();
});

insert();
submit();
