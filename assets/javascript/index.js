import MediaPlayer from "./MediaPlayer.js";
import AutoPlay from "./plugins/AutoPlay.js"

const  video = document.querySelector("video");
const  toggleButtonPlay = document.querySelector("#TogglePlay");
const  toggleButtonMute = document.querySelector("#ToggleMute");

const player = new MediaPlayer({ 
    el:  video, 
    plugins : [new AutoPlay()] 
});

toggleButtonPlay.onclick = () =>  player.togglePlay();
toggleButtonMute.onclick = () =>  player.toggleMute();
// window.addEventListener("load", player.autoPlay())


