/* BOUTONS */

const btnplay = document.querySelector('.play');
const btnpause = document.querySelector('.pause');
const btnstop = document.querySelector('.stop');
const btnvolumeless = document.querySelector('.volumeless');
const btnvolumeplus = document.querySelector('.volumeplus');
const video = document.querySelector('.video');

let volume = 0.5;
video.volume = volume;


btnplay.addEventListener('click', function(){
    video.play();
});

btnpause.addEventListener('click', function(){
    video.pause();
});


btnstop.addEventListener('click', function() {
    video.pause();
    video.currentTime = 0;
  });

btnvolumeplus.addEventListener('click', function(){
    volume += 0.1;
    if (volume > 1) {
      volume = 1;
    }
    video.volume = volume;
  });

btnvolumeless.addEventListener('click', function() {
    volume -= 0.1;
    if (volume < 0) {
      volume = 0;
    }
    video.volume = volume;
  });

/* CHARGEMENT */

let bar = document.querySelector(".barre");
video.play();

video.addEventListener("timeupdate", () => {
  let ratio = video.currentTime / video.duration;
  bar.style.transform = "scaleX(" + ratio + ")";
});

/* ANIMATION FIN */

const progres = document.querySelector('.progres');
const videoText = document.querySelector('.endingtext');

video.addEventListener('ended', function(){
  videoText.play();
  document.getElementById("endingtext").style.display = "block";
});

const videoEnding= function(){
  document.getElementById("endingtext").style.display = "none";
};