"use strict";
var n = "4444";
n = "555";
var m = undefined;
var o = null;
var q;
q = ["1", "2", "3"];
console.log(q);
var reverse = [1, 2, 3];
var Gun;
(function (Gun) {
    Gun[Gun["q"] = 1] = "q";
    Gun[Gun["w"] = 2] = "w";
    Gun[Gun["e"] = 3] = "e";
})(Gun || (Gun = {})); // 枚举项  一般用英文和数字， 枚举值 用整型数字
//  默认枚举值是从零开始的数值
var a = Gun.q;
/*888888888888888888888888ts 函数*/
function fffff() {
    return "1111111111";
}
function jump(cname) {
    console.log(cname);
}
console.log(jump("Pcheng"));
function jump1(cname) {
    if (cname === void 0) { cname = "oo"; }
    console.log("P");
}
console.log(jump1());
function jump2(cname, csex) {
    if (cname === void 0) { cname = "oo"; }
    var cage = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        cage[_i - 2] = arguments[_i];
    }
    console.log(arguments);
}
console.log(jump2(undefined, "girl"));
