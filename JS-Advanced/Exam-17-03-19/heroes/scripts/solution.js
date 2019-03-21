function solve(){
    let sectionKingdom = $('#kingdom');
    sectionKingdom.find('button').on('click', rebuildKingdom);

    let map = $('#map div');

    let mapNames = [];
    for(let x of map){
        mapNames.push($(x).attr('id'));
    }

    function rebuildKingdom(e) {
        let kingdomInput = sectionKingdom.find('input');
        let kingdomText = kingdomInput.eq(0).val();
        let kingName = kingdomInput.eq(1).val();
        if(kingName.length >= 2){
            if(mapNames.includes(kingdomText.toLowerCase())){
                let h1 = $(`<h1>${kingdomText.toUpperCase()}</h1>`);
                let div = $('<div class="castle"></div>');
                let h2 = $(`<h2>${kingName.toUpperCase()}</h2>`);
                let fieldSet = $(`<fieldset><legend>Army</legend><p>TANKS - 0</p><p>FIGHTERS - 0</p><p>MAGES - 0</p><div class="armyOutput"></div></fieldset>`);
                let divKingdom = $(`#${kingdomText.toLowerCase()}`);
                divKingdom.append(h1, div, h2, fieldSet);
                divKingdom.css('display', 'inline-block');
            }
        }
    }

    $('#characters button').on('click', joinKingdom);

    function joinKingdom() {
        let checked = $('input:checked');

        let data = $('#characters div').eq(3).find('input');
        let characterName = data.eq(0).val();
        let kingsdomName = data.eq(1).val();

        if(kingsdomName.length > 0) {
            if (checked.val() !== undefined && characterName.length >= 2 && $(`#${kingsdomName.toLowerCase()}`).css('display') === 'inline-block') {
                let kingdom = $(`#${kingsdomName.toLowerCase()}`);
                let p = kingdom.find('p');
                for(let x of p){
                    let type = $(x).text();
                    let splitedType = type.split(' - ')[0].toUpperCase();
                    let countWar = +type.split(' - ')[1];
                    if(splitedType === checked.val().toUpperCase() + 'S'){
                        $(x).text(splitedType + ' - ' + (countWar + 1));
                        document.getElementsByClassName('armyOutput')[0].textContent += characterName + " ";
                        break;
                    }
                }
            }
        }
    }
}

solve();


