
function showCategoryProducts(){
    let productsHtml = '';

    products.forEach((product) => {
        productsHtml += `<div class="one"> 
 
        <div class="name">${product.name}</div> 

        <div class="photo"> 
            <img class="picture" src="${product.images[0]}" alt="" /> 
        </div> 

        <div class="price">${product.price}</div> 

        <div class="buttons"> 
            <div type="button" class="button" onclick="showProduct(${product.id})"> 
                More
            </div>              
        </div> 
         
    </div> `;
    });

    $("#products-catalog").html(productsHtml);
}



function showProduct(productId){
    const product = products.find((phone) => {
        return phone.id === productId;
    });

    if(product){
        let sliderHtml = '';

        product.images.forEach((image) => {
            sliderHtml += `<div><img class="modalPhoto" src="${image}" alt="${product.name}" /></div>
            `;
        });



        //------

        let infoHtml = '';

        infoHtml += `<div class="nameModal">${product.name}</div>`;

        product.parametrs.forEach((parametr) => {
            infoHtml += `
            <div class="w-100 p-3 border-bottom d-flex align-items-start">
                <i class="${parametr.icon} me-3" style="margin-top:7px"></i>  ${parametr.value} 
            </div>
        `;
        });

        infoHtml += `<div class="priceCol">${product.price}</div>`;



        //------

        /*let nameHtml = '';
        nameHtml += `<h1 class="modal-title fs-5" id="staticBackdropLabel">${product.name}</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>`;*/

        //------


        let colorHtml = '';

        colorHtml += `<div class="colorAvaible">Available in ${product.colors.length} finishes</div>`;

        product.colors.forEach((color) => {
            colorHtml += `<div class="color" style="background: ${color}; border: 0.2px solid lightgrey"></div>`;
        });

        $('#modal-slider').html(sliderHtml);
        $('#parametrModal').html(infoHtml);
        //$('#modalName').html(nameHtml);
        $('#addColor').html(colorHtml);
        
        $('#staticBackdrop').on('shown.bs.modal', function(){
            $('#modal-slider').slick();
        });
        $("#staticBackdrop").on("hidden.bs.modal", function (e) {
            $("#modal-slider").slick("unslick");
          });
        $('#staticBackdrop').modal('show');

    }
}


$(document).ready(function(){
    showCategoryProducts();
});

$(".ulLi").hover(
    () => {$("main").css({filter: "blur(2px)"})},
    () => {$("main").css({filter: "none"})}
  );

