function acceptance() {
	let company = $('[name="shippingCompany"]');
    let product = $('[name="productName"]');
    let quantity = $('[name="productQuantity"]');
    let scrape = $('[name="productScrape"]');

    let inv = $('#warehouse');

    if(company.val() !== '' && product.val() !== ''
            && quantity.val() !== '' && scrape.val() !== ''
            && Number.isInteger(+quantity.val()) && Number.isInteger(+scrape.val())){
        if((quantity.val() - scrape.val()) > 0) {
            let div = $('<div></div>');
            let result = $(`<p>[${company.val()}] ${product.val()} - ${quantity.val() - scrape.val()} pieces</p>`);
            let btn = $('<button type="button">Out of stock</button>');
            btn.on('click', removeProduct);
            div.append(result, btn);
            inv.append(div);

            resetAllFields();
        }
    }

    function removeProduct(e) {
        let element = $(e.target);
        element.parent().remove();
    }

    function resetAllFields() {
        company.val("");
        product.val('');
        quantity.val('');
        scrape.val('');
    }
}