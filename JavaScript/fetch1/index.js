function loadPosts(){
	document.getElementById("result").innerHTML="carregando...";

	fetch('https://jsonplaceholder.typicode.com/posts')
	.then(function(resultado){
		return resultado.json();
	})
	.then(function(json){
		document.getElementById("result").innerHTML = json.length+" posts";
	})
	.catch(function(error){
		console.log("Deu erro...");
	});
}
