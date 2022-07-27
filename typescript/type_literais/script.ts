function alinhar(
	txt: string,
	alinhamento: 'left' | 'right' | 'center'
){
	return `<div style="text-align:${alinhamento};">${txt}</div>`;
}

alinhar('capa docia','left');
