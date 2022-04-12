async function loadPosts(){
	document.getElementById("result").innerHTML="carregando...";

	let req = await fetch('https://jsonplaceholder.typicode.com/posts',{
		method:'POST',
		body:JSON.stringify({
			title:'titulo de teste',
			body:'corpo de teste',
			id:4
		}),
		headers:{
			'Content-Type':'application/json'
		}
	});
	let json = await req.json();

	console.log(json);
	//montarBlog(json);
}

function montarBlog(lista){
	let html = '';

	for(let i in lista){
		html += '<h3>'+lista[i].title+'</h3>';
		html += lista[i].body+'<br>';
		html += '<hr>';
	}

	document.getElementById("result").innerHTML=html;
}
