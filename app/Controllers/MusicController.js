import { ProxyState } from "../AppState.js";
import { musicService } from "../Services/MusicService.js";


//Private
function _draw() {
  let characters = ProxyState.music;
  let template = ''
  characters.forEach(v => template += v.Template)
  document.getElementById("app").innerHTML = /*html*/`
  <div className="card-columns music">
      ${template}
  </div>
  <button class="button-text btn btn-info m-1" onclick="app.musicController.prev()">Back</button>
  <button class="button-text btn btn-info m-1" onclick="app.musicController.next()">Next</button>
  `
}

//Public
export default class MusicController {
  constructor() {
    ProxyState.on("music", _draw);
    _draw()
  }

  next() {
    musicService.next()
  }

  prev() {
    musicService.prev()
  }

}