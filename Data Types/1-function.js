/*function showBookDetails(bookname,authorName,dateofbrith,publishdate){
 console.log("Book Name :",bookname);
console.log("Author Name :",authorName);
console.log("Date of Brith :",dateofbrith);
console.log("publish Date :",publishdate);



}
showBookDetails("surendra","suresh","jun 5,2001",2000);*/

//optional parameters

function showBookDetails(surendra,suresh,...additionalparams){
    console.log(additionalparams);
    console.log("Book Name :",surendra);
    console.log("Author Name :",suresh);
    console.log("Date of Brith :",additionalparams[2]);
    console.log("publish Date :",additionalparams[3]);


}
showBookDetails("surendra","suresh","jun 5,2001",2000);