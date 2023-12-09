const audioPlayer = document.querySelector("#audioPlayer");
const playBtn = document.querySelector("#playBtn");
const pauseBtn = document.querySelector("#pauseBtn");
playBtn.addEventListener("click", function () {
    audioPlayer.play();
});
pauseBtn.addEventListener("click", function () {
    audioPlayer.pause();
});
audioPlayer.src = "index/Snake Eater.mp3";