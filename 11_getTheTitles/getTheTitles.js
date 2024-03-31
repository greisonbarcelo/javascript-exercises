const getTheTitles = function(books) {
    // let newArr = [];
    // for(let i = 0; i < books.length; i++){
    //     newArr[i] = books[i].title;
    //     //console.log(books[i].title);
    // } return newArr;
    // //console.log(newArr);

    return books.map(book => book.title)
};
//getTheTitles();
// Do not edit below this line
module.exports = getTheTitles;
