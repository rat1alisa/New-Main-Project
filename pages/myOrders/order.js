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
        <b>Buy ${product.name}</b>
    </div>`;

        $('#order').html(orderHtml);
    }

}