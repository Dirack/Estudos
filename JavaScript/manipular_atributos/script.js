function changeImg(filename,animalname){
	document.querySelector('.image').setAttribute('src',filename);
	document.querySelector('.image').setAttribute('data-animal',animalname);
}

function responder(){
	let animal = document.querySelector('.image').getAttribute('data-animal');
	alert(animal);
}
