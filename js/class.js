// syntactic sugar

// function inside calss called methods
class Instructor{
    name;
    designation = 'Web Course Instructor'
    team = 'web team'
    location;
    constructor(name, location){
        this.name = name;
        this.location = location;
    }
    startSupportSectin(time){
        console.log(`start the support session at ${time}`)
    }
    createQuiz(module){
        console.log(`Please create quiz for module ${module}`)
    }
}

const aamir = new Instructor('Amir','Bangladesh');
console.log(aamir);
aamir.startSupportSectin('9.00');
aamir.createQuiz(60);

const solaiman = new Instructor('solaiman','US');
console.log(solaiman);