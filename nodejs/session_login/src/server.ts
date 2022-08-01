import express,{Request,Response} from 'express';
import dotenv from 'dotenv';
import path from 'path';
import cors from 'cors';
import mustache from 'mustache-express';
import session from 'express-session';

declare module 'express-session' {
  export interface SessionData {
    login: string ;
  }
}

dotenv.config();

const server = express();

server.use(session({secret:'12345',resave: true,saveUninitialized: true}));

server.use(cors());

server.set('view engine','mustache');
server.set('views',path.join(__dirname,'views'));
server.engine('mustache',mustache());

server.use('/public',express.static(path.join(__dirname,'../public')));
server.use(express.urlencoded({extended:true}));

server.post('/',(req: Request, res: Response)=>{
	console.log(req.body.login,req.body.passwd);
	if(req.body.login == 'rodolfo_profissional@hotmail.com' && req.body.passwd == '12345'){
		req.session.login = 'rodolfo_profissional@hotmail.com';
		console.log(req.session.login);
		res.status(201).render('pages/logado',{msg: 'Vc está logado',login:req.session.login});
		return;
	}
	res.render('pages/login');
});

server.get('/',(req: Request, res: Response)=>{
	if(req.session.login){
		res.render('pages/logado',{msg:'Vc está logado',login:req.session.login});
		return;
	}
	res.render('pages/login');
});

server.get('/logout',(req:Request,res:Response)=>{
	if(req.session.login){
		req.session.login = '';
		req.session.destroy((err)=>{
			res.redirect('/');
		});
	}
});

server.listen(process.env.PORT,()=>{
	console.log("Server started on port",process.env.PORT);
});
