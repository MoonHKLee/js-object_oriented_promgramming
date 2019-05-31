console.log(Math.PI);
console.log(Math.random());
console.log(Math.floor(Math.PI));

let MyMath = {
    PI:Math.PI,
    random:function () {
        return Math.random();
    },
    floor:function (val) {
        return Math.floor(val);
    }
};
console.log(MyMath.PI,MyMath.random(),MyMath.floor());

function Person(name,age,grade){
    this.name=name;
    this.age=age;
    this.grade=grade;
}

let person = new Person('이문혁',26,4)
person.age = 20;
person.grade = 3;
person.name = '황창훈';

console.log(person)

