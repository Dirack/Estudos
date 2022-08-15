function show(...numeros){
	console.log(numeros);
}

show(1,2,3);
show(5,6,7,8,9,10);

function listar(atual,...novosNomes){
	novaLista = [...atual,...novosNomes];
	console.log(novaLista);
}

listar(['rodolfo','fulano'],'capa','docia');
