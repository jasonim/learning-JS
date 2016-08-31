function print(s) {
  console.log(s);
}

var print = function x(){
  console.log(typeof x);
};

x();
// ReferenceError: x is not defined

print();
// function

var add = new Function(
  'x',
  'y',
  'return (x + y)'
);

function f1() {}
f1.name; // 'f1'

var f2 = function () {};
f2.name; // ''

var f3 = function myName() {};
f3.name; // 'myName'

function f() {
  a();
  b();
  c();
}

f.toString();

var v = 1;

function f(){
  var v = 2;
  console.log(v);
}

f(); // 2
v; // 1


function f(a, b) {
  return a;
}

f(1, 2, 3); // 1
f(1); // 1
f(); // undefined

f.length; // 2

var f;
f();
f = function () {};

function f(a) {
  (a !== undefined && a !== null) ? a = a : a = 1;
  return a;
}

f(); // 1
f(''); // ""
f(0); // 0

var obj = [1, 2, 3];

function f(o){
  o = [2, 3, 4];
}
f(obj);

obj; // [1, 2, 3]

var a = 1;

function f(p) {
  window[p] = 2;
}
f('a');

a; // 2


function f(a, a) {
  console.log(a);
}

f(1, 2); // 2

f(1);

// 用于apply方法
myfunction.apply(obj, arguments);

// 使用与另一个数组合并
Array.prototype.concat.apply([1,2,3], arguments);

//slice方法和逐一填入新数组
var args = Array.prototype.slice.call(arguments);

// or

args = [];
for (var i = 0; i < arguments.length; i++) {
  args.push(arguments[i]);
}

var f = function(one) {
  console.log(arguments.callee === f);
};

f(); // true


//闭包（closure）
function f1() {
  var n = 999;
  function f2() {
    console.log(n);
  }
  return f2;
}

var result = f1();
result(); // 999

(function(){ /* code */ })();

// 写法一
var tmp = newData;
processData(tmp);
storeData(tmp);

// 写法二
(function (){
  var tmp = newData;
  processData(tmp);
  storeData(tmp);
}());
//上面代码中，写法二比写法一更好，因为完全避免了污染全局变量。

eval('var a = 1;'); //a 1

(function f() {
  'use strict';
  eval('var foo = 123');
  console.log(foo);  // ReferenceError: foo is not defined
})();
