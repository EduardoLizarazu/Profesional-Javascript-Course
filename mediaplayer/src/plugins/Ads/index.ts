import MediaPlayer from "../../MediaPlayer";
import Ads, { Ad } from "./Ads";

class AdsPlugin {
    private ads: Ads;
    private player: MediaPlayer;
    private media: HTMLMediaElement;
    private currentAd: Ad;
    private adsContainer: HTMLElement;

    constructor() {
        this.ads = Ads.getInstance();
        this.adsContainer = document.createElement("div");
        this.handleTimeUpdate = this.handleTimeUpdate.bind(this);
    }

    run(player: MediaPlayer) {
        this.player = player;
        this.media = this.player.media;

        this.player.container.appendChild(this.adsContainer);

        // para que se imprima cada cierto tiempo
        this.media.addEventListener("timeupdate", this.handleTimeUpdate);
    }

    private handleTimeUpdate() {
        const currentTime = Math.floor(this.media.currentTime);
        if (currentTime % 30 === 0) {
            this.renderAd();
        }
    }

    private renderAd() {
        // para que no me imprima otro si ya hay uno
        if (this.currentAd) {
            return;
        }
        const ad = this.ads.getAd();
        this.currentAd = ad;
        
        this.adsContainer.innerHTML = /*html */`
            <div class="ads">
                <a  class="ads__link" href="${this.currentAd.url}" target="_blank">
                  <img class="ads__img" src="${this.currentAd.imageUrl}" />
                  <div class="ads__info">
                    <h5 class="ads__title">${this.currentAd.title}</h5>
                    <p class="ads__body">${this.currentAd.body}</p>
                  </div>
                </a>
            </div>
        `;

        // remove the current add
        setTimeout(() => {
            this.currentAd = null;
            this.adsContainer.innerHTML = "";
        }, 10000);
    }
}

export default AdsPlugin;