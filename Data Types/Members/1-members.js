var author = {
    name : "surendra",
    dateofBirth : "April 6,2001",
    BookName :["suresh","lucky"],
    getbookcount : function(){
        //console.log("total Books are 2");
      return "Total Books are 2"
    }

};
console.log(author.name);
console.log(author.dateofBirth);
console.log(author.BookName);
console.log(author.getbookcount());
//author.getbookcount();

//Members of Array

var books = ["suresh","lucky","surya"];
console.log(books.length);//3
console.log("latest Book",books); 