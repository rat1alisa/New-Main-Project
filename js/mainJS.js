<<<<<<< HEAD
$(document).ready(function(){
    $('.slider').slick({
        infinite: true,
        slidesToShow: 3,//сколько будет отображаться
        slidesToScroll: 3
      });
});
=======



$('.autoSlider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
});

//#h - id наведения
$(".hovEl").hover(
  () => {$("main").css({filter: "blur(1px)"})},
  () => {$("main").css({filter: "none"})}
);

/*document.getElementById("ulLiBlur").addEventListener("mouseenter", () => {
    document.getElementById("main1").style.filter = "blur(2px)";
});
document.getElementById("ulLiBlur").addEventListener("mouseleave", () => {
  document.getElementById("main1").style.filter = "none";
});*/

<<<<<<< HEAD

>>>>>>> ff8e880507dd24f0f542690d7afcbc49f85aaf3b
=======
$(window).scroll(function(){
  let h = $("header").height();
  let pos = $("header").position().top;
  let scroll = $(this).scrollTop();
  $(".submenu").css({top: `${h + pos - scroll}px`});
});
>>>>>>> c0130d9d570d739c614302cf14094bd43308e200
