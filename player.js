var vid = document.getElementById("videoA");
var pb = document.getElementById("play-btn");

vid.ontimeupdate = function () {
    var currentTime = Math.floor(vid.currentTime);
    displayTime()
};

function playVid() {
    if (vid.paused) {
        vid.play();
        pb.src = "images/pause.png"
    }
    else {
        vid.pause();
        pb.src = "images/play.png"
    }
}

function displayTime() {
    document.getElementById("timestamp").innerHTML = Math.floor(vid.currentTime)+" seconds";
}

function setTime() {
    let point = prompt("Go to")
    vid.currentTime = point
}
