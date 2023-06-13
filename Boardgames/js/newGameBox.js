import { generateGameInDesktop } from "./generateGameInDesktop.js";

const newGameBox = document.querySelector(".add-game-box");
const addNewGameBtn = document.querySelector(".add-game-button");
const newGameTitleInput = newGameBox.querySelector('input[name="title"]');
const newGameUrlInput = newGameBox.querySelector('input[name="image-url"]');
const newGameRatingInputs = newGameBox.querySelectorAll('input[name="rating"]');
const newGameStatusInputs = newGameBox.querySelectorAll('input[name="status"]');
const backdrop = document.querySelector(".backdrop");
const cancelBtn = document.querySelector(".btn--cancel");
const acceptBtn = document.querySelector(".btn--ok");

export const shownewGameBox = () => {
  newGameBox.classList.add("active");
  backdrop.classList.add("active");
};
const hidenewGameBox = () => {
  newGameBox.classList.remove("active");
  backdrop.classList.remove("active");
  newGameTitleInput.value = "";
  newGameUrlInput.value = "";
  for (const ratingInput of newGameRatingInputs) {
    ratingInput.checked = false;
  }
  for (const statusInput of newGameStatusInputs) {
    statusInput.checked = false;
  }
};

export const getValues = (title, url, rate, status) => {
  newGameTitleInput.value = title;
  newGameUrlInput.value = url;
  newGameRatingInputs[rate - 1].checked = true;
  newGameStatusInputs[status].checked = true;
};

const newGameInBaseHandler = (index) => {
  let title = "";
  let url = "imgs/image-solid.png";
  let rate = 0;
  let status = 0;
  index = index.currentTarget.index;
  title = newGameTitleInput.value;

  if (newGameUrlInput.value) {
    url = newGameUrlInput.value;
  }

  newGameRatingInputs.forEach(function (ratingInput) {
    if (ratingInput.checked) {
      rate = +ratingInput.value;
    }
  });

  newGameStatusInputs.forEach(function (statusInput) {
    if (statusInput.checked) {
      status = +statusInput.value;
    }
  });

  if (!title || !rate || !status) {
    return;
  }
  hidenewGameBox();
  generateGameInDesktop(title, url, rate, status, index);
};

addNewGameBtn.addEventListener("click", shownewGameBox);
backdrop.addEventListener("click", hidenewGameBox);
cancelBtn.addEventListener("click", hidenewGameBox);
acceptBtn.addEventListener("click", newGameInBaseHandler);
