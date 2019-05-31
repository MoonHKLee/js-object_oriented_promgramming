class Person{
    constructor(name, age, grade){
        this.name = name;
        this.age = age;
        this.grade = grade;

    }
    introduce() {
        return 'my name is \''+this.name+'\'. and i\'m \''+this.age+'\'. and i \'m \''+this.grade+'\'grade.';
    };
}

class PersonPlus extends Person{
    constructor(name,age,grade,iq){
        super(name,age,grade);
        this.iq=iq;
    }

    introduce() {
        return 'my name is \''+this.name+'\'. and i\'m \''+this.age+'\'. and i \'m \''+this.grade+'\'grade.';
    };

    getIq(){
        return this.age;
    }
}

let jooJangGon = new PersonPlus('JooJangGon',21,2,150);
console.log(jooJangGon.getIq());