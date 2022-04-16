import {Router, Request, Response} from 'express';

const router = Router();

router.get('/',(req: Request, res: Response)=>{
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

router.get('/contato',(req: Request, res: Response)=>{
	res.render("contato");
});

router.get('/sobre',(req: Request, res: Response)=>{
	res.render("sobre");
});

router.get('/nome',(req: Request, res: Response)=>{
	console.log("Query string: ",req.query);

	let nome: string = req.query.nome as string;
	let idade: string = req.query.idade as string;

	res.render("pages/nome",{
		nome,
		idade
	});
});

router.get('/idade',(req: Request, res: Response)=>{

	let idade: number = 0;
	let mostraridade: boolean = false;

	if(req.query.ano){
		let anoNascimento: number = parseInt(req.query.ano as string);
		let anoAtual = new Date().getFullYear();
		idade = anoAtual - anoNascimento;
		mostraridade = true;
	}

	res.render("pages/idade",{
		idade,
		mostraridade
	});
});

router.get('/idadepost',(req: Request, res: Response)=>{
	res.render("pages/idadepost");
});

router.post('/idade-resultado',(req: Request, res: Response)=>{
	let idade: number = 0;
	let mostraridade: boolean = false;

	if(req.body.ano){
		let anoNascimento: number = parseInt(req.body.ano as string);
		let anoAtual = new Date().getFullYear();
		idade = anoAtual - anoNascimento;
		mostraridade = true;
	}

	res.render("pages/idadepost",{
		idade,
		mostraridade
	});

});


export default router;
