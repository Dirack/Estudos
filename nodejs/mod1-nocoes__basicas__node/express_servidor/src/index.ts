import express, {Request, Response, urlencoded} from 'express';
import helmet from 'helmet';
import path from 'path'

const server = express();

server.use(helmet())
server.use(express.json())
server.use(urlencoded({extended:true}))
server.use(express.static(path.join(__dirname, '../public')))

server.get('/',(req: Request, res: Response)=>{
	res.json({"Hello":"world"})
});

server.listen(3000);
