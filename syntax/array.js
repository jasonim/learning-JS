var arr = ['a', 'b', 'c'];
var arr1 = [
  {a:1},
  [1, 2, 3],
  function() {return true;}
];

arr1[0];
arr1[1];
arr2[2];

typeof [1, 2, 3];
Object.keys(arr);
arr.length;

arr.length = 0;

//类似数组的对象，但是无法使用数组的方法
var obj = {
  0: 'a',
  1: 'b',
  2: 'c',
  length: 3
};

// arguments对象
function args() { return arguments; }
var arrayLike = args('a', 'b');

arrayLike[0]; // 'a'
arrayLike.length; // 2
arrayLike instanceof Array; // false

// DOM元素集
var elts = document.getElementsByTagName('h3');
elts.length; // 3
elts instanceof Array; // false

// 字符串
'abc'[1]; // 'b'
'abc'.length; // 3
'abc' instanceof Array; // false

// forEach方法
function logArgs() {
  Array.prototype.forEach.call(arguments, function (elem, i) {
    console.log(i+'. '+elem);
  });
}

//检查某个键名是否存在的运算符in，适用于对象，也适用于数组
2 in arr;  // true
'2' in arr; // true
4 in arr; // false

var a = [1, 2, 3];
delete a[1];

a[1]; // undefined
a.length; // 3
