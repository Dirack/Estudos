import {Router, Request, Response} from 'express';

const router = Router();

router.get('/',(req: Request, res: Response)=>{
	res.send("Home do router");
});

router.get('/contato',(req: Request, res: Response)=>{
	res.send("contato");
});

router.get('/sobre',(req: Request, res: Response)=>{
	res.send("sobre");
});

export default router;
