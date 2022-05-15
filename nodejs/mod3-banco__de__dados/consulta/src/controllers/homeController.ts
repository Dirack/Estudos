import { Request, Response } from 'express';
import { Product } from '../models/Product';
import { User } from '../models/User';
import {Op} from 'sequelize';

export const home = async (req: Request, res: Response)=>{

	// build + save
	const user1 = User.build({
		name: "Fulaninho"
	});
	let idade = 27;
	user1.age = idade;
	await user1.save();

	// create
	const user = await User.create({
		name: "Ciclano",
		age: 39
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
