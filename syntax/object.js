// var o = {
//   p: 'Hello World'
// };
// //对象的生成方法，通常有三种方法。除了像上面那样直接使用大括号生成（{}），还可以用new命令生成一个Object对象的实例，或者使用Object.create方法生成。
// var o1 = {};
// var o2 = new Object();
// var o3 = Object.create(null);

// // 但是，如果键名不符合标识名的条件（比如第一个字符为数字，或者含有空格或运算符），也不是数字，则必须加上引号，否则会报错。



// var o4 = {
//   p: function (x) {
//     return 2 * x;
//   }
// };

// o4.p(1);

// //属性可以动态创建，不必在对象声明时就指。
// var obj = {};
// obj.foo = 123;
// obj.foo; // 123
// //为了避免这种歧义，JavaScript规定，如果行首是大括号，一律解释为语句（即代码块）。如果要解释为表达式（即对象），必须在大括号前加上圆括号。
// ({ foo: 123});
// //如果没有圆括号，eval将其理解为一个代码块；加上圆括号以后，就理解成一个对象。
// eval('{foo: 123}'); // 123
// eval('({foo: 123})'); // {foo: 123}
// Object.keys(o);
// //删除一个不存在的属性，delete不报错，而且返回true。
// delete o.p; // true

// var o5 = Object.defineProperty({}, 'p', {
//   value: 123,
//   configurable: false
// });

// o5.p; // 123
// delete o5.p; // false

// //delete命令只能删除对象本身的属性，无法删除继承的属性（关于继承参见《面向对象编程》一节）。
// delete o.toString; // true
// o.toString; // function toString() { [native code] }

// // in运算符
// o = { p: 1 };
// 'p' in o;
// o = {a: 1, b: 2, c: 3};

// for (var i in o) {
//   console.log(o[i]);
// }
// obj = {
//   x: 1,
//   y: 2
// };
// var props = [];
// i = 0;

// for (props[i++] in obj);

// props ;

// // name 是 Person 本身的属性
// function Person(name) {
//   this.name = name;
// }

// // describe是Person.prototype的属性
// Person.prototype.describe = function () {
//   return 'Name: '+this.name;
// };

// var person = new Person('Jane');

// // for...in循环会遍历实例自身的属性（name），
// // 以及继承的属性（describe）
// for (var key in person) {
//   console.log(key);
// }

// // 例一
// with (o) {
//   p1 = 1;
//   p2 = 2;
// }
// // 等同于
// o.p1 = 1;
// o.p2 = 2;

// // 例二
// with (document.links[0]){
//   console.log(href);
//   console.log(title);
//   console.log(style);
// }
// // 等同于
// console.log(document.links[0].href);
// console.log(document.links[0].title);
// console.log(document.links[0].style);

// o = {};

// with (o) {
//   x = "abc";
// }

// o.x; // undefined
// x; // "abc"

// with (o) {
//   console.log(x);
// }

/*单纯从上面的代码块，根本无法判断x到底是全局变量，还是o对象的一个属性。这非常不利于代码的除错和模块化，编译器也无法对这段代码进行优化，只能留到运行时判断，这就拖慢了运行速度。因此，建议不要使用with语句，可以考虑用一个临时变量代替with。*/

var str = "Hello = name !";

var o = {
  name: 'Alice'
};

(function(x, y){
    alert(x + y);
})(2, 3);
// var r = (new Function('obj', str))();
// console.log(r);
// function tmpl(str, obj) {
//   str = 'var p = [];' +
//     'with (obj) {p.push(' + parser(str) + ')};' +
//     'return p;';
//   var r = (new Function('obj', str))(obj);
//   return r.join('');
// }

// tmpl(str, o);
// "Hello Alice!"
