//Return a function
function getBookDetails(bookName , authorName){
    let bookDetails ="";
    bookDetails = "Book Name :" + bookName +"  "+ "Author Name:" + authorName;
    return bookDetails;
}
console.log(getBookDetails("surendra","suresh"));

//Non-return function

function showBookDetails(bookname,authorName){
    let BookDetails="";
    BookDetails = "Book Name :" + bookname +"  "+ "Author Name:" + authorName;
}

let showMessageofBook = showBookDetails("surendra","suresh");
console.log(showMessageofBook);