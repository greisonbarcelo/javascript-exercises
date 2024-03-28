// const leapYears = function(year) {
//     let exception = [100, 400];
//     let leap = 4;

//     if(year % exception[0] === 0 && year % exception[1] !== 0){
//         return false;
//     } else if(year % leap === 0 || year % exception[0] === 0 && year % exception[1] === 0){
//         return true;
//     } 
//     else return false;
// };
//new code!
const leapYears = function(year){
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}
    
//leapYears(2000);
// Do not edit below this line
module.exports = leapYears;
