import MediaPlayer from "./MediaPlayer";
import AutoPlay from "./plugins/AutoPlay"
import AutoPause from "./plugins/AutoPause";
import Ads from "./plugins/Ads";

const  video: HTMLElement = document.querySelector("video");
const  toggleButtonPlay: HTMLElement = document.querySelector("#TogglePlay");
const  toggleButtonMute: HTMLElement = document.querySelector("#ToggleMute");

const player = new MediaPlayer({ 
    el:  video, 
    plugins : [new AutoPlay(), new AutoPause(), new Ads()] 
});

toggleButtonPlay.onclick = () =>  player.togglePlay();
toggleButtonMute.onclick = () =>  player.toggleMute();


if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/sw.js").catch(error => {
        console.log(error.message)
    })
} else {
    
}