import { Request, Response } from 'express';
import JWT from 'jsonwebtoken'; 
import dotenv from 'dotenv';
import * as UserService from '../services/UserService';

dotenv.config();

export const ping = (req: Request, res: Response) => {
    res.json({pong: true});
}

export const register = async (req: Request, res: Response) => {
    if(req.body.email && req.body.password) {
        let { email, password } = req.body;

        const newUser = await UserService.createUser(email,password);

        if(newUser instanceof Error){
            res.json({error:newUser.message});
        }else{
            res.status(201);
            res.json({id: newUser.id});
        }
   }else{
        res.json({error:"Bad request"})
   }
}

export const login = async (req: Request, res: Response) => {
    if(req.body.email && req.body.password) {
        let email: string = req.body.email;
        let password: string = req.body.password;

	const user = await UserService.findByEmail(email);

	if(user && await UserService.matchPassword(password,user.password)){
		res.json({status:true});
		return;
	}
    }

    res.json({ status: false });
}

export const list = async (req: Request, res: Response) => {
    let users = await UserService.all();
    let list: string[] = [];

    for(let i in users) {
        list.push( users[i].email );
    }

    res.json({ list });
}
