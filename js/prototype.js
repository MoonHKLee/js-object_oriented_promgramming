function Person(name,age,grade){
    this.name=name;
    this.age=age;
    this.grade=grade;
}

Person.prototype.introduce= function () {
    return 'my name is \''+this.name+'\'. and i\'m \''+this.age+'\'. and i \'m \''+this.grade+'\'grade.';
};

let leeMoonHyuk = new Person('이문혁',26,4);

leeMoonHyuk.introduce =function(hello){
    return hello;
};

let hwangChangHoon = new Person('황창훈',20,1);
console.log(leeMoonHyuk.introduce('i\'m babo'));
console.log(hwangChangHoon);