/**
 * function takes an array as parameter
 * removes duplicate elements from the array
 * returns the array without duplicates
 */

const numbers=[1,2,3,4,5,6,7,8,9,1,2,3,4,5];
const stringArray=["apple","banana","orange","apple","grape","banana"];

function removeDuplicate(arr){
    const uniqueArray=[];
    for(const element of arr){
        //uniqueArray.push(element);karon check korbo new array modhe ache kina,false means not found, true means found so do not push
        if(uniqueArray.includes(element)===false){
            uniqueArray.push(element);
        }
    }
    return uniqueArray;
}

const result1=removeDuplicate(numbers);
const result2=removeDuplicate(stringArray);
console.log(result1);
console.log(result2);