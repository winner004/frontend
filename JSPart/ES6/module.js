//commonJS规范的使用   通过require加载一个模块，通过exports导出一个模块
// const maduleA=require('./moduleA')
// console.log(maduleA)


//commonJS的结构和重命名
// const moduleA=require('./moduleA')
// const {text:anotherText}=moduleA;   //这两句可以简写为一句   const {text:anotherText}=require('./moduleA')
// console.log(anotherText)

// ESmodule的写法    //这里的{ text }中的花括号不是一个对象，是ESmodule中import中的一个语法格式，
                    // 所以不能写成{text:'anotherText'},ESmodule里的重命名就要使用as关键字，{text as anotherText}
//这里ESmodule要配置对应的环境才跑得起来
// import { text as anotherText } from './moduleA'
//
// console.log(anotherText)

//动态import
import ("./module")

//总的来说，commonJS遵循了js之前的一些规范，可以导入对象，写成解构的形式
//但是ESmodule就不能这么做，得遵循相关的规范，有特殊的语法在里面

//模块化解决的是代码同步引入，没有隔绝作用域引起的冲突问题，模块化方便我们组织代码， 同时隔绝变量作用域
//import是按需引入 静态阶段引入就可以分析出来，就可以知道里面有什么东西   是引擎处理的引入，是通过关键字
//require不是按需引入 要在执行时候才去引用它  js处理的引入


//cmd规范比较小众
//umd 并不能算是一个模块化的规范，只能算是一个抹平模块化差异的方式，并不是单独的规范

