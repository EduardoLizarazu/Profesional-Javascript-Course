function AutoPlay() {}

AutoPlay.prototype.run = function(player) {
    this.mute()
    player.play();
}

export default AutoPlay;