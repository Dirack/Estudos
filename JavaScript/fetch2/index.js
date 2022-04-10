function loadPosts(){
	document.getElementById("result").innerHTML="carregando...";

	fetch('https://jsonplaceholder.typicode.com/posts')
	.then(function(resultado){
		return resultado.json();
	})
	.then(function(json){
		montarBlog(json);
	})
	.catch(function(error){
		console.log("Deu erro...");
	});
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
