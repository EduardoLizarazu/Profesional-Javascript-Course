// function AutoPause () {  
//     this.threshold = {  threshold: 0.25  };
//     this.callback = this.callback.bind(this);
// }

// AutoPause.prototype.callback = function (entries, observer) {
//     entries.forEach(entry => {
//         if (entry.intersectionRatio >= this.threshold.threshold) {
//             this.media.play();
//         } else {
//             this.media.pause();
//         }
//     });
// }
// AutoPause.prototype.run = function (player) {
//     this.media = player.media;
//     const observer = new IntersectionObserver(this.callback, this.threshold);
    
//     observer.observe(this.media);
// }
class AutoPause {
    constructor() {
        this.threshold = { threshold: 0.25 };
        // solution to the pause(undefine) problem, the cause was the this context
        // Now the context of this is the instance of the plugin
        this.handleIntersection = this.handleIntersection.bind(this);
    }

    run(player) {
        this.player = player;

        const observer = new IntersectionObserver(this.handleIntersection, this.threshold);

        observer.observe(this.player.media);
    }

    handleIntersection(entries) {
        // only observe ONE property
        const entry = entries[0];

        const isVisibly = entry.intersectionRatio >= this.threshold.threshold;

        isVisibly
            ? this.player.play()
            : this.player.pause();
    }
}

export default AutoPause;