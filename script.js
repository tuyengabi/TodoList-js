"use strict";
//let btn = document.getElementsByTagName('button')[0];

function addValueToList() {
	let myul = document.getElementsByTagName('ul')[0];
	console.log(myul);
	let newLi= document.createElement('li');
	console.log(newLi);
	let valueinput = document.getElementById('my-Input').value;
	console.log(valueinput);

	if (valueinput == '') {
		return;
	} else {
		newLi.innerHTML = valueinput.charAt(0).toUpperCase() + valueinput.slice(1);
		myul.appendChild(newLi);

	}




	document.getElementById('my-Input').value = '';
};
addValueToList();
