import { shownewGameBox, getValues } from "./newGameBox.js";
const acceptBtn = document.querySelector(".btn--ok");

const editGame = (gameEl) => {
  const game = gameEl.currentTarget.gameEl;
  const ratio = game.querySelectorAll(".fill").length;
  const url = game.querySelector(".game-img").src;
  const statusPanel = game.querySelector(
    ".game__content-el.content-el--status"
  );
  const index = Array.from(game.parentNode.children).indexOf(game);
  acceptBtn.index = index;
  const statusContent = statusPanel.querySelector(".active");
  const status =
    statusContent.textContent.trim() === "NOT YET"
      ? 0
      : statusContent.textContent.trim() === "OK"
      ? 2
      : statusContent.textContent.trim() === "NO"
      ? 1
      : "";

  const title = game.querySelector(
    ".game__content-el.content-el--title"
  ).textContent;
  getValues(title, url, ratio, status);
  shownewGameBox();
};

const removeGame = (gameEl) => {
  gameEl.currentTarget.gameEl.remove();
};

const viewOptions = (game) => {
  const gamePanel = game.currentTarget.gameEl.querySelector(".game");
  const gameOptions = game.currentTarget.gameEl.querySelector(".game-options");
  let activeGame = document.querySelector(".game.active");
  let games = document.querySelectorAll(".games-list__game");
  let deleteBtn = game.currentTarget.gameEl.querySelector(".btn--delete-game");
  let editBtn = game.currentTarget.gameEl.querySelector(".btn--edit-game");
  deleteBtn.gameEl = deleteBtn.parentNode.parentNode;
  editBtn.gameEl = deleteBtn.parentNode.parentNode;
  for (let i = 0; i < games.length; i++) {
    games[i].querySelector(".game").classList.remove("active");
    games[i].querySelector(".game-options").classList.remove("active");
    deleteBtn.removeEventListener("click", removeGame);
    editBtn.removeEventListener("click", editGame);
  }

  if (gamePanel === activeGame) {
    gamePanel.classList.remove("active");
    gameOptions.classList.remove("active");
    deleteBtn.removeEventListener("click", removeGame);
    editBtn.removeEventListener("click", editGame);
  }
  if (gamePanel !== activeGame) {
    gamePanel.classList.add("active");
    gameOptions.classList.add("active");
    deleteBtn.addEventListener("click", removeGame);
    editBtn.addEventListener("click", editGame);
  }
};

export const viewOptionsHandler = () => {
  let gamePanels = document.querySelectorAll(".game");
  gamePanels.forEach(function (game) {
    game.gameEl = game.parentNode;
    game.removeEventListener("click", viewOptions);
    game.addEventListener("click", viewOptions);
  });
};
