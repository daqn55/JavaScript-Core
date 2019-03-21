function addSticker(){
    let title = $('.title');
    let content = $('.content');

    let stickerList = $('#sticker-list');
    if(title.val() !== '' && content.val() !== ''){
        let liElement = $('<li class="note-content"></li>');
        let aElement = $('<a class="button">x</a>');
        aElement.on('click', removeElement);
        let h2Element = $(`<h2>${title.val()}</h2>`);
        let hrElement = $('<hr>');
        let pElement = $(`<p>${content.val()}</p>`)

        liElement.append(aElement, h2Element, hrElement, pElement);
        stickerList.append(liElement);

        title.val("");
        content.val("");
    }

    function removeElement(e) {
        let element = $(e.target);
        element.parent().remove();
    }
}
