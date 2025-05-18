
//OBJECTS

// key value pair - value can be anything

// number , string , boolean , null , undefined , array , object

// let person = {
//     "Name" : "Surendra",
// }

let person = {
    Name : "surendra",
    Age : 25,
    isMarried : false,
    Adhar : "4105-6592-6638",
    cotactNo : 8431373954,
    hobbies : ["playing cricker","watching movies","forming","reading books"],
    faviriteMovies : ["KGF","Salaar","Darling"],
    favirateHero : "Prabhas",
    favirateHeroine : "Shruti Hassan",

    Aaddress :{
        city :"Bangalore",
        state :"Karnataka",
        country :"India",
        pincode : 560068,
        street :"Marthahalli",


    }


}

console.log(person.Name);
console.log(person.Age);
console.log(person.isMarried);
console.log(person.Adhar);
console.log(person.cotactNo);   
console.log(person.hobbies[2]);
console.log(person.faviriteMovies[1]);
console.log(person.favirateHero);
console.log(person.favirateHeroine);                
console.log(person.Aaddress.city);
console.log(person.Aaddress.state);
console.log(person.Aaddress.country);
console.log(person.Aaddress.pincode);       
console.log(person.Aaddress.street);
console.log(person.Aaddress); // Accessing the object   

// Array which contains the collection of objects.
// Example:

let cars =
    {
       brand : "BMW",
       model : "Bangalore",
       year :2000,


    }


console.log(cars.brand);
console.log(cars.model);
console.log(cars.year);