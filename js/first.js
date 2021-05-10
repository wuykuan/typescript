function greeter(person) {
    return "Hello, " + person;
}
var user = true;
document.body.innerHTML = greeter(user);
(function () {
    var c = 8;
    console.log(typeof c);
})();
// const aa: User = { name: "lucifer", age: 17 };
// ts泛型
/**
 * ts里面类型就是具体值的集合
 * 简单理解值的集合就是类型，平时写代码基本都是对值编程，TS 提供了很多类型（也可以自定义）以及很多类型操作帮助我们限定值以及对值的操作。
 */
function t(name, age) {
    return "hello, " + name + "\uFF0C\u4ECA\u5E74\u4F60" + age + "\u5C81";
}
console.log(t("lucifer", 28));
// T类型， T 是一个抽象类型，只有在调用的时候才确定它的值
function id(arg) {
    return arg;
}
1;
var a = ["1"];
