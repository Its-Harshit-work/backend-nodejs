

function add(a, b){
    return a+b;
}

function sub(a,b){
    return a-b;
}
module.exports ={
    add,
    sub,
}

/*
There is module.exports that can be used only once because it overrides the value
*/
module.exports = {add, sub};
/*
On the contrary exports can be used multiple times
*/
// exports.add = (a,b) => (a+b);
// exports.sub = (a,b) => (a-b);