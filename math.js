const smalls_number=Math.min(5, 10, 15, 20);
console.log(smalls_number);
const maxs_number=Math.max(5, 10, 15, 20);
console.log(maxs_number);

//diffence between two numbers
const difference=Math.abs(10-20);
console.log("difference: " + difference);

//rounding numbers,kacher number nibe. like 2.3 =2 ,2.5=3
const roundedNumber=Math.round(4.5);
console.log("rounded number: " + roundedNumber); 

//random number generator mane 0 to 1 er modhe random number generate korbe
console.log("------random number------");
const randomNumber=Math.random();
console.log("random number: " + randomNumber);

//if we want to generate random number between 1 to 100 then we can do like this
console.log("------random number to round------")
const randomNumber1=Math.round(Math.random()*100);
console.log("random number between 1 to 100: " + randomNumber1);