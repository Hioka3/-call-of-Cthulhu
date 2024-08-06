const audio = document.getElementById('bg-music');
const playImg = document.getElementById('play-img');

playImg.addEventListener('click', function() {
  if (audio.paused) {
    audio.play();
    playImg.src = "resourse/icon/icons8-audio-50.png";
  } else {
    audio.pause();
    playImg.src = "resourse/icon/icons8-no-audio-50.png";
  }
});
