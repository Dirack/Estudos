import express, {Request, Response} from 'express';
import mainRoutes from './routes/index';
import painelRoutes from './routes/painel';

const server = express();

server.use('/',mainRoutes);
server.use('/painel',painelRoutes);

server.get('/',(req: Request, res: Response)=>{
	res.send("Olá mundo");
});

server.listen(8081);
