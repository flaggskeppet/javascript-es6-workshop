/*
* Inga egentliga klasser, wrapper runt function objektet
* */

class Task {}
console.log(typeof Task)

// /*
// * Men man kan härleda typ
// * */
//
let task = new Task();
console.log(task instanceof Task)

/*
*
* Metoder och konstruktor i klasser. (inga komma mellan metoderna som i function literals)
* */

class Task {
    constructor(){
        console.log('creating task')
    }

    showId() {
        console.log('123');
    }
}

let task = new Task();
task.showId();

/*
* Extends and super
* */

class Project{
    constructor(){
        console.log('Constructing project');
    }
}

class SoftwareProject extends Project{}
let p = new SoftwareProject();

/*
* Anropa en ärvd klass med super()
* */

class Project{
    constructor(){
        console.log('Constructing project');
    }
}

class SoftwareProject extends Project{
    constructor(){
        super(); // <-- Anropet krävs. JS måste veta när den ska anropa förälderns konstruktor
        console.log('Constructing software project');
    }

}

let p = new SoftwareProject();


/*
* Metoder i klasshierarkier
*  1. Metoder som definierats i basklass kan anropas från en ärvd klass
 * 2. En override av metod kräver inget nyckelord
 * 3. Ett anrop till basklassens metod görs med super
* */

class Project{
    getTaskCount() {
        return 50;
    }
}

class SoftwareProject extends Project{
    getTaskCount(){
        return 75;
        // sen
        //return super.getTaskCount() + 10;
    }
}

let p = new SoftwareProject();
console.log(p.getTaskCount());