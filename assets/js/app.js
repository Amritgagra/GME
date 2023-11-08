const banner = document.querySelector('.banner');
const header =  document.querySelector('.header')
window.onscroll = function() {scrollFunction(banner.offsetHeight)};
function scrollFunction(scollHeight) {
  if (document.body.scrollTop > scollHeight  || document.documentElement.scrollTop > scollHeight ) {
    header.classList.add('active')
  } else {
    header.classList.remove('active')
  }
}

$(document).ready(function() {
    var video1 = document.querySelector(".video1"); 
    var video2 = document.querySelector(".video2"); 

    $(".video1,.play-btn1").click(function() {
        if (video1.paused) {
            video1.play(); 
            $(".video-container1 .play-btn img").hide(); 
        } else {
            video1.pause(); 
            $(".video-container1 .play-btn img").show(); 
        }
    });
    $(".video2,.play-btn2").click(function() {
        if (video2.paused) {
            video2.play(); 
            $(".video-container2 .play-btn img").hide(); 
        } else {
            video2.pause(); 
            $(".video-container2 .play-btn img").show(); 
        }
    });
});
