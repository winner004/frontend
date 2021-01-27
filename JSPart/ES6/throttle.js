// //高频触发时间，在n秒内只会执行一遍，节流会稀释函数的执行效率
// function throttle(fn,timing) {
//     var trigger;
//     return function () {
//         if(trigger) return;
//         trigger=true;
//         fn();
//         setTimeout(function () {
//             trigger=false;
//         },timing);
//     }
//
// }


//止水讲的这个不是特别明白
function throttle(fn,threshhold) {
    var last
    var timer
    threshhold||(threshhold=250)
    return function () {
        var context=this
        var args=agruments

        var now=new date()
        console.log(last&&now)
        console.log(last&&now<last+threshhold)
        if(last&&now<last+threshhold){
            clearTimeout(timer)
            timer=setTimeout(function () {
                last=now
                fn.apply(context,args)
            },threshhold)
        }else {
            last=now
            fn.apply(context,args)
        }
    }
}


function calc(context) {
    console.log(context)
}
throttle(calc('calc trigger'))
throttle(calc('calc trigger'))
throttle(calc('calc trigger'))
throttle(calc('calc trigger'))
throttle(calc('calc trigger'))