let numero1 = document.getElementById('numero1') as HTMLInputElement;
let numero2 = document.getElementById('numero2') as HTMLInputElement;
var botao = document.getElementById('botao');
var res = document.getElementById('resultado');

function calcular(n1: number,n2: number){
	return n1+n2;
}

botao.addEventListener('click',function(){
	res.innerHTML = calcular(+numero1.value,+numero2.value).toString();
});

let coisas: any = ['capa','docia','fulano'];

coisas.push(23);
