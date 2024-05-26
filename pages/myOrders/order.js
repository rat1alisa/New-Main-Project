/*document.addEventListener("DOMContentLoaded", () => {
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

}*/









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

        let orderTextHtml = '';
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
                    <span class="question">${product.text}</span>
                </div>`;

        product.storage.forEach((st) =>{
        orderHtml += `<input type="radio" id="value-${product.storage.indexOf(st)}" name="value-radio" value="value-${product.storage.indexOf(st)}">
        <label for="value-${product.storage.indexOf(st)}">${st}</label>`;
      });


      orderHtml += `</div>`;
    
    
    orderHtml += `<div class="flex flex-col items-start gap-4 overflow-hidden rounded-md p-6 shadow-sm shadow-[#00000050]"
  >
    <span
      class="text-center font-mono text-base font-black uppercase text-neutral-600"
      >Finish. Pick your favorite.</span>`;

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

    orderHtml += `</div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    `;


    orderHtml += `

    <div class="order1212">

    <div class="order1212PTag">
    <p>Contact Details</p>
    </div>

    <div class="order1" id="order1Id">
      
    <div class="input-container">
  <input type="text" id="input" required="">
  <label for="input" class="label">Name</label>
  <div class="underline"></div>
</div>
    
    <div class="input-container">
  <input type="text" id="input" required="">
  <label for="input" class="label">Surname</label>
  <div class="underline"></div>
</div>
      
      
      <div class="input-container">
  <input type="text" id="input" required="">
  <label for="input" class="label">Comments on the order</label>
  <div class="underline"></div>
