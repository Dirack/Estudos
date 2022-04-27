import { Request, Response } from 'express';
import {sequelize} from '../instances/mysql';

import { Product } from '../models/Product';

export const home = async (req: Request, res: Response)=>{

	try{
		await sequelize.authenticate();
		console.log('Conexão estabelecida com sucesso!');
	}catch(error){
		console.log('Deu erro: '+error);
	}

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
        frasesDoDia: []
    });
};
