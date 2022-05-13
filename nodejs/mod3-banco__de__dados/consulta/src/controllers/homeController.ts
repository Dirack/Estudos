import { Request, Response } from 'express';
import { Product } from '../models/Product';
import { User } from '../models/User';
import {Op} from 'sequelize';

export const home = async (req: Request, res: Response)=>{

	let users = await User.findAll({
		attributes:['name','age']
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
	ouser
    });
};
