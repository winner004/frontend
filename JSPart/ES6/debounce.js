// function debounce(fn,wait){
//    wait=wait||0;
//     var timer;
//     return function f() {
//         clearTimeout(timer);
//         timer=setTimeout(function () {
//             fn();
//         },wait);
//     }
//
// }

function debounce(fn,wait=2000) {
    var timeId=null;
    function helper() {
        if (timeId) {
            clearTimeout(timeId);
            timeId=null;
        }
        timeId=setTimeout(function () {   //创建的定时器记得一定要赋值给timeId，不然就会不起作用哦！！！
            fn();
        },wait);
    }
    return helper;

}

function calc() {
    console.log('calc trigger')
}
//
// calc()
// calc()
// calc()
// calc()



const debouncedCalc=debounce(calc);

debouncedCalc()
debouncedCalc()
debouncedCalc()
debouncedCalc()
