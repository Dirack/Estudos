import express, {Request, Response} from 'express';

const server = express();

server.get('/',(req: Request, res: Response)=>{
	res.send("Olá mundo, NodeJS!");
});

server.listen(3000);
