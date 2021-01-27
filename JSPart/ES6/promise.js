const promise1=new Promise((resolve,reject) => resolve())
const promise2=promise1.then(null,function () {
    return 123
})

promise2.then(
    ()=>{
        console.log("已完成")
    },
    ()=>{
        console.log("已拒绝")
    }
)
