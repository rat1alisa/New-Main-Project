

/*let findButton = document.querySelector(".menuElement");
let menu = document.getElementById("popMenu");

if(findButton){

    findButton.addEventListener("click", () =>{
        if(findButton.classList.contains("pushed")) {
            findButton.classList.remove("pushed");
            menu.classList.remove("opened");
        }
        else{
            findButton.classList.add("pushed");
            menu.classList.add("opened");
        }
    })
}*/


$(document).ready(function(){
    $('.slider').slick({
        infinite: true,
        slidesToShow: 3,//сколько будет отображаться
        slidesToScroll: 3
      });
});


