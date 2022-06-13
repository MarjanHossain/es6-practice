class student {
    constructor(sId, sName) {
        this.id = sId;
        this.name = sName;
        this.school = "moharani sharnamoyi school";
    }

}
const student1 = new student(9,"suvo");
const student2 = new student(11,"payel");
console.log(student1, student2);
console.log(student1.name, student2.name);