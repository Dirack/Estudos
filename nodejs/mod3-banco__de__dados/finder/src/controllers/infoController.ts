import { Request, Response } from 'express';

export const contato = (req: Request, res: Response)=>{
    res.render('pages/contato');
};

export const sobre = (req: Request, res: Response)=>{
    res.render('pages/sobre');
};