class parent{
    constructor(){
        this.FatherName="ahmed";
        this.MotherName="nupur";
    }
}
class crush extends parent {
  
    constructor (name){
        super ();
        this.name = name;   
    }
}
const baby = new crush("Dipika padukon");
const baby2 = new crush("payel");
console.log(baby,baby2);