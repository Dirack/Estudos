import express,{Request,Response} from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import mustache from 'mustache-express';
import session from 'express-session';

declare module 'express-session' {
  export interface SessionData {
    login: string ;
  }
}

var asession: string = '';

dotenv.config();

const server = express();

server.use(session({secret:'12345',resave:false,saveUninitialized:false}));

server.use(cors());

server.set('view engine','mustache');
server.set('views',path.join(__dirname,'views'));
server.engine('mustache',mustache());

server.use('/public',express.static(path.join(__dirname,'../public')));
server.use(express.urlencoded({extended:true}));

server.get('/',(req: Request, res: Response)=>{
	if(asession == 'dirack'){
		res.render('pages/logado',{msg:"Vc está logado",login:asession});
		return;
	}
	res.render('pages/login');
});

server.post('/',(req: Request,res:Response)=>{
	if(req.body.login && req.body.passwd){
		let login = req.body.login;
		let passwd = req.body.passwd;
		if(login == 'dirack' && passwd == '12345'){
			asession = login;
			res.redirect('/logado');
			return;
		}
	}
	res.render('pages/login');
});

server.get('/logado',(req: Request, res: Response)=>{
	if(asession=='dirack'){
		console.log(req.session.login);
		res.render('pages/logado',{msg:"Vc está logado",login:asession});
		return;
	}
	res.redirect('/');
});

server.get('/logout',(req:Request,res:Response)=>{
	console.log(req.session.login);
	if(asession){
		asession = '';
		req.session.destroy((err)=>{
			res.redirect('/test');
			return;
		});
	}
});

server.get('/test',(req:Request,res:Response)=>{
	res.redirect('/');
});

server.listen(process.env.PORT,()=>{
	console.log("Connected, listen on port",process.env.PORT);
})

