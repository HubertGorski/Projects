import { viewOptionsHandler } from "./optionsGame.js";

const acceptBtn = document.querySelector(".btn--ok");
let gamesList = document.querySelector(".games-list");
let games = document.querySelectorAll(".games-list__game");
const starIcon = `                <svg
xmlns="http://www.w3.org/2000/svg"
fill="none"
viewBox="0 0 24 24"
stroke-width="1.3"
class="star fill"
>
<path
  stroke-linecap="round"
  stroke-linejoin="round"
  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
/>
</svg>`;
const starIconEmpty = `                <svg
xmlns="http://www.w3.org/2000/svg"
fill="none"
viewBox="0 0 24 24"
stroke-width="1.3"
class="star"
>
<path
  stroke-linecap="round"
  stroke-linejoin="round"
  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
/>
</svg>`;

export const generateGameInDesktop = (title, url, rate, status, index = -1) => {
  const newLi = document.createElement("li");
  newLi.classList.add("games-list__game");
  const newDiv = document.createElement("div");
  const newDiv2 = document.createElement("div");
  newDiv.classList.add("game");
  newDiv2.classList.add("game-options");
  newDiv.innerHTML = `
  <img class="game-img" src="${url}" alt="empty img" />
  <div class="game__content">
    <span class="game__content-el content-el--ratio">
      ${
        rate === 1
          ? starIcon +
            starIconEmpty +
            starIconEmpty +
            starIconEmpty +
            starIconEmpty
          : rate === 2
          ? starIcon + starIcon + starIconEmpty + starIconEmpty + starIconEmpty
          : rate === 3
          ? starIcon + starIcon + starIcon + starIconEmpty + starIconEmpty
          : rate === 4
          ? starIcon + starIcon + starIcon + starIcon + starIconEmpty
          : rate === 5
          ? starIcon + starIcon + starIcon + starIcon + starIcon
          : ""
      }
    </span>
    <span class="game__content-el content-el--title">${title}</span>
    <ul class="game__content-el content-el--status">
      <li${status === 3 ? " class=active" : ""}>OK</li$>
      <li${status === 1 ? " class=active" : ""}>NOT YET</li$>
      <li${status === 2 ? " class=active" : ""}>NO</li$>
    </ul>
  </div>`;
  newDiv2.innerHTML = `            <button class="btn btn--edit-game">Edit</button>
  <button class="btn btn--delete-game">Delete</button>`;

  gamesList.appendChild(newLi);
  newLi.appendChild(newDiv);
  newLi.appendChild(newDiv2);
  if (index >= 0) {
    gamesList.replaceChild(gamesList.lastChild, gamesList.childNodes[index]);
    acceptBtn.index = -1;
  }
  games = document.querySelectorAll(".games-list__game");
  viewOptionsHandler();
};
