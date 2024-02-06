const wordArray = [
  "art","amaranthaceae","aspiring",
  "barefoot","barterer","beguilements",
  "cottager","calamostachys","cesspool",
  "delight","diaminogen","daily",
  "edifying","electromagnetics","equalize",
  "fore","follicle","framboesia",
  "gally","graphics","guanabano",
  "heart","hydrolytically","homewards",
  "ice","immobile","intersocietal",
  "junk","junkyard","jocooserie",
  "kilo","kangaroo","khwarazmian",
  "light","ligneous","leathercraft",
  "monoxide","macaroni","miscarriage",
  "neatness","negotiation","nope",
  "overbold","organization","only",
  "proud","prevalence","prideful",
  "qualification","quackery","quit",
  "reducing","reaccustoms","rude",
  "stimulus","sneering","supernaturalist",
  "turbaned","twilight","tetrapyramid",
  "unanachronously","unionism","underscrub",
  "vacuolations","violator","vite",
  "west","wainscoting","wiriness",
  "xanthophores","xenology","xolo",
  "youth","youngish","yesternights",
  "zucchini","zin","zincograph",
];

const input = document.querySelector(".wordInput");
const button1 = document.querySelector(".btn");
const button2 = document.querySelector(".btnn");
const button3 = document.querySelector(".difficultyButton");
const feedbackMessage = document.querySelector(".feedback-message");

let currentRandomWord = RandomWord();
let currentDifficulty = "";

function RandomWord() {
  const randomIndex = Math.floor(Math.random() * wordArray.length);
  return wordArray[randomIndex];
}

function insert() {
  button1.addEventListener("click", (e) => {
    e.preventDefault();
    input.value = "";
    currentRandomWord = RandomWord();

    document.querySelector("h3").textContent = currentRandomWord;
    feedbackMessage.textContent = "";

    setTimeout(() => {
      document.querySelector("h3").textContent = "";
      document.querySelector("h5").textContent = "";
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

function WordAndDifficulty(word) {
  let currentDifficulty;

  console.log("Word:", word);

  if (word.length < 7) {
    currentDifficulty = "Level Difficulty: Easy";
  } else if (word.length === 7) {
    currentDifficulty = "Level Difficulty: Medium";
  } else {
    currentDifficulty = "Level Difficulty: Hard";
  }

  console.log("Difficulty:", currentDifficulty);
  return currentDifficulty;
}

button3.addEventListener("click", (e) => {
  e.preventDefault();
  currentDifficulty = WordAndDifficulty(currentRandomWord);
  document.querySelector("h5").textContent = currentDifficulty;
});



insert();
submit();
