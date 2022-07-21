function resumo(usuario: {nome:string,idade:number}){
	return `Olá, ${usuario.nome}, vc tem ${usuario.idade} anos`;
}


let u = {
	nome: 'dirack',
	idade: 30
};

console.log(resumo(u));
