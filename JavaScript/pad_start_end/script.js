let telefone = '5';

console.log(telefone.padEnd(9,'*'));
console.log(telefone.padStart(9,'*'));

let cartao = '12345';
let digitos = cartao.slice(-2);
console.log(digitos.padStart(5,'*'));

let cartao2 = '12345';
let digitos2 = cartao2.slice(0,2);
console.log(digitos2.padEnd(5,'*'));
