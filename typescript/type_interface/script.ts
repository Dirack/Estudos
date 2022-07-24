type NomeCompleto = string;

let nome: NomeCompleto = 'capa docia';

type Idade = string | number;

let idade: Idade = 90;

type User = {
	nome: string,
	idade: number
}

function resumo(usuario: User){
	console.log(usuario);
}

resumo({nome:'dirack',idade:90});

interface Fulano {
	nome: string,
	idade: number
}

interface Fulano {
	sexo: string
}

function fulanize(f: Fulano){
	console.log(f);
}

fulanize({nome:'fulano',idade:50,sexo:'masc'});
