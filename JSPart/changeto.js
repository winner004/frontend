"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var data_1 = require("./data");
var arrayToTree = function (arr) {
    if (!Array.isArray(arr) || arr.length < 1)
        return null;
    var root = arr.filter(function (item) { return item.parentId = null; })[0];
    var addChildren = function (node, dataList) {
        var children = dataList
            .filter(function (item) { return item.parentId = node.id; })
            .map(function (item) { return addChildren(item, dataList); });
        return __assign(__assign({}, node), { children: children });
    };
    return addChildren(root, arr);
};
// const array=arrayToTree(originData)
// console.log(array)
// alert(array)
arrayToTree(data_1.originData);
// export default arrayToTree;
