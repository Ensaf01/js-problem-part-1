/** 
 * function takes an array as parameter 
 * give me the average of odd numbers in that array
 * 
 */

function oddAverage(arr){
    let sum=0;
    let count=0;
    for(const num of arr){
        if(num%2!==0){
            sum+=num;
            count++;
        }
        
    }
    return sum / count;
}

const result=oddAverage([42,13,58,65,81]);
console.log(result);