import {Request, Response} from 'express';
import {Frase} from '../models/Frase';
import {Sequelize} from 'sequelize';

let lista = {frases:[{id:0,autor:"dirack",txt:"frase lixo"},{id:1,autor:"fulano",txt:"frase inútil"}]};

export const ping = (req: Request, res: Response)=>{
	res.json({pong:true});
};

export const random = (req: Request, res: Response)=>{
	let nrand: number = Math.floor(Math.random() * 10);
	res.json({number:nrand});
};

export const nome = (req: Request, res: Response)=>{
	let nome: string = req.params.nome;
	res.json({nome:`Olá, ${nome}. Tude bem?`});
};

export const frases = async (req: Request, res: Response)=>{
	let autor: string = req.body.autor;
	let txt: string = req.body.txt;
	let frase = await Frase.create({autor,txt});
	res.send({id:frase.id,autor,txt});
};

export const listar = async (req: Request, res: Response)=>{
	let list = await Frase.findAll();
	res.send(list);
};

export const umafrase = async (req: Request, res: Response)=>{
	let id: number = parseInt(req.params.id);
	let afrase = await Frase.findByPk(id);
	if(afrase)
		return res.json({afrase});
	return res.json({});
};

export const atualizar = async (req: Request, res: Response)=>{
	let id: number = parseInt(req.params.id);
	let autor: string = req.body.autor;
	let txt: string = req.body.txt;
	let afrase = await Frase.findByPk(id);

	if(afrase){
		afrase.autor = autor;
		afrase.txt = txt;
		await Frase.update({autor,txt},{where:{id}});
		res.json({afrase});
	}else{
		res.json({});
	}
};

export const deletar = async (req: Request, res: Response)=>{
	let id: number = parseInt(req.params.id);
	await Frase.destroy({where:{id}});
	res.json({});
};

export const aleatoria = async (req: Request, res: Response)=>{
	let afrase = await Frase.findOne({
		order: [
			Sequelize.fn('RAND')
		]
	});

	if(afrase){
		res.json({afrase});
	}else{
		res.json({});
	}
};
