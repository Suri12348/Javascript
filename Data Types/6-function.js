//Call function
//Apply function
//bind function

let officeDetails = {
    Name :"SRDsolutions",
    founder:"surendra",
    getofficeDetails:function(argument1,argument2){
      console.log(this.Name);
        console.log(this.founder); 
        console.log(this);
        console.log(argument1);
        console.log(argument2);
        
    }
}  
let VTU ={
  Name :"college",
  founder:"suresh",

}

//officeDetails.getofficeDetails.call(VTU,"2001","2,19");
//officeDetails.getofficeDetails.apply(VTU,["2001","2,19"]);
console.log(officeDetails.getofficeDetails.bind(VTU,"2001","2,19"));
