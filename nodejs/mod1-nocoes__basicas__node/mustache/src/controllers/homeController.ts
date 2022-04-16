import {Router, Request, Response} from 'express';
import {Product} from '../models/Product';

export const home = (req: Request, res: Response)=>{
	let age = 50;
	let showOld = false;

	let list = Product.getAll();
	let expensiveList = Product.getFromPriceAfter(30);

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
		products: list,
		expensive: expensiveList,
		lista: [
		"frase motivacional inútil",
		"sua vida não tem sentido"
		],
		lista2:[]
	});
};

