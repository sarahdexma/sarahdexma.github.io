// Cursor
let mouseCursor = document.querySelector(".cursor");

window.addEventListener("mousemove", cursor);

function cursor(e) {
    console.log("hello");
    mouseCursor.style.top = e.pageY + "px";
    mouseCursor.style.left = e.pageX + "px";
}

var vid = document.getElementById("bkgvid");
vid.playbackRate = 0.5;