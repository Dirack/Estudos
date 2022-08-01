import {Request, Response, NextFunction} from 'express';
import {User} from '../models/User';
import JWT from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const Auth = {
	private: async (req:Request,res:Response,next:NextFunction)=>{
		let success = false;

		if(req.headers.authorization){
			const [authType,token] = req.headers.authorization.split(' ');
			if(authType === 'Bearer'){
				try{
					const decoded = JWT.verify(
						token,
						process.env.JWT_SECRET_KEY as string
					);
					console.log(decoded);
					success = true;
				}catch{

					console.log("Erro validação JWT");
				}
			}
		}

		

		if(success){
			next();
		}else{
			res.status(403);
			res.json({error:'Não autorizado'});
		}
	}
}
