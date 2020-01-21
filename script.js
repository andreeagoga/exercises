///////////////////////////////////CONCEPTS////////////////////////////////////////////////////////////////////////////////
//SERIALIZATION-DESERIALIZATION
//Converting a string to a native object is called deserialization, while converting a native object to a string so it can be
// transmitted across the network is called serialization.

//DELEGATION
//Because of the way JavaScript works, with the prototype chain, etc., the sharing of functionality between objects is often
// called delegation





//// TARGET
//
// let divs = document.querySelectorAll("div");
//
// function colored(){
//     for(let i=0; i<divs.length; i++){
//         divs[i].onclick = bgChange;
//     }
// }
//
// function bgChange(e) {
//     const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
//     e.target.style.backgroundColor = rndCol;
// }
//
// function random(number) {
//     return Math.floor(Math.random() * (number+1));
// }
//
// colored();


////OBJECT
// let person = {
//     // name : ['Andreea', 'Ioana'],
//     name : {
//         first: ['Andreea'],
//         second: ['Ioana'],
//     },
//     age : ['27'],
//     gender : ['female'],
//     details : function () {
//         // alert ("Name:" + this.name[1] + " Age:" + this.age + " Gender:" + this.gender)
//         alert ("Name:" + this.name.second + " Age:" + this.age + " Gender:" + this.gender)
//     }
// };
// console.log(person.details());
// alert(person['name']['first']);
//
// //add a new member to the object
// person['id'] = [1];
// alert(person.id);
//
// //change the value of a member
// person.id =[2];
// alert(person.id);



// // CONSTRUCTOR
// function Person(name, age){
//     this.name = name;
//     this.age = age;
//     this.details = function () {
//         alert("Hello " + this.name);
//     };
// }
// //create new person object
// let person1 = new Person("Andreea", "27");
// let person2 = new Person("Ioana", "27");
// //access the new object
// person1.details();
// person2.details();
// //create a new person based as person1; will have all person1 characteristics
// let person3 = Object.create(person1);
// //create a new person based as person1; with new characteristics
// let person4 = new person1.constructor("A", "3");
// let person5 = new Person("A", "3");
// //add a new property to the constructor
// Person.prototype.gender = "male";

//CLASS
// class Person {
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//
//     details(){
//         console.log("Hello "+this.name);
//     }
// }
//
// let andre = new Person("Andreea", 27);
// andre.details();
//
// class Teacher extends Person {
//     constructor(name, age, subject, grade){
//         super(name, age);
//         this.grade = grade;
//         this._subject = subject;
//     }
//
//     get subject() {
//         return this._subject;
//     }
//
//     set subject(value) {
//         this._subject = value;
//     }
// }
//
// let prof = new Teacher("Ioana", 20, "Math", 10);
//
// console.log(prof);
// prof.details();
// console.log(andre);
//
// //access/get the subject
// console.log(prof.subject);
// //set another value to subject
// console.log(prof.subject ="A");
// console.log(prof.subject);


//JSON
// //JSON VALIDATOR: https://jsonlint.com/
// //variable with JSON Link
// let requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
// //create a request using a request object instance
// let request = new XMLHttpRequest();
// //open the request
// request.open('GET', requestURL);
// //set the response type to JSON and sent it
// request.responseType = 'json';
//
// //use these when you have a raw JSON string
// // request.responseType = 'text';
// request.send();
// //wait for the response and work with it
// request.onload = function() {
//     const superHeroes = request.response;
//
//     ////use these when you have a raw JSON string
//     // const superHeroesText = request.response;
//     // const superHeroes = JSON.parse(superHeroesText);
//
//     populateHeader(superHeroes);
//     showHeroes(superHeroes);
// };
//
// function populateHeader(jsonObj) {
//     const myH1 = document.createElement('h1');
//     myH1.textContent = jsonObj['squadName'];
//     header.appendChild(myH1);
//
//     const myPara = document.createElement('p');
//     myPara.textContent = 'Hometown: ' + jsonObj['homeTown'] + ' // Formed: ' + jsonObj['formed'];
//     header.appendChild(myPara);
// }
//
// const header = document.querySelector('header');
// const section = document.querySelector('section');
//
// function showHeroes(jsonObj) {
//     const heroes = jsonObj['members'];
//
//     for (let i = 0; i < heroes.length; i++) {
//         const myArticle = document.createElement('article');
//         const myH2 = document.createElement('h2');
//         const myPara1 = document.createElement('p');
//         const myPara2 = document.createElement('p');
//         const myPara3 = document.createElement('p');
//         const myList = document.createElement('ul');
//
//         myH2.textContent = heroes[i].name;
//         myPara1.textContent = 'Secret identity: ' + heroes[i].secretIdentity;
//         myPara2.textContent = 'Age: ' + heroes[i].age;
//         myPara3.textContent = 'Superpowers:';
//
//         const superPowers = heroes[i].powers;
//         for (let j = 0; j < superPowers.length; j++) {
//             const listItem = document.createElement('li');
//             listItem.textContent = superPowers[j];
//             myList.appendChild(listItem);
//         }
//
//         myArticle.appendChild(myH2);
//         myArticle.appendChild(myPara1);
//         myArticle.appendChild(myPara2);
//         myArticle.appendChild(myPara3);
//         myArticle.appendChild(myList);
//
//         section.appendChild(myArticle);
//     }
// }
//
// let myJson = { "name": "Chris", "age": "21" };
// console.log(myJson);
// let myString = JSON.stringify(myJson);
// console.log(myString);

let requestURL = 'text.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    const nameList = request.response;
    populateHeader(nameList);
};

const header = document.querySelector('header');

function populateHeader(jsonObj) {
    const myH1 = document.createElement('h1');
    myH1.textContent = jsonObj['name'];
    header.appendChild(myH1);
    const myH2 = document.createElement('h2');
    myH2.textContent = jsonObj['age'];
    header.appendChild(myH2);

}
