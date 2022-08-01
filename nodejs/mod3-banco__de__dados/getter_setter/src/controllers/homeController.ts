import { Request, Response } from 'express';
import { Product } from '../models/Product';
import { User } from '../models/User';
import {Op} from 'sequelize';

export const home = async (req: Request, res: Response)=>{

	let [bonieky,created] = await User.findOrCreate({
		where:{name:'bonieky'},
		defaults:{
			name: 'bonieky',
			age: 21
		}
	});
	console.log("Bonieky:",bonieky);
	console.log("Created:",created);

	let usuario = await User.findOne({
		where:{id:1}
	});
	console.log("USUÁRIO",usuario);
	if(usuario){
		console.log(`O ${usuario.name} possui ${usuario.age} anos`);
	}
	let usuario2 = await User.findByPk(1);
	if(usuario2){
		console.log(`O ${usuario2.name} possui ${usuario2.age} anos`);
	}

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


