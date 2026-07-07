// 12 inch ==1 feet

function inchToFeet(inch){
    const feet=parseInt(inch/12);
    const remainingInches=inch%12;
    const results=feet + " feet " + remainingInches + " inches.";
    return results; 

}

const result=inchToFeet(75);
console.log(result);

function mileTOKilometer(mile){
    const kilometer=mile*1.60934;
    return kilometer;
}

const kilometerResult=mileTOKilometer(5);
console.log(kilometerResult +" kilometers.");