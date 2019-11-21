

function addValueToList() {

	//je récupere ma liste
	let myList = document.getElementsByTagName('ul')[0];
	console.log(myList);

	//je récupere ma item of la liste 
	let newTask = document.createElement('li');
	console.log(newTask);

	//je récupere la valeur d'input
	let valueInput = document.getElementById('my-Input').value;
	console.log(valueInput);

	if (valueInput == '') {
		return;
	} else {
		newTask.innerHTML = valueInput.charAt(0).toUpperCase() + valueInput.slice(1);
		myList.appendChild(newTask);

	}


document.getElementById('my-Input').value = '';


};
addValueToList();
