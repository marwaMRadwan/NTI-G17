// let x : number|string = 5

// let x = (txt:string):string => {
//     return "hello"
// }

//oop
//encapsulation
// class User{
    //public protected private
//     private name:string
//     age:number
//     id:number
//     readonly x = 5
//     constructor(newName:string, newAge:number,newId:number){
//         this.name = newName
//         this.age = newAge
//         this.id = newId
//     }
//     //getter setter
//     set _name(val:string){ this.name = val}
//     get _name(): string{ return this.name}
//     show():string{
//         const data = `id: ${this.id} - name: ${this.name} - age: ${this.age}`
//         return data
//     }
// }

// const x = new User("marwa",36,1)
// x._name = "ahmed"
// x.show()
// console.log(x._name)
/* 
students => name, age, grade[] => {subject:"", val:} 
teachers => name, age, salary 
*/

interface Grade{
    subject:string
    val:number
}

class User{
    protected name:string
    age:number
    constructor(name:string, age:number){
        this.name=name
        this.age=age
    }
}

class Teacher extends User{
    salary:number
    constructor(name:string, age:number, salary:number){
        super(name, age)
        this.salary=salary
    }
    showData():string{
        return `${this.name}`
    }
}

class Student extends User{
    private grades : Grade[]
    constructor(name:string, age:number, grades:Grade[] = []){
        super(name,age)
        this.grades=grades
    }
    addGrade(data:Grade){
        this.grades.push(data)
    }
    set _grade(data:Grade){ this.grades.push(data)}
}



const t1 = new Teacher("marwa", 36, 1000)
// console.log(t1.name)
const s1 = new Student("marwa", 20)
s1.addGrade({subject:"Math", val:40})
s1._grade = {subject:"x", val:10}