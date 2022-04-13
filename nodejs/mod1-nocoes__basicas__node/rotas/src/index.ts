import express, {Request, Response} from 'express';

const server = express();

server.get('/',(req: Request,res: Response)=>{
	res.send("Olá mundo!");
});

server.get('/noticias/:slug',(req: Request,res: Response)=>{
	let slug: string = req.params.slug;
	res.send("Notícias: "+slug); 
});

server.get('/voos/:origem-:destino',(req: Request, res: Response)=>{
	let {origem,destino} = req.params;
	res.send("De "+origem+" até "+destino);
});

server.listen(3000);
