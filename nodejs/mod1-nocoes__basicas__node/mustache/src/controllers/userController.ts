import {Router, Request, Response} from 'express';

export const nome = (req: Request, res: Response)=>{
	console.log("Query string: ",req.query);

	let nome: string = req.query.nome as string;
	let idade: string = req.query.idade as string;

	res.render("pages/nome",{
		nome,
		idade
	});
};

export const idade = (req: Request, res: Response)=>{

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
};

export const idadeForm = (req: Request, res: Response)=>{
	res.render("pages/idadepost");
};

export const idadeAction = (req: Request, res: Response)=>{
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

};


