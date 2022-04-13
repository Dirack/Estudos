import express, {Request, Response} from 'express';
import path from 'path';

const server = express();

console.log(path.join(__dirname,'../public'));
server.use(express.static(path.join(__dirname,'../public')));

server.use((req: Request, res: Response)=>{
	res.status(404).send("Not found!");
});

server.listen(8081);
