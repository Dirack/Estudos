import express, {Request,Response} from 'express';
import dotenv from 'dotenv';
import path from 'path';
import {User} from './models/User';
import JWT from 'jsonwebtoken';

dotenv.config();

const server = express();

server.use(express.static(path.join(__dirname,'../public')));

server.use('/login',async (req: Request, res: Response)=>{
	let login = req.query.login;
	let passwd = req.query.passwd;
	let hasUser = await User.findOne({
		where:{
			email:login,
			password: passwd
		}	
	});
	if(hasUser){
		const token = JWT.sign(
			{id:hasUser.id,email:hasUser.email},
			process.env.JWT_SECRET_KEY as string,
			{expiresIn:'2h'}
		);
		res.status(201).json({msg:"logged in",token});
	}else{
		return res.redirect('/');
	}
});

server.listen(process.env.PORT,()=>{
	console.log("Connected...");
});
