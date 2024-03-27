const repeatString = function(word, times) {
    let newWord = '';
    if(times < 0){
        return 'ERROR';
    }
    for (let i = 1; i <= times; i++){
        newWord += word;
    } return newWord;
};

// Do not edit below this line
module.exports = repeatString;
