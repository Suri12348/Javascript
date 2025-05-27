/*this.authorName = ["surendra","suresh","lucky"];
this.books = ["harry potter","lord of the rings","game of thrones"];

this.bookDetails = function() {
    return books;

}
console.log(this);*/

//object context

var dateofbirth = "april 6, 2001";
var obj = {
    name : "suri",
    books : ["harry potter","lord of the rings","game of thrones"],
    achivement : ["won gold medal in olympics","won silver medal in commonwealth games"],
    getBookDetails : function(){
        console.log("this:",this);
        console.log("name:",this.achivement);
        console.log("dateofberth:",this.dateofbirth);

    }
}
obj.getBookDetails();