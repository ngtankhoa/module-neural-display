$(document).ready(function () {
    var slideIndex = 0;
    var duration = 0;
    var pauseTime = 3000;
    var $slide = $(".slide");
    // var video = $("#vid1");

    showSlides();

    function showSlides() {
        var i;
        for (i = 0; i < $slide.length; i++) {
            $slide.eq(i).css("display", "none");
            // $slide.eq(slideIndex).css("display", "none");
        }
        slideIndex++;
        if (slideIndex > $slide.length) { slideIndex = 1 }
        $slide.eq(slideIndex - 1).css("display", "block");
        if ($slide.eq(slideIndex - 1).children().is("video")) {
            var vid = $slide.eq(slideIndex - 1).children()[0];
            vid.play();
            duration = vid.duration * 1000;
        } else {
            duration = 0;
        }
        console.log(pauseTime + duration);
        setTimeout(showSlides, pauseTime + duration);
    }

    // $slide.eq(2).css("display","block");
    // video[0].play();
});















































// // container for module
// var app = {};



// // init function
// app.init = function(){

// }

// // initiate the function
// app.init();
// });