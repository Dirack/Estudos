import express, {Request, Response} from 'express';
import path from 'path';
import mustache from 'mustache-express';

const server = express();

server.set('view engine','mustache');
server.set('views', path.join(__dirname,'views'));
server.engine('mustache',mustache());

console.log(path.join(__dirname,'../public'));
server.use(express.static(path.join(__dirname,'../public')));

server.use('/',(req: Request, res: Response)=>{
	let age = 50;
	let showOld = false;

	if(age>30){
		showOld = true;
	}

	let dirack = {
		name: 'Rodolfo',
		age: '30'
	}
	res.render('home',{
		user: 'Dirack',
		dirack,
		fulano: {name:'fulano',age:'90'},
		showWelcome: false,
		showOld,
		products: [
			{title:'product X',price:10},
			{title:'product Y',price:15},
			{title:'product Z',price:40}
		],
		lista: [
		"frase motivacional inútil",
		"sua vida não tem sentido"
		],
		lista2:[]
	});
});

server.use((req: Request, res: Response)=>{
	res.status(404).send("Not found!");
});

server.listen(8081);
