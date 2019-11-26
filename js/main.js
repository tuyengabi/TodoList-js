"use strict";
//VARIABLE//

//je récupere la valeur d'input
let valueInput = document.getElementById('my-Input').value;
//je récupere ma liste
let myList = document.getElementsByTagName('ul')[0];
//je récupere ma item of la liste 
let newTodo = document.createElement('li');
//je récupere et rempli la balise p du li
let newP = document.createElement('p');
//je récupere et je rempli le label du li
let newLabel = document.createElement('label');
//je récupere l'input du label
let newLblInput = document.createElement('input');
//je récupere le span du label
let newLblSpan = document.createElement('span');
//je récupere le p du label
let newLblP = document.createElement('p');
//je récupere le a du li
let newA = document.createElement('a');


//FUNCTIONS//

//je crée une fonction qui met le valeur de champ à innerText de la balise p du li
function addTodoItem() {
    //Met en Capitalisé le innerText
    newP.innerText = valueInput.charAt(0).toUpperCase() + valueInput.slice(1);
    // j'ajoute la classe todoItem
    newP.classList.add('todoItem');
};

//je crée une fonction qui ajoute la classe check au label
function addLabelClass() {
    newLabel.classList.add('check');
};

//je crée une fonction qui force le type de checkbox
function setInputTypeOfLabel() {
    newLblInput.setAttribute('type', 'checkbox');
    //on force checked newLblInput.setAttribute('checked','checked');
};

//je crée une fonction qui ajoute la classe checkmark au span
function addSpanClass() {
    newLblSpan.classList.add('checkmark');
};

//je crée une fonction qui ajoute la classe status au p
function addPClass() {
    newLblP.classList.add('status');
};

//je crée une fonction qui ajoute le texte "DONE" à p
function addDoneText() {
    newLblP.innerText = "done";
};

//je crée une fonction qui ajoute l'input et le span et le p à label
function addNewLabel() {
    newLabel.appendChild(newLblInput);
    newLabel.appendChild(newLblSpan);
    newLabel.appendChild(newLblP);
};

//je crée une fonction qui force le href de link
function setHrefOfA() {
    newA.setAttribute('href', '#');
};

//je crée un fonction la classe close au a
function addAClass() {
    newA.classList.add('close');
};

//je crée une fonction qui ajoute TodoItem et Label et a au li
function addNewTodo() {
    newTodo.appendChild(newP);
    newTodo.appendChild(newLabel);
    newTodo.appendChild(newA);
};

//je crée une fonction qui crée un nouveau li
function creatNewTask() {
    myList.appendChild(newTodo);
};

function addValueToList() {

    if (valueInput == '') {
        return;
    } else {
        addTodoItem();
        addLabelClass();
        setInputTypeOfLabel();
        addSpanClass();
        addPClass();
        addDoneText();
        addNewLabel();
        setHrefOfA();
        addAClass();
        addNewTodo();
        creatNewTask();
}

document.getElementById('my-Input').value = '';

};

addValueToList();
