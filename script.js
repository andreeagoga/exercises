let requestURL = 'text.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    const nameList = request.response;
    populate(nameList);
};

const header = document.querySelector('header');

function populate(jsonObj) {
    const pers = jsonObj['person'];

    for (let i = 0; i < pers.length; i++) {

        const myH1 = document.createElement('h1');
        const myH2 = document.createElement('h2');

        myH1.textContent = pers[i].name;
        myH2.textContent = pers[i].age;

        header.appendChild(myH1);
        header.appendChild(myH2);
    }
}
