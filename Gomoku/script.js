let activePlayer = true;
const cells = document.querySelectorAll(".empty");
const namePlayer1 = document.querySelector(".player-name--1");
const namePlayer2 = document.querySelector(".player-name--2");
const activeCell = document.querySelector(".menu__hover-cell");
const log = document.querySelector(".log__history");
const exitBtn = document.querySelector(".menu__exit");
const winnerAlert = document.querySelector(".sudoku__alert");
let player1 = "Henio";
let player2 = "Czesław";
let end = false;

//SETUP ------------------------------------
let mapa = [];
(() => {
  const alfabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
  ];
  namePlayer1.innerHTML = player1;
  namePlayer2.innerHTML = player2;
  for (let i = 0; i < 15; i++) {
    mapa[i] = [];
  }
  for (let i = 0; i < 15; i++) {
    for (let j = 1; j <= 15; j++) {
      mapa[i][j - 1] = alfabet[i] + j;
    }
  }
})();

function addSymbol(player, koordy) {
  let stringKoordy = koordy.toString();
  for (let i = 0; i < 15; i++) {
    for (let j = 0; j < 15; j++) {
      if (mapa[i][j] === stringKoordy) {
        mapa[i][j] = player;
      }
    }
  }
}

function endGame(mode, player, i, j) {
  if (mode === "poziom") {
    cells[i * 15 + j].classList.add("winner");
    cells[i * 15 + j + 1].classList.add("winner");
    cells[i * 15 + j + 2].classList.add("winner");
    cells[i * 15 + j + 3].classList.add("winner");
    cells[i * 15 + j + 4].classList.add("winner");
  }
  if (mode === "pion") {
    console.log(j);
    cells[i * 15 + j].classList.add("winner");
    cells[i * 15 + j + 15].classList.add("winner");
    cells[i * 15 + j + 30].classList.add("winner");
    cells[i * 15 + j + 45].classList.add("winner");
    cells[i * 15 + j + 60].classList.add("winner");
  }
  if (mode === "skos1") {
    console.log(j);
    cells[i * 15 + j].classList.add("winner");
    cells[i * 15 + j + 16].classList.add("winner");
    cells[i * 15 + j + 32].classList.add("winner");
    cells[i * 15 + j + 48].classList.add("winner");
    cells[i * 15 + j + 64].classList.add("winner");
  }
  if (mode === "skos2") {
    console.log(j);
    cells[i * 15 + j].classList.add("winner");
    cells[i * 15 + j - 14].classList.add("winner");
    cells[i * 15 + j - 28].classList.add("winner");
    cells[i * 15 + j - 42].classList.add("winner");
    cells[i * 15 + j - 56].classList.add("winner");
  }
  winnerAlert.classList.add("active");
  winnerAlert.innerHTML = player + " is winner!";
  exitBtn.innerHTML = "NEW GAME";
  end = true;
}

function whoWin(player) {
  for (let i = 0; i < 15; i++) {
    for (let j = 0; j < 11; j++) {
      if (
        mapa[i][j] === player &&
        mapa[i][j + 1] === player &&
        mapa[i][j + 2] === player &&
        mapa[i][j + 3] === player &&
        mapa[i][j + 4] === player
      ) {
        endGame("poziom", player, i, j);
      }
    }
  }

  for (let i = 0; i < 11; i++) {
    for (let j = 0; j < 15; j++) {
      if (
        mapa[i][j] === player &&
        mapa[i + 1][j] === player &&
        mapa[i + 2][j] === player &&
        mapa[i + 3][j] === player &&
        mapa[i + 4][j] === player
      ) {
        endGame("pion", player, i, j);
      }
    }
  }

  for (let i = 0; i < 11; i++) {
    for (let j = 0; j < 11; j++) {
      if (
        mapa[i][j] === player &&
        mapa[i + 1][j + 1] === player &&
        mapa[i + 2][j + 2] === player &&
        mapa[i + 3][j + 3] === player &&
        mapa[i + 4][j + 4] === player
      ) {
        endGame("skos1", player, i, j);
      }
    }
  }

  for (let i = 4; i < 15; i++) {
    for (let j = 0; j < 11; j++) {
      if (
        mapa[i][j] === player &&
        mapa[i - 1][j + 1] === player &&
        mapa[i - 2][j + 2] === player &&
        mapa[i - 3][j + 3] === player &&
        mapa[i - 4][j + 4] === player
      ) {
        endGame("skos2", player, i, j);
      }
    }
  }
}

//EXIT BUTTON ---------------------------------------------------------

exitBtn.addEventListener("click", () => {
  location.reload();
});

// DODAWANIE O i X ----------------------------------------------------
// ZMIANA AKTYWNEGO GRACZA---------------------------------------------
cells.forEach(function (cell) {
  cell.addEventListener("click", () => {
    if (
      !end &&
      !cell.classList.contains("x") &&
      !cell.classList.contains("o")
    ) {
      if (activePlayer) {
        cell.classList.add("x");
        addSymbol(player1, cell.id);
        whoWin(player1);
        if (!end) {
          namePlayer2.classList.add("active");
          namePlayer1.classList.remove("active");
        }
      }
      if (!activePlayer) {
        cell.classList.add("o");
        addSymbol(player2, cell.id);
        whoWin(player2);
        if (!end) {
          namePlayer1.classList.add("active");
          namePlayer2.classList.remove("active");
        }
      }
      activePlayer = !activePlayer;
      cell.classList.remove("empty");
      log.innerHTML =
        log.innerHTML +
        "<br>" +
        (activePlayer
          ? "#" + cell.id.toUpperCase() + " " + player2
          : "#" + cell.id.toUpperCase() + " " + player1);
      log.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    }
  });
  // DODAWANIE cienia O i X ----------------------------------------------------
  cell.addEventListener("mouseenter", () => {
    if (
      !end &&
      !cell.classList.contains("x") &&
      !cell.classList.contains("o")
    ) {
      if (activePlayer) {
        cell.classList.add("x-shadow");
      }
      if (!activePlayer) {
        cell.classList.add("o-shadow");
      }
    }
    activeCell.innerHTML = "#" + cell.id.toUpperCase();
  });
  // USUWANIE cienia O i X ----------------------------------------------------
  cell.addEventListener("mouseleave", () => {
    if (
      !end &&
      !cell.classList.contains("x") &&
      !cell.classList.contains("o")
    ) {
      if (activePlayer) {
        cell.classList.remove("x-shadow");
      }
      if (!activePlayer) {
        cell.classList.remove("o-shadow");
      }
    }
    activeCell.innerHTML = "#";
  });
});
