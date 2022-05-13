// https://potatoortomato.com/
// author unknown
// i thought this website was cute and easy to digest, it think it emulates our final project in studio. a simple interaction and self-explanatory game. i think it looks really cohesive and strong because of the clear illustrations and the multiple animations. although i think if i sat down and tried to accomplish this on my own i could, but to make it look as smooth as this site would take a bit longer to achieve. 

//defining the two vegetable options of the game: potato, getting the element of the potato, getting the illustration, adding the spinning animation, and then connecting the button. repeated for tomato. 
function buildView() {
    "Potato" === randomVegetable && ($(".vegetable").html('<img src="images/potato.svg" class="animated zoomIn" alt="Potato or Tomato?">'), $("button").addClass("potatoBrown")), "Tomato" === randomVegetable && ($(".vegetable").html('<img src="images/tomato.svg" class="animated zoomIn" alt="Potato or Tomato?">'), $("button").addClass("tomatoRed"))
}

//getting the button and showing the results, adding fade in animation and confetti with text and a link to restart, share, etc. then implementing a shaking animation if the wrong answer is chosen.
function runAnswer() {
    $("button").on("click", function() {
        var t = $(this).val();
        if (t === randomVegetable) $(".result").fadeIn(650), $("#confetti").show(), $(".result__content").html("<p>Yup, that's a " + t + "!</p><p>You'd be surprised by how many have guessed wrong!</p><p><a class=\"popup alt--button\" href=\"https://twitter.com/share?text=Potato+or+Tomato?!+Can+you+tell+the+difference?&amp;hashtags=PotatoOrTomato&amp;url=https%3A%2F%2Fpotatoortomato.com\" onclick=\"ga( 'send', 'event', 'Social', 'Share', 'Twitter');\"><span class=\"fa fa-twitter\"></span>&nbsp;&nbsp;Tweet</a><a class=\"alt--button\" href=\"/\" data-ajax=\"false\" onclick=\"ga( 'send', 'event', 'Game', 'Action', 'Replay');\"><span class=\"fa fa-refresh\"></span>&nbsp;&nbsp;Play Again</a></p>"), $(".popup").click(function(t) {
            var a = 575,
                e = 400,
                n = ($(window).width() - a) / 2,
                o = ($(window).height() - e) / 2,
                s = "status=1,width=" + a + ",height=" + e + ",top=" + o + ",left=" + n;
            return window.open(this.href, "Share Potato or Tomato", s), !1
        });
        else {
            $(".vegetable img").removeClass("zoomIn").addClass("shake").on("animationend webkitAnimationEnd oAnimationEnd mozAnimationEnd msAnimationEnd", function() {
                $(this).removeClass("shake")
            }), $(".result").fadeIn(650), $(".result__content").html('<div class="incorrect"><span class="animated fadeIn">no</span><span class="animated fadeIn">no</span><span class="animated fadeIn">no</span></div>'), $(".incorrect span:last-child").on("animationend webkitAnimationEnd oAnimationEnd mozAnimationEnd msAnimationEnd", function() {
                $(".result").fadeOut(650)
            })
        }
    })
}

//this randomizes between the user getting potato vs tomato
var vegetables = new Array("Potato", "Tomato"),
    randomVegetable = vegetables[Math.floor(Math.random() * vegetables.length)];

    //this is for the twitter popup i believe, showing its size
$(document).ready(function() {
    $(".popup").click(function(t) {
        var a = 575,
            e = 400,
            n = ($(window).width() - a) / 2,
            o = ($(window).height() - e) / 2,
            s = "status=1,width=" + a + ",height=" + e + ",top=" + o + ",left=" + n;
        return window.open(this.href, "Share Potato or Tomato", s), !1
    })
}), buildView(), runAnswer();

