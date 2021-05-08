let n : string = "4444";
n = "555";
let m : undefined = undefined;
let o : null = null;
let q : string[]
q = ["1","2","3"];
console.log(q);
let reverse: Array<number> = [1,2,3];
enum Gun {
    q = 1,
    w = 2,
    e = 3
}  // 枚举项  一般用英文和数字， 枚举值 用整型数字
   //  默认枚举值是从零开始的数值

let a: Gun = Gun.q;

/*888888888888888888888888ts 函数*/
function fffff(): string {
    return "1111111111"
}
function jump(cname: string): void {
    console.log(cname)
}
console.log(jump("Pcheng"));
function jump1(cname: string = "oo"): void {
    console.log("P")
}
console.log(jump1());
function jump2(cname: string = "oo",csex: string, ...cage: number[]): void {
    console.log(arguments)
}
console.log(jump2(undefined, "girl"));