function solve(){
    let obj = {
        extend: function(template) {
            let entries = Object.entries(template);
            for (const [key, value] of entries) {
                if(typeof value === 'function'){
                    Object.getPrototypeOf(this)[key] = value;
                }else{
                    this[key] = value;
                }
            }
        }
    }

    return obj;
}

let template = {
    extensionMethod: function () {console.log('exFunc')},
    extensionProperty: 'someString'
}
let obj = solve();
obj.extend(template);

console.log(Object.getPrototypeOf(obj));

  