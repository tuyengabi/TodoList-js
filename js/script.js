

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

		

		//je créer et rempli la balise p du li
		let newP = document.createElement('p');
		//j'ajoute le texte
		newP.innerText = valueInput.charAt(0).toUpperCase() + valueInput.slice(1);
		// j'ajoute la classe todoItem
		newP.classList.add('todoItem');

		//je créer et je rempli le label du li
		let newLabel = document.createElement('label');
		//j'ajoute la class check a mon label
		newLabel.classList.add('check');
		//je créer l'input du label
		let newLblInput = document.createElement('input');
		//on force le type checkbox et checked
		newLblInput.setAttribute('type','checkbox');
		newLblInput.setAttribute('checked','checked');
		//je créer le span du label
		let newLblSpan = document.createElement('span');
		//on ajoute la classe checkmark
		newLblSpan.classList.add('checkmark');
		//je créer le p du label
		let newLblP = document.createElement('p');
		//j'ajoute la classe status
		newLblP.classList.add('status');
		//j'aoute le texte c'est fait
		newLblP.innerText="c'est fait";

		//j'assemble le label
		newLabel.appendChild(newLblInput);
		newLabel.appendChild(newLblSpan);
		newLabel.appendChild(newLblP);

		//je créer le a du li
		let newA = document.createElement('a');
		newA.setAttribute('href','#');
		newA.classList.add('close');

		//j'assemble le contenu du li
		newTask.appendChild(newP);
		newTask.appendChild(newLabel);
		newTask.appendChild(newA);

		// newTask.innerHTML = valueInput.charAt(0).toUpperCase() + valueInput.slice(1);
		myList.appendChild(newTask);

	}


document.getElementById('my-Input').value = '';


};
addValueToList();
