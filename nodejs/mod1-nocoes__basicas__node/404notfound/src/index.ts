import express, {Request, Response} from 'express';

const server = express();

server.use((req: Request, res: Response)=>{
	res.status(404).send("Not found");
});

server.listen(8081);
