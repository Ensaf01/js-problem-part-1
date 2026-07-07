/*
* year will be a leap year if it is divisible by 4 but not by 100, except if it is divisible by 400.
*/

function isleapYear(year){
    if(year%4==0 && year%100!=0 || year%400==0){
        return true;
    }
    else{
        return false;
    }
}

const result=isleapYear(2043);
//const result2=isleapYear(2024);
//const result3=isleapYear(2000);
console.log(result);    