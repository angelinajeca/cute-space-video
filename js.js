/* BOUTONS */

const btnplay = document.querySelector('.play');
const btnpause = document.querySelector('.pause');
const btnstop = document.querySelector('.stop');
const video = document.querySelector('.video');

btnplay.addEventListener('click', function(){
    video.play();
});

btnpause.addEventListener('click', function(){
    video.pause();
});


btnstop.addEventListener('click', function() {
    video.pause();
    video.currentTime;
  });

/* CHARGEMENT */
let barre = document.querySelector(".barre");

video.addEventListener("timeupdate", function() {
    var fraction = video.currentTime/video.duration;
    barre.style.transform = 'scaleX(${ratio})';
  });

/* AUTRES */

const rocket = document.querySelector('.rocket');

rocket.addEventListener('click', function() {
    document.getElementById("rocket").style.width = "120%";
  });