const fibonacci = function(num) {
    if(num >= 0){
        let fib = 0;
        let defaultOne = 0;
        let defaultTwo = 1;
        for(let i = 1; i <= num; i++){
            fib = defaultOne + defaultTwo;
            defaultTwo = defaultOne;
            defaultOne = fib;
            //console.log(fib);
        }
        //console.log(fib);
        return fib;
    } else return "OOPS";
};

//fibonacci(7);
// Do not edit below this line
module.exports = fibonacci;
