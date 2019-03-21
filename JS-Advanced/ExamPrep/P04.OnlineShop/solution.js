function onlineShop(selector) {
    let form = `<div id="header">Online Shop Inventory</div>
    <div class="block">
        <label class="field">Product details:</label>
        <br>
        <input placeholder="Enter product" class="custom-select">
        <input class="input1" id="price" type="number" min="1" max="999999" value="1"><label class="text">BGN</label>
        <input class="input1" id="quantity" type="number" min="1" value="1"><label class="text">Qty.</label>
        <button id="submit" class="button" disabled>Submit</button>
        <br><br>
        <label class="field">Inventory:</label>
        <br>
        <ul class="display">
        </ul>
        <br>
        <label class="field">Capacity:</label><input id="capacity" readonly>
        <label class="field">(maximum capacity is 150 items.)</label>
        <br>
        <label class="field">Price:</label><input id="sum" readonly>
        <label class="field">BGN</label>
    </div>`;
    $(selector).html(form);

    let sumOfPRoducts = 0;
    let quantityOfProducts = 0;

    let product = $('.custom-select');
    let price = $('#price');
    let quantity = $('#quantity');
    let button = $('#submit');
    let inventory = $('.display');

    let capacity = $('#capacity');
    let sum = $('#sum');

    product.on('input', () => button.attr('disabled', false));

    button.on('click', addToInvetory);
    button.on('click', reset);

    function addToInvetory() {
        if(quantityOfProducts > 150 || (quantityOfProducts + Number(quantity.val())) > 150){
            disableFields();
        }else {
            let li = $(`<li>Product: ${product.val()} Price: ${price.val()} Quantity: ${quantity.val()}</li>`);
            quantityOfProducts += +quantity.val();
            sumOfPRoducts += +price.val();
            capacity.val(quantityOfProducts);
            sum.val(sumOfPRoducts);
            inventory.append(li);

            if(quantityOfProducts === 150){
                disableFields();
                capacity.addClass('fullCapacity');
                capacity.val('full');
            }
        }
    }

    function reset() {
        product.val('');
        price.val(1);
        quantity.val(1);
        button.attr('disabled', true);
    }

    function disableFields() {
        product.attr('disabled', true);
        price.attr('disabled', true);
        quantity.attr('disabled', true);
        button.attr('disabled', true);
    }
}
