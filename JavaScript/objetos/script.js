let pessoa = {
	nome: 'dirack',
	idade: 45,
	sobrenome: 'fulano',
	nomeCompleto: function(){
		return `${this.nome} ${this.sobrenome}`;
	},
	social: {
		facebook: 'face',
		instagram: 'insta'
	}
};

let {nome:pessoaNome, idade, sobrenome, tel=000} = pessoa;
let {facebook, instagram} = pessoa.social;

console.log(pessoaNome,idade,sobrenome, tel)
console.log(facebook, instagram)

let array = ['fulano','beltrano','cicrano'];

let [capa, docia, lira] = array;

console.log(capa,docia,lira)

let [dola,,dile] = array;

console.log(dola,dile)

let [dla,zige,dle,jery=10] = array;

console.log(dola,zige,dile,jery)
