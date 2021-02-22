import MusicController from "./Controllers/MusicController.js";
import ValuesController from "./Controllers/ValuesController.js";

class App {
  valuesController = new ValuesController();

  musicController = new MusicController();
}

window["app"] = new App();
