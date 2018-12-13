// function Mom(firstName,lastName,eyeColor,hairColor){
//     this.firstName='Alice', 
//      this.lastName='Wong', 
//      this.eyeColor='brown', 
//      this.hairColor='black' 
// } 

// var daughter=new Mom('Ilene','brown')
// Mom.prototype.showInfo=function(){
//     console.log(this.firstName)
//     console.log(this.lastName)
//     console.log(this.eyeColor)
//     console.log(this.hairColor)
// }

// console.log(daughter.showInfo());

// // Given this Person type:


// function Person(name) { 
//     this.name = name; 
//     this.friends = []; 
// } 

// Person.prototype.addFriend = function(friend) { 
//     this.friends.push(friend); 
// }; 

// Person.prototype.createGreeting = function(other) { 
//     return 'Yo ' + other.name + '! from ' + this.name + '.'; 
// };

// Person.prototype.greet = function(other) {
//     console.log(this.createGreeting(other)); 
// };

class Person{
    constructor(name,friends)
    {
        this.name=name;
        this.friends=friends;
    }
    
    addFriend(friend){
       return  this.friends.push(friend);
    }

    createGreeting(other){
         return 'Yo'+other.name +'! from ' + this.name + '.';
    }

    greet(other){
        console.log(this.createGreeting(other))
    }
    lazyGreet(){
        setTimeout(function(){
            console.log("Hello");
        },3000)
    }

}

var person =new Person('sobbha',['vam','var'])
console.log(person.lazyGreet())



function Ninja(x){
    var feints=function(){
        return feints
    }
    return feints()
}
 console.log()

