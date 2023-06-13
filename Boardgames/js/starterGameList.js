import { generateGameInDesktop } from "./generateGameInDesktop.js";

class game {
  constructor(id, title, url, ratio, status) {
    this.id = id;
    this.title = title;
    this.url = url;
    this.ratio = ratio;
    this.status = status;
  }
}
const starterGameBase = [
  new game(
    1,
    "Azul",
    "https://image.ceneostatic.pl/data/article_picture/4b/90/0216-3070-4faa-979c-6bed2a2ef734_large.jpg",
    4,
    1
  ),
  new game(
    2,
    "Spór o bór",
    "https://image.ceneostatic.pl/data/products/118026666/i-muduko-spor-o-bor.jpg",
    3,
    2
  ),
  new game(
    3,
    "Przebiegłe wielbłądy",
    "https://image.ceneostatic.pl/data/products/31252493/i-przebiegle-wielblady.jpg",
    5,
    3
  ),
];

const generateStarterGameList = () => {
  for (const game of starterGameBase) {
    generateGameInDesktop(game.title, game.url, game.ratio, game.status);
  }
};
generateStarterGameList();
