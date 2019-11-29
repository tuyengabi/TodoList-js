// add event switch light
function toggleColor() {
	var gradient = document.getElementById("gradient");
	var currentClass = gradient.className;
	gradient.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
};

function toggleBgImg() {
	var background = document.getElementById("bg");
	var currentClass = background.className;
	background.className = currentClass == "d-mode" ? "l-mode" : "d-mode";
};

function toggleThemplate() {
	toggleBgImg();
	toggleColor();
};


// function add newTask
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
		//on force le type checkbox
		newLblInput.setAttribute('type', 'checkbox');
		//on force checked newLblInput.setAttribute('checked','checked');
		//je créer le span du label
		let newLblSpan = document.createElement('span');
		//on ajoute la classe checkmark
		newLblSpan.classList.add('checkmark');
		//je créer le p du label
		let newLblP = document.createElement('p');
		//j'ajoute la classe status
		newLblP.classList.add('status');
		//j'ajoute le texte c'est fait
		newLblP.innerText = "done";

		//j'assemble le label
		newLabel.appendChild(newLblInput);
		newLabel.appendChild(newLblSpan);
		newLabel.appendChild(newLblP);

		//je créer le a du li
		let newA = document.createElement('a');
		newA.setAttribute('href', '#');
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
