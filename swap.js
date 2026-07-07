let a=5;
let b=10;
console.log("Before swap: a= " + a + " b= " + b);
a=b;
b=a;
//wrong way ,because a is already changed to 10, so b will also be 10.
console.log("After swap: a= " + a + " b= " + b);

//proper way to swap two numbers
console.log("------proper way to swap two numbers------");
let x=5;
let y=10;
console.log("Before swap: x= " + x + " y= " + y);
const temp=x;
x=y;
y=temp;
console.log("After swap: x= " + x + " y= " + y);

//another way to swap

let m=5;
let n=10;
console.log("Before swap: m= " + m + " n= " + n);
[m,n]=[n,m];
console.log("After swap: m= " + m + " n= " + n);