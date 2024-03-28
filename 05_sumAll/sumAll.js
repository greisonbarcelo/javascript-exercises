const sumAll = function(numOne, numTwo) {
    let sum = 0;
    
    if(numOne < 0 || typeof numOne === 'string' || typeof numTwo === 'string' || Array.isArray(numOne) || Array.isArray(numTwo)){
        return "ERROR";
    } else if(numOne < numTwo){
        for(let i = numOne; i <= numTwo; i++){
            //console.log(i);
            sum += i;
        }
            return sum;
            //console.log(sum);
    } else if(numTwo < numOne){
        for(let i = numTwo; i <= numOne; i++){
            //console.log(i);
            sum += i;
        }
        return sum;
        //console.log(sum);
    } else return "ERROR";
} 



    
//sumAll(123, 1);
// Do not edit below this line
module.exports = sumAll;
