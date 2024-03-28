const removeFromArray = function(passedArray, ...args) {
    let newArray = [];
    passedArray.forEach(items => {
        if(!args.includes(items)){
            newArray.push(items);
        }
    });
    return newArray;
};
//removeFromArray([1, 2, 3, 4], 3);
// Do not edit below this line
module.exports = removeFromArray;
