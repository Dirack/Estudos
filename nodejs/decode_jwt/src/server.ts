import express, {Request,Response} from 'express';
import dotenv from 'dotenv';
import path from 'path';
import {User} from './models/User';
import JWT from 'jsonwebtoken';
import mustache from 'mustache-express';
import cors from 'cors';

dotenv.config();

const server = express();

server.use(cors());

server.set("view engine",'mustache');
server.set('views',path.join(__dirname,'views'));
server.engine('mustache',mustache());

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
			{id:hasUser.id,email:hasUser.email,level:1},
			process.env.JWT_SECRET_KEY as string,
			{expiresIn:'2h'}
		);
		res.status(201).render('pages/login',{
			msg: "You are logged in",
			token
		});
	}else{
		return res.redirect('/');
	}
});

server.use('/level', async (req: Request, res: Response)=>{
	let success = true;
	if(req.query.token){
		let token = req.query.token as string;
		try{
			const decoded = JWT.verify(
				token,
				process.env.JWT_SECRET_KEY as string
			);
			console.log(decoded);
			res.json({msg:"Autorizado",info:decoded});
		}catch{
			console.log("Erro");
		}
	}

});

server.listen(process.env.PORT,()=>{
	console.log("Connected...");
});
