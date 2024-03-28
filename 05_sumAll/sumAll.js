const sumAll = function(num1, num2) {
    let finalSum = 0;
    let error = "ERROR";
    
    let biggerValue = Math.max(num1, num2);
    let smallerValue = Math.min(num1, num2);
    //console.log(biggerValue);
    if(!Number.isInteger(num1, num2) || !Number.isInteger(num2) || Array.isArray(num1, num2)){
        return error;
    } else if(biggerValue >= 0 && smallerValue >= 0){
        for(let i = smallerValue; i <= biggerValue; i++){
            finalSum += i;
        }
    } else return error;
    return finalSum;
}
    
//sumAll(1, 4);
// Do not edit below this line
module.exports = sumAll;
