import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response)=>{
    res.send('Home do Painel');
});

router.get('/noticias', (req: Request, res: Response)=>{
    res.send('Lista de notícias cadastradas');
});

export default router;