</div>
      
      
    </div>
    
    <div class="order1">
      
      
      <div class="ui-wrapper">
    <input checked="" id="Austria" name="flag" type="radio">
    <input id="Belgium" name="flag" type="radio">
    <input id="Bulgaria" name="flag" type="radio">
    <input id="Croatia" name="flag" type="radio">
    <input id="Cyprus" name="flag" type="radio">
    <input id="Czech" name="flag" type="radio">
    <input id="Denmark" name="flag" type="radio">
    <input id="Estonia" name="flag" type="radio">
    <input id="Finland" name="flag" type="radio">
    <input id="France" name="flag" type="radio">
    <input id="Germany" name="flag" type="radio">
    <input id="Greece" name="flag" type="radio">
    <input id="Hungary" name="flag" type="radio">
    <input id="Iceland" name="flag" type="radio">
    <input id="Ireland" name="flag" type="radio">
    <input id="Italy" name="flag" type="radio">
    <input id="Latvia" name="flag" type="radio">
    <input id="Liechtenstein" name="flag" type="radio">
    <input id="Lithuania" name="flag" type="radio">
    <input id="Luxembourg" name="flag" type="radio">
    <input id="Malta" name="flag" type="radio">
    <input id="Netherlands" name="flag" type="radio">
    <input id="Norway" name="flag" type="radio">
    <input id="Poland" name="flag" type="radio">
    <input id="Portugal" name="flag" type="radio">
    <input id="Romania" name="flag" type="radio">
    <input id="Slovakia" name="flag" type="radio">
    <input id="Slovenia" name="flag" type="radio">
    <input id="Spain" name="flag" type="radio">
    <input id="Sweden" name="flag" type="radio">
    <input class="dropdown-checkbox" name="dropdown" id="dropdown" type="checkbox">
    <label class="dropdown-container" for="dropdown"></label>
    <div class="input-wrapper">
        
        <div class="textfield">
            <input pattern="\d+" maxlength="11" id="phonenumber" type="text">
            <span class="invalid-msg">This is not a valid phone number</span>
        </div>
    </div>
    <div class="select-wrapper">
        <ul>
            <li class="Austria"><label for="Austria"><span>🇦🇹</span>Austria (+43)</label></li>
            <li class="Belgium"><label for="Belgium"><span>🇧🇪</span>Belgium (+32)</label></li>
            <li class="Bulgaria"><label for="Bulgaria"><span>🇧🇬</span>Bulgaria (+359)</label></li>
            <li class="Croatia"><label for="Croatia"><span>🇭🇷</span>Croatia (+385)</label></li>
            <li class="Cyprus"><label for="Cyprus"><span>🇨🇾</span>Cyprus (+357)</label></li>
            <li class="Czech"><label for="Czech"><span>🇨🇿</span>Czech Republic (+420)</label></li>
            <li class="Denmark"><label for="Denmark"><span>🇩🇰</span>Denmark (+45)</label></li>
            <li class="Estonia"><label for="Estonia"><span>🇪🇪</span>Estonia (+372)</label></li>
            <li class="Finland"><label for="Finland"><span>🇫🇮</span>Finland (+358)</label></li>
            <li class="France"><label for="France"><span>🇫🇷</span>France (+33)</label></li>
            <li class="Germany"><label for="Germany"><span>🇩🇪</span>Germany (+49)</label></li>
            <li class="Greece"><label for="Greece"><span>🇬🇷</span>Greece (+30)</label></li>
          <li class="Hungary"><label for="Hungary"><span>🇭🇺</span>Hungary (+36)</label></li>
            <li class="Iceland"><label for="Iceland"><span>🇮🇸</span>Iceland (+354)</label></li>
            <li class="Ireland"><label for="Ireland"><span>🇮🇪</span>Republic of Ireland (+353)</label></li>
            <li class="Italy"><label for="Italy"><span>🇮🇹</span>Italy (+39)</label></li>
            <li class="Latvia"><label for="Latvia"><span>🇱🇻</span>Latvia (+371)</label></li>
            <li class="Liechtenstein"><label for="Liechtenstein"><span>🇱🇮</span>Liechtenstein (+423)</label></li>
            <li class="Lithuania"><label for="Lithuania"><span>🇱🇹</span>Lithuania (+370)</label></li>
            <li class="Luxembourg"><label for="Luxembourg"><span>🇱🇺</span>Luxembourg (+352)</label></li>
            <li class="Malta"><label for="Malta"><span>🇲🇹</span>Malta (+356)</label></li>
            <li class="Netherlands"><label for="Netherlands"><span>🇳🇱</span>Netherlands (+31)</label></li>
            <li class="Norway"><label for="Norway"><span>🇳🇴</span>Norway (+47)</label></li>
            <li class="Poland"><label for="Poland"><span>🇵🇱</span>Poland (+48)</label></li>
            <li class="Portugal"><label for="Portugal"><span>🇵🇹</span>Portugal (+351)</label></li>
            <li class="Romania"><label for="Romania"><span>🇷🇴</span>Romania (+40)</label></li>
            <li class="Slovakia"><label for="Slovakia"><span>🇸🇰</span>Slovakia (+421)</label></li>
            <li class="Slovenia"><label for="Slovenia"><span>🇸🇮</span>Slovenia (+386)</label></li>
            <li class="Spain"><label for="Spain"><span>🇪🇸</span>Spain (+34)</label></li>
            <li class="Sweden"><label for="Sweden"><span>🇸🇪</span>Sweden (+46)</label></li>
        </ul>
    </div>
</div>
  
    
      <div class="input-container-gmail">
    <input placeholder="email" type="text" class="input-gmail">
    <span>@gmail.com</span>
</div>

</div>
      
<div class="lastToBuy">
  
  <div class="lastToBuyIcons">
    
    <div>
    <i class="fa fa-car" aria-hidden="true"></i>
    <b class="lastToBuyIconsAB">Delivery:</b>
    <a class="lastToBuyIconsAB">Get delivery dates +</a>
    </div>
    
    <div>
    <i class="fa fa-shopping-bag" aria-hidden="true"></i>
    <b class="lastToBuyIconsAB">Pickup:</b>
    <a class="lastToBuyIconsAB">Check availability +</a>
    </div>
    
    <div class="lastToBuyButton1">
    <div  class="lastToBuyButton">
<div class="button-wrapper">
  <div class="text">Buy Now</div>
    <span class="icon">
      <svg viewBox="0 0 16 16" class="bi bi-cart2" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg" href="#" onclick="reload_confirm(); return false;"> 
  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
</svg>
    </span>
  </div>
</div>

    </div>
  </div>
  
  
  
</div>
    
    </div>`;
    
    


    $('#order').html(orderHtml);
    }

}