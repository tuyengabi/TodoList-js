// add event switch light
function toggleColor() {
	const gradient = document.getElementById("gradient");
	const currentClass = gradient.className;
	gradient.className = currentClass == "gradient--darkmode" ? "gradient--lightmode" : "gradient--darkmode";
};

function toggleBgImg() {
	const background = document.getElementById("bg");
	const currentClass = background.className;
	background.className = currentClass == "bg--darkmode" ? "bg--lightmode" : "bg--darkmode";
};

function toggleThemplate() {
	toggleBgImg();
	toggleColor();
};


// function add newTask
function addValueToList() {

	//je récupere ma liste
	const myList = document.getElementsByTagName('ul')[0];
	// console.log(myList);

	//je récupere ma item of la liste 
	const newTask = document.createElement('li');
	// console.log(newTask);

	//je récupere la valeur d'input
	const valueInput = document.getElementById('my-Input').value;
	// console.log(valueInput);



	if (valueInput == '') {
		return;
	} else {

		//je créer et rempli la balise p du li
		const newP = document.createElement('p');
		//j'ajoute le texte
		newP.innerText = valueInput.charAt(0).toUpperCase() + valueInput.slice(1);
		// j'ajoute la classe todoItem
		newP.classList.add('todoItem');

		//je créer et je rempli le label du li
		const newLabel = document.createElement('label');
		//j'ajoute la class check a mon label
		newLabel.classList.add('check');
		//je créer l'input du label
		const newLblInput = document.createElement('input');
		//on force le type checkbox
		newLblInput.setAttribute('type', 'checkbox');
		//on force checked newLblInput.setAttribute('checked','checked');
		//je créer le span du label
		const newLblSpan = document.createElement('span');
		//on ajoute la classe checkmark
		newLblSpan.classList.add('checkmark');
		//je créer le p du label
		const newLblP = document.createElement('p');
		//j'ajoute la classe status
		newLblP.classList.add('status');
		//j'ajoute le texte c'est fait
		newLblP.innerText = "done";

		//j'assemble le label
		newLabel.appendChild(newLblInput);
		newLabel.appendChild(newLblSpan);
		newLabel.appendChild(newLblP);

		//je créer le a du li
		const newA = document.createElement('a');
		newA.setAttribute('href', '#');
		newA.classList.add('close');
		newA.addEventListener('click',function(){
			this.parentElement.remove();
		});


		//j'assemble le contenu du li
		newTask.appendChild(newP);
		newTask.appendChild(newLabel);
		newTask.appendChild(newA);

		// newTask.innerHTML = valueInput.charAt(0).toUpperCase() + valueInput.slice(1);
		myList.appendChild(newTask);

	}

	document.getElementById('my-Input').value = '';

};



document.querySelectorAll('.close').forEach(element => {
	element.addEventListener('click',function(){
		this.parentElement.remove();
	});
});

//event keypress addValueToList
$(document).keypress(function(e){
	if (e.key === 'Enter'){
		e.preventDefault();
		addValueToList();
    }
});

//animation of button switch light
$('.toggle').click(function (e) {
    e.preventDefault(); 
    $(this).toggleClass('toggle-on');
});