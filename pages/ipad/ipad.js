
function showCategoryProducts() {
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


function showAccessories(){
    let accesoriesHtml = '';

    accessories.forEach((accessore) => {
        accesoriesHtml += `<div class="oneAccessories"> 

        <div class="accessorePhoto"> 
            <img class="acPic" src="${accessore.photo}" alt="Photo" /> 
        </div>

        <div class="name">${accessore.name}</div>  

        <div class="price accessorePrice">From $${accessore.price}</div> 
         
    </div> `;
    });

    $("#my-slider").html(accesoriesHtml);
}



function showProduct(productId) {
    $("#modal-slider").slick("unslick");
    const product = products.find((ipad) => {
        return ipad.id === productId;
    });

    if (product) {
        let sliderHtml = '';

        product.images.forEach((image) => {
            sliderHtml += `<div><img class="modalPhoto" src="${image}" alt="${product.name}" /></div>
            `;
        });

        //------

        let infoHtml = '';

        infoHtml += `<div class="nameModal">${product.name}</div>`;

        infoHtml += `<div class="priceCol">${product.price}</div>`;

        product.parametrs.forEach((parametr) => {
            infoHtml += `
            <div class="w-100 p-3 border-bottom d-flex align-items-start">
                <i class="${parametr.icon} me-3" style="margin-top:7px"></i>  ${parametr.value} 
            </div>
        `;
        });


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

        $('#staticBackdrop').on('shown.bs.modal', function () {
            $('#modal-slider').slick();
        });
        $("#staticBackdrop").on("hidden.bs.modal", function (e) {
            $("#modal-slider").slick("unslick");
        });
        $('#staticBackdrop').modal('show');

    }
}





$(document).ready(function () {
    showCategoryProducts();
    showAccessories();
});

$(".hovEl").hover(
    () => { $("main").css({ filter: "blur(1px)" }) },
    () => { $("main").css({ filter: "none" }) }
);




