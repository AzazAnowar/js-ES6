class TeamMember{
    name;
    location;
    constructor(name,location){
        this.name = name;
        this.location = location;
    }
    provideFeedback(){
        console.log(`${this.name} thank you for your feedback.`)
    }
}

class Instructor extends TeamMember{
    designation = 'Web Course Instructor'
    team = 'web team'
    constructor(name, location){
        super(name, location);
    }
    startSupportSectin(time){
        console.log(`start the support session at ${time}`)
    }
}

// const real = new Instructor('Anowar','Dhaka');
// console.log(real);

class Developer extends TeamMember{
    designation = 'Web Developer'
    team = 'web team'
    tech;
    constructor(name, location,tech){
        super(name,location);
        this.tech = tech;
    }
    developFeature(feature){
        console.log(`please develop the ${feature}`)
    }
    release(version){
        console.log(`Please relese the version ${version}`)
    }
}

// const shuvo = new Developer('Shuvo', 'Dhaka','php');
// console.log(shuvo);

class JobPlacement extends TeamMember{
    designation = 'Job placement Comandos'
    team = 'Job placement'
    region;
    constructor(name, location, region){
        super(name,location);
        this.region = region;
    }
    startSupportSectin(time){
        console.log(`start the support session at ${time}`)
    }
    createQuiz(module){
        console.log(`Please create quiz for module ${module}`)
    }
}

const alia = new Developer('Alia Bhaat', 'Dhaka', 'React');
console.log(alia);
alia.provideFeedback();
alia.developFeature('React');

const bipasha = new JobPlacement('bipasha','Kolkata','India');
console.log(bipasha);
