function getData(id,callback){
	let result = {
		id: id,
		data: "Capa dócia"
	};
	callback("error getting data",result);
}

getData(2123,(err,data)=>{
	if(err) console.log(err);
	console.log(data);
});
