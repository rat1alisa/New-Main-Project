
$(document).ready(function(){
    $('.slider').slick({
        infinite: true,
        slidesToShow: 3,//сколько будет отображаться
        slidesToScroll: 3
      });
});



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

$(window).scroll(function(){
  let h = $("header").height();
  let pos = $("header").position().top;
  let scroll = $(this).scrollTop();
  $(".submenu").css({top: `${h + pos - scroll}px`});
});


function buyProduct(productId, script){
  window.sessionStorage.setItem("productId", productId);
  window.sessionStorage.setItem("script", script);

  window.location.href="file:///D:/alice/Main%20Project/pages/myOrders/order.html";
}
