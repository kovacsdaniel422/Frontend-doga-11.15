import GamesModel from "../Model/GamesModel.js";
import GamesViev from "../View/GamesViev.js";
console.log(" GamesController Lefutott")
class GamesController {
  constructor() {
    const gameModel = new GamesModel();
    gameModel.dataIn("../games.json", this.gameData);
    gameData(tomb);
    {
      let szulo = $("main");
      new GamesViev(tomb, szulo);
    }
  }
}
export default GamesController;
