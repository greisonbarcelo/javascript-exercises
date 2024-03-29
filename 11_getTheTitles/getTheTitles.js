const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]

const getTheTitles = function() {
    let newArr = [];
    for(let i = 0; i < books.length; i++){
        newArr[i] = books[i].title;
        //console.log(books[i].title);
    } return newArr;
    //console.log(newArr);
};
//getTheTitles();
// Do not edit below this line
module.exports = getTheTitles;
