let superObj = {superVal:'super'};
// let subObj = {subVal:'sub'};
//
// subObj.__proto__ = superObj;

let subObj = Object.create(superObj);
subObj.subVal = 'sub';
debugger;


console.log(subObj.superVal);
console.log(subObj.subVal);

let kim = {
    name: 'leeMoonHyuk',
    age: 26,
    grade: 4,
    introduce: function(){
        return this.name+':'+this.age+"->"+this.grade;
    }
};

let joo = {
    name:'jooJangGon',
    age: 21,
    grade:2
};

let ooh = Object.create(joo);

ooh = {
    name: 'ohJoonHyun',
    age : 25,
    grade: 3
};

joo.__proto__ = kim;
console.log(joo.introduce());
console.log(ooh.introduce());