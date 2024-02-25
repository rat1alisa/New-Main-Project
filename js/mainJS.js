


$('.autoSlider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
});

//#h - id наведения
$(".ulLi").hover(
  () => {$("main").css({filter: "blur(2px)"})},
  () => {$("main").css({filter: "none"})}
);

/*document.getElementById("ulLiBlur").addEventListener("mouseenter", () => {
    document.getElementById("main1").style.filter = "blur(2px)";
});
document.getElementById("ulLiBlur").addEventListener("mouseleave", () => {
  document.getElementById("main1").style.filter = "none";
});*/


