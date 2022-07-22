let idade: string | number = 90;

idade = document.getElementById('capa').innerHTML;

function mostrarIdade(idade: number | string){
	console.log("Idade:",idade);
}

mostrarIdade(90);

mostrarIdade('90');
