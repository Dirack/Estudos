function firstLetter(nome: string): string{
	let first = nome.charAt(0).toUpperCase();
	return first+nome.substring(1);
}

// firstLetter(90); // Não irá funcionar em typescript

let result: string = firstLetter('capa');

console.log(result);
