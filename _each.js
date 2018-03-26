const _ = {}

_.each = function(list, callback) {
    if (Array.isArray(list) == true)
    for (i = 0; i < list.length; i++){
        callback(list[i], i, list)
    } else if (typeof list == "object") {
        for (prop in list) {
            callback(prop, list[prop], list)
        }
    }
}

const x = [5,4,3,2,1]
var obj = {name: "white", age: 52, height: "6ft"};

_.each(x, function(y){
    console.log(y)
})

_.each(obj, function(y,x ) {
    console.log(`${y}: ${x}`);
});