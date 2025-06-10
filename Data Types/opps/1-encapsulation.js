class School{
    #SchoolName;
    #SchoolLocation;
    constructor(name,location){
        this.#SchoolName = name;
        this.#SchoolName =location;

    }
    enrrollStudent(){
        let student={
            name : "suri",
            ID :123,

        }
        console.log(`student ${student.name} has enrolled and school name is ${this.#SchoolName}`);
    }
}
new School("xyz school","Bengaluru");
school.enrollstudent();