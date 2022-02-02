import MediaPlayer from "./MediaPlayer.js";
import AutoPlay from "./plugins/AutoPlay.js"
import AutoPause from "./plugins/AutoPause.js";

const  video = document.querySelector("video");
const  toggleButtonPlay = document.querySelector("#TogglePlay");
const  toggleButtonMute = document.querySelector("#ToggleMute");

const player = new MediaPlayer({ 
    el:  video, 
    plugins : [new AutoPlay(), new AutoPause()] 
});

toggleButtonPlay.onclick = () =>  player.togglePlay();
toggleButtonMute.onclick = () =>  player.toggleMute();
// window.addEventListener("load", player.autoPlay())


