async function enviar(){
	let arquivo = document.getElementById('arquivo').files[0];

	let body = new FormData();
	body.append('title','blablabla');
	body.append('arquivo',arquivo);

	let req = await fetch('http://localhost',{
		method:'POST',
		body:body,
		headers:{
			'Content-Type':'multipart/form-data'
		}
	});
}

