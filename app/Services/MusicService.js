import { ProxyState } from "../AppState.js";
import { api } from "./AxiosService.js";
 import Music from "../Models/Music.js";

class MusicService {
  
    constructor() {
        this.getMusic()
    }

    
    getMusic() {
        api.get('music').then(res => {
           
            ProxyState.music = res.data.results.map(rawMusicData => new Music(rawMusicData))
            ProxyState.next = res.data.next
            ProxyState.prev = res.data.prev
            console.log(ProxyState.music)
        
        }).catch(err => console.error(err))

    }

    next() {
        api.get(ProxyState.next).then(res => {
            console.log(res.data)
            ProxyState.music = res.data.results.map(rawMusicData => new Music(rawMusicData))
            ProxyState.next = res.data.next
            ProxyState.prev = res.data.prev
        }).catch(err => console.error(err))
    }


    prev() {
        api.get(ProxyState.prev).then(res => {
            
            ProxyState.music = res.data.results.map(rawMusicData => new Music(rawMusicData))
            ProxyState.next = res.data.next
            ProxyState.prev = res.data.prev
        }).catch(err => console.error(err))
    }


}

export const musicService= new MusicService();