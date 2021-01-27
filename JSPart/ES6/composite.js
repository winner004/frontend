//composite函数需要依次链式的执行里面的函数

function add(a,b) {
    return a+b;
}

function square(a,b) {
    return a*b;
}

function plusone(c) {
    return c+1;
}

var addSquareAndPlusOne = composite(add,square,plusone)
function composite(add,square,plusone) {
    return function () {

    }
}
addSquareAndPlusOne(1,2)