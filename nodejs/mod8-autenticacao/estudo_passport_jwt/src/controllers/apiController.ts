import { Request, Response } from 'express';
import { User } from '../models/User';
import JWT from 'jsonwebtoken'; 
import dotenv from 'dotenv';
import {generateToken} from '../config/passport';

dotenv.config();

export const ping = (req: Request, res: Response) => {
    res.json({pong: true});
}

export const register = async (req: Request, res: Response) => {
    if(req.body.email && req.body.password) {
        let { email, password } = req.body;

        let hasUser = await User.findOne({where: { email }});
        if(!hasUser) {
            let newUser = await User.create({ email, password });
		const token = generateToken({id:newUser.id});

            res.status(201);
            res.json({ id: newUser.id, token });
        } else {
            res.json({ error: 'E-mail já existe.' });
        }
	}else{
		res.json({ error: 'E-mail e/ou senha não enviados.' });
	}
}

export const login = async (req: Request, res: Response) => {
    if(req.body.email && req.body.password) {
        let email: string = req.body.email;
        let password: string = req.body.password;

        let user = await User.findOne({ 
            where: { email, password }
        });

        if(user) {
	    const token = generateToken({id:user.id});
            res.json({ status: true, token });
            return;
        }
    }   

    res.json({ status: false }); 

}

export const list = async (req: Request, res: Response) => {
	console.log("USER:",req.user);
    let users = await User.findAll();
    let list: string[] = [];

    for(let i in users) {
        list.push( users[i].email );
    }

    res.json({ list });
}
