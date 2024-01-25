//javaScript Object Oreinted Programming

//ES5
function AnimalES5(name){
    this.name = name;
}
AnimalES5.prototype.getName = function(){
    return this.name;
}

var animalES5 = new AnimalES5("Kitty");
console.log(animalES5.getName());

//ES6
class AnimalES6{
    constructor(name){
        this.name = name;
    }
    getName(){
        return this.name;
    }
}
var animalES6 = new AnimalES6("WanWan");
console.log(animalES6.getName());
