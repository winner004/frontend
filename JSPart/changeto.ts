import {Item,Node,originData,treeData} from "./data";

const arrayToTree=(arr:Item[])=>{
    if(!Array.isArray(arr)||arr.length<1) return null;
    const [root]=arr.filter(item =>item.parentId=null)
    const addChildren=(node,dataList:Item[])=>{
        const children = dataList
            .filter(item=>item.parentId=node.id)
            .map(item=>addChildren(item,dataList));
        return{...node, children };
    }
    return addChildren(root,arr);
}
// const array=arrayToTree(originData)
// console.log(array)
// alert(array)
arrayToTree(originData)
// export default arrayToTree;