document.addEventListener("DOMContentLoaded", () => {
    let productId = window.sessionStorage.getItem("productId");
    let scriptPath = window.sessionStorage.getItem("script");

    const newScript = document.createElement("script");
    newScript.src = "../" + scriptPath;
    document.getElementById("main1").after(newScript);

    setTimeout(() => {
        
        const product = products.find(product => product.id == productId);
        
        showProduct(product);

    }, 20);
});

function showProduct(product){

    if (product) {

        let orderHtml = '';

        orderHtml += `<div class="accessoriesTitle">
        <b id="bTag">Buy ${product.name}</b>
        <p id="pTag">${product.price}</p>
    </div>
    
    <div class="order1">
        
    <div class="photoOrderSlider">

     <img class="orderPhoto" src="${product.orderPic}">

    </div>

    <div class="storageColor">
    
        <div class="orderStorage">

        <div class="radio-input">
  <div class="info">
  <span class="question">Storage. How much space do you need?</span>
   </div>
  <input type="radio" id="value-1" name="value-radio" value="value-1">
  <label for="value-1">256GB</label>
  <input type="radio" id="value-2" name="value-radio" value="value-2">
  <label for="value-2">512GB</label>
  <input type="radio" id="value-3" name="value-radio" value="value-3">
  <label for="value-3">1TB</label>

</div>
        </div>
    </div>

    </div>
    `;
    orderHtml += ``;
    product.colors.forEach((color) => {
        orderHtml += `<div class="flex items-center gap-4">
        <div class="relative flex h-[50px] w-[50px] items-center justify-center">
          <input
            type="radio"
            id="radio"
            name="gender"
            value="male"
            class="peer z-10 h-full w-full cursor-pointer opacity-0" value="${color}"/>
            
          <div class="absolute h-full w-full rounded-full p-4 shadow-sm shadow-[#00000050] ring-blue-400 duration-300 peer-checked:scale-110 peer-checked:ring-2" style="background-color:${color}"></div>
          
          <div class="absolute -z-10 h-full w-full scale-0 rounded-full bg-blue-200 duration-500 peer-checked:scale-[500%]"
          ></div>
        </div>`;
    });

    orderHtml += ``;


        $('#order').html(orderHtml);
    }

}