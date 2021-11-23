
const divs = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];
const container = document.querySelector('.container');

for (let i = 0; i < divs.length; i++) {
	container.innerHTML += `
	<div class="bg-light px-5  rounded-3">
	<div class="fs-3 text-center"><i class="${divs[i].family} ${divs[i].prefix}${divs[i].name}"></i></div>
	<div class="text-uppercase text-center">${divs[i].name}</div>
	`
}

for (let i = 0; i < divs.length; i++){
	const classe = document.getElementsByClassName('fas');
	if (divs[i].color == 'blue') {
		classe[i].classList.add('color-blue')
	} else if (divs[i].color == 'orange'){
		classe[i].classList.add('color-orange')
	} else {
		classe[i].classList.add('color-green')

	}	
}

const selezione = document.getElementById('tipo-font');

selezione.addEventListener('change', function(){
	console.log(selezione.value);
	if (selezione.value == 'all'){
	}
});



const colori = divs.color;
console.log(colori);

divs.forEach( div => {
	console.log(`${div.color}`, 'ciao');
});

divs.forEach( div => {
	if (div.color == 'orange'){
		console.log('questo e arancione');
	} else if (div.color == 'blue'){
		console.log('questo e blue');
	} else{
		console.log('questo e verde');
	}
})


function creazioneDiv () {
	for (let i = 0; i < divs.length; i++) {
		container.innerHTML += `
		<div class="bg-light px-5  rounded-3">
		<div class="fs-3 text-center"><i class="${divs[i].family} ${divs[i].prefix}${divs[i].name}"></i></div>
		<div class="text-uppercase text-center">${divs[i].name}</div>
		`
	}
}