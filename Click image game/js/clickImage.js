var imagePostion = 1;
var score = 0;
var timeLimit = 15;
var time;

function imageIntervalTimmer() {
    console.log(1);
    time = setInterval(nextImage, 800);
}

function nextImage() {
    //  const moleClass = document.getElementsByClassName("mole");

    // if(imagePostion === 1) imagePostion++;
    if (timeLimit === 0) {
        clearInterval(time);
    }
    document.getElementById(imagePostion).className = "cells";
    imagePostion = (imagePostion) % 9 + 1;
    document.getElementById(imagePostion).className = "cells mole";
    timeLimit--;
}

function scoreClickHandler(index) {
    if (index === imagePostion) {
        document.getElementById("score").innerHTML = ++score;
        console.log(score);
    }
}

// imageIntervalTimmer();