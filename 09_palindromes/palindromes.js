const palindromes = function (word) {
    let rev = '';
    let finalWord = word.toLowerCase().replace(/[\.,?! ]/g, "");
    // console.log(finalWord);
    
    for(let i = finalWord.length-1; i >= 0; i--){
        rev += finalWord[i];
    } 
    // console.log(finalWord);
    // console.log(rev);
    // console.log(finalWord === rev);
    return finalWord === rev;

    
};
//palindromes('A car, a man, a maraca.');
// Do not edit below this line
module.exports = palindromes;
