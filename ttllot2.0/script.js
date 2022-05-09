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

$(window).load(function () {
    $(".trigger_popup_fricc").click(function(){
       $('.hover_bkgr_fricc').show();
    });
    $('.hover_bkgr_fricc').click(function(){
        $('.hover_bkgr_fricc').hide();
    });
    $('.popupCloseButton').click(function(){
        $('.hover_bkgr_fricc').hide();
    });
});