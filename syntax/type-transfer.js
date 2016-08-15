// 数值：转换后还是原来的值
Number(324); // 324

// 字符串：如果可以被解析为数值，则转换为相应的数值
Number('324'); // 324

// 字符串：如果不可以被解析为数值，返回NaN
Number('324abc'); // NaN

// 空字符串转为0
Number(''); // 0

// 布尔值：true 转成1，false 转成0
Number(true); // 1
Number(false); // 0

// undefined：转成 NaN
Number(undefined); // NaN

// null：转成0
Number(null); // 0

parseInt('42 cats'); // 42
Number('42 cats'); // NaN

Number('\t\v\r12.34\n'); // 12.34

String(123); // "123"
String('abc'); // "abc"
String(true); // "true"
String(undefined); // "undefined"
String(null); // "null"

String({a: 1}); // "[object Object]"
String([1, 2, 3]); // "1,2,3"
