import { Request, Response } from 'express';
import { Product } from '../models/Product';
import { User } from '../models/User';
import {Op} from 'sequelize';

export const home = async (req: Request, res: Response)=>{

	let fulanos = await User.findAll({where:{id:2}});

	if(fulanos.length > 0){
		let fulano = fulanos[0];
		fulano.name = "Testador Alterado";
		fulano.age++;
		await fulano.save();
	}

	let results = await User.findAll({where:{id:6}});
	console.log("RESULTS: ",results);

	await User.update({age:18},{
		where:{
			age:{
				[Op.lt]:18
			}
		}
	});

	await User.update({name: "Tio Chico", idade: 56},{
		where:{
			id:5
		}
	});


	let users = await User.findAll({
		attributes:['name','age'],
		offset: 2,
		limit: 2
	});
	console.log(JSON.stringify(users));

	let auser = await User.findAll({
		where:{age:31}
	});

	let ouser = await User.findAll({
		where:{
			[Op.or]:[{name:'Testador'},{age:31}]
		}
	});

	let searchuser = await User.findAll({
		where:{
			name:{[Op.like]:'Te%'}
		}
	});

	let alfa = await User.findAll({
		where:{
			age:{
				[Op.gte]:18
			}
		},
		order:[['name','DESC'],['age','DESC']]
	});

    let age: number = 90;
    let showOld: boolean = false;

    if(age > 50) {
        showOld = true;
    }

    let list = Product.getAll();
    let expensiveList = Product.getFromPriceAfter(12);

    res.render('pages/home', {
        name: 'Bonieky',
        lastName: 'Lacerda',
        showOld,
        products: list,
        expensives: expensiveList,
        frasesDoDia: [],
	users,
	auser,
	ouser,
	searchuser,
	alfa
    });
};

export const addUser = async (req: Request, res: Response)=>{
	let { name, age } = req.body;
	if(name){
		const newUser = User.build({name});
		if(age){
			newUser.age = parseInt(age);
		}
		await newUser.save();
	}
	res.redirect('../');
};
