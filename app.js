let gameseSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("game started");
    started = true;
    levelUp();
  }
  setTimeout(function () {
    document.querySelector("body").style.backgroundColor = "white";
  }, 50);
});

function gameflash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}

function userflash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 250);
}

function levelUp() {
  userSeq = [];
  level++;
  h2.innerText = `level ${level}`;
  let randIdx = Math.floor(Math.random() * 4);
  let randColor = btns[randIdx];
  let randBtn = document.querySelector(`.${randColor}`);
  gameseSeq.push(randColor);
  console.log(gameseSeq);
  gameflash(randBtn);
}

function checkAns(idx) {
  if (userSeq[idx] === gameseSeq[idx]) {
    if (userSeq.length == gameseSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h2.innerHTML = `GAME OVER! <b>Your score was ${level}</b><br> Press any key to start. `;
    document.querySelector("body").style.backgroundColor = "red";

    reset();
  }
 }

function btnPress() {
  let btn = this;
  userflash(btn);
  userColor = btn.getAttribute("id");
  userSeq.push(userColor);
  checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}

function reset() {
  started = false;
  gameseSeq = [];
  userSeq = [];
  level = 0;
}
