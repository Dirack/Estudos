import express, {Request, Response} from 'express';
import path from 'path';
import mustache from 'mustache-express';
import dotenv from 'dotenv';

import routes from './routes';

dotenv.config();

const server = express();

server.set('view engine','mustache');
server.set('views', path.join(__dirname,'views'));
server.engine('mustache',mustache());

console.log(path.join(__dirname,'../public'));
server.use(express.static(path.join(__dirname,'../public')));

server.use(express.urlencoded({extended: true}));

server.use(routes);

server.use((req: Request, res: Response)=>{
	res.status(404).send("Not found!");
});

server.listen(process.env.PORT);
