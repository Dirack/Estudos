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
	let dirack = {
		name: 'Rodolfo',
		age: '30'
	}
	res.render('home',{
		user: 'Dirack',
		dirack,
		fulano: {name:'fulano',age:'90'}
	});
});

server.use((req: Request, res: Response)=>{
	res.status(404).send("Not found!");
});

server.listen(8081);
