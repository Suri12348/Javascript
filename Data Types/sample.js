//console

console.log("Hlo surendra");
document.write("Hii surya bhai");
  //window.alert(10);
  console.log(20);

//variable,comments,datatypes
 var age = 30;
 console.log(age);

 var name = "surendra";
 console.log(name);

 //comments
  /*surendra*/
/*how many comment types:3 types 
1.var
2.let
3.const*/

var age = 24;
var name = "suri";
console.log(age);
console.log(name);

//let
let hero = "prabhas";
    age = 35;
console.log(hero);
console.log(age);

//const
const age = 20;
console.log(age);

const num=[1,2,3];
document.write(num);

//primitive data types
 let numberofItems = 2.3;
 let age = 24;
 let isActive = true;

 console.log(numberofItems);
 console.log(age);
 console.log(isActive);

 //string data types

 /*let name = "surendra";
 console.log(name);

 let marketposition = 1;
 let aboutjavascript =`javascript is no ${marketposition}programing language`;
 console.log(aboutjavascript);

 let marketposition = 1;
 let subjectName = "javascript";
 let aboutjavascript = `${subjectName}is no ${marketposition} programming language`;
 console.log(aboutjavascript);

 let topposition =1;
 let companyName = "surya software solutions";
 let aboutcomapany = `${companyName}is a no${topposition}company in the world`;
 console.log(aboutcomapany);*/

 // boolean
 let heisformer = true;
 console.log(heisformer);

//undefined
 let birthplace;
 console.log(birthplace); //undefined

 //null

 let box = null;
console.log(box); //null

//symbol

let symbol1 = Symbol("surendra");
console.log(symbol1);//123

//Non-primitive data types
//Arays
let HitMovies = ["Darling","Billa","premam","munna","Baahubali"];
console.log(HitMovies);
console.log(HitMovies[0]);
console.log(HitMovies[1]);  
console.log(HitMovies[2]);
console.log(HitMovies[3]);
let HeroNames =["prabhes","suri","suresh"];
console.log(HeroNames);

let Herobirthplace =[2000,2001,2002,2003];
console.log(Herobirthplace);
console.log(Herobirthplace[0]);
console.log(Herobirthplace[1]);

//Object
let EmployeeDetails = {
  "Name":"suresh",
  "Age" : 15,
  "Designation" : "developer",

}
console.log(EmployeeDetails);
 console.log(EmployeeDetails.Name);
 console.log(EmployeeDetails.Age);

 let customerDetails = {
  name :"surendra",
  age : 24,
  Draduate : "B.Tech",
  birthyear : 2000,
  AdharNo : "4105 6592 0000",
  movieNames :["Darling", "Billa", "Baahubali"],
  movieDetails:{
    heroname:"prabhas",
   role:"hero",
}
 }
 console.log(customerDetails);
 console.log(customerDetails["Name"]);
 console.log(customerDetails["age"]);

 console.log(customerDetails["movieNames"][0]);
console.log(customerDetails["movieNames"][2]);
console.log(customerDetails["movieDetails"].role);

//functions
let bookName = function(){
  console.log("surendra");
 
}
console.log(bookName);
console.dir(bookName);
