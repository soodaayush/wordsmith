document.addEventListener("DOMContentLoaded", initialize);

const chosenWordInput = document.getElementById("chosenWord");
const wordToScanInput = document.getElementById("wordChallenge");
const alphabetCountInput = document.getElementById("alphabetCount");
const alphabetsFoundInput = document.getElementById("alphabetsFound");

const challengeBtn = document.getElementById("challenge");
const resetBtn = document.getElementById("reset");

const wordHistory = document.getElementById("wordHistory");

wordToScanInput.addEventListener("keydown", captureEnter);
challengeBtn.addEventListener("click", challenge);
resetBtn.addEventListener("click", reset);

let challengeCount = 0;

function initialize() {
  chosenWordInput.focus();
}

function captureEnter(e) {
  if (e.keyCode === 13) {
    e.preventDefault();

    challenge();
    e.target.select();
  }
}

function challenge() {
  const chosenWord = chosenWordInput.value.toLowerCase();
  const wordToScan = wordToScanInput.value.toLowerCase();

  if (chosenWord === "" || wordToScan === "") {
    alert("Need a word to challenge with, Sire!");
    return;
  }

  const alpha = [];
  const alphaSet = new Set();

  let counter = 0;

  for (let i = 0; i < wordToScan.length; i++) {
    if (chosenWord.includes(wordToScan.charAt(i))) {
      alpha.push(wordToScan.charAt(i));
      alphaSet.add(wordToScan.charAt(i));
      counter++;
    }
  }

  alphabetCountInput.value = alphaSet.size;
  alphabetsFoundInput.value = [...alphaSet];
  challengeCount++;

  wordHistory.innerHTML =
    "Attempt " +
    ("0" + challengeCount).substring(("0" + challengeCount).length - 2) +
    " : " +
    chosenWord +
    " >> " +
    wordToScan +
    " >> " +
    alphaSet.size +
    " >> " +
    [...alphaSet] +
    "<br>" +
    wordHistory.innerHTML;
}

function reset() {
  chosenWordInput.value = "";
  wordToScanInput.value = "";
  alphabetCountInput.value = "";
  alphabetsFoundInput.value = "";
  wordHistory.innerHTML = "";

  challengeCount = 0;
}
