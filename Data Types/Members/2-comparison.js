
 /* How to use the and(&&) or(||). 

             && (AND) Operator
            ┌─────────┬─────────┬──────────┐
            │ Input A │ Input B │ Output   │
            ├─────────┼─────────┼──────────┤
            │   true  │   true  │   true   │
            │   true  │  false  │  false   │
            │  false  │   true  │  false   │
            │  false  │  false  │  false   │
            └─────────┴─────────┴──────────┘*/

            
//AND && Operator              
/*let customerId =123;
let customerName="suri" ;
let empAddress ="Bengaluru"     

console.log(customerId==123);//true
console.log(customerName=="suri");//true
console.log(empAddress=="kadapa");//false

let companyName= "SRD";
let companyID = 143;
let companylocation="Bengaluru";
let companystrength= 13000;


console.log(companyName=="SRD" && companyID==143);//true
console.log(companyID==143 && companylocation=="Hyderabad");//false
console.log(companystrength==1200 && companyName=="SRD");//false
console.log(companylocation=="kadapa" && companyID==12);//false*/

/*||(OR) Operator
            ┌─────────┬─────────┬──────────┐
            │ Input A │ Input B │ Output   │
            ├─────────┼─────────┼──────────┤
            │   true  │   true  │   true   │
            │   true  │  false  │   true   │
            │  false  │   true  │   true   │
            │  false  │  false  │  false   │
            └─────────┴─────────┴──────────┘*/
// || (OR) OPerator

let Name ="surendra";
let studentId=123;
let college="SJC";
let Branch="ECE";

console.log(Name=="surendra" || studentId==123);//true
console.log(studentId==123 || college=="S")//true
console.log(college=="SRC" || Name=="surendra");//true
console.log(Branch=="cse" || studentId==20);//false


if(Name== "surendra" || studentId==123);
console.log(`Employee  Name is ${Name}, id  is ${studentId}`);
 