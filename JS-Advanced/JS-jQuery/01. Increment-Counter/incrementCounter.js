function increment(selector) {
    console.log(selector);
    
    let container = $(selector);
    let fragment = document.createDocumentFragment();
    let textArea = $('<textarea>');
    let incrementBtn = $('<button>Increment</button>');
    let addBtn = $('<button>Add</button>');
    let list = $('<ul>');

    textArea.val(0);
    textArea.addClass('counter');
    textArea.attr('disabled', true);

    incrementBtn.addClass('btn');
    incrementBtn.attr('id', 'incrementBtn');
    addBtn.addClass('btn');
    addBtn.attr('id', 'addBtn');

    list.addClass('results');

    $(incrementBtn).click(() => textArea.val(+textArea.val() + 1));

    $(addBtn).click(() => {
        let li = $(`<li>${textArea.val()}</li>`);
        li.appendTo(list);
    });

    textArea.appendTo(fragment);
    incrementBtn.appendTo(fragment);
    addBtn.appendTo(fragment);
    list.appendTo(fragment);

    container.append(fragment);
}
