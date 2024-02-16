
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
            sliderHtml += `<div><img class="modalPhoto" src="${image}" alt="${product.name}" /></div>`;
        });

        $('#modal-slider').html(sliderHtml);
        $('#staticBackdrop').on('shown.bs.modal', function(){
            $('.slider').slick();
        });
        $('#staticBackdrop').modal('show');

    }
}

$(document).ready(function(){
    showCategoryProducts();
});