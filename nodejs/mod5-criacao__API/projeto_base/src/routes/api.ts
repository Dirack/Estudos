import {Router, Request, Response} from 'express';
import * as ApiController from '../controllers/apiController';

const router = Router();

router.get('/ping',ApiController.ping);

router.get('/random',ApiController.random);

router.get('/nome/:nome',ApiController.nome);

router.post('/frases',ApiController.frases);

router.get('/listar',ApiController.listar);

router.get('/umafrase/aleatoria',ApiController.aleatoria);

router.get('/umafrase/:id',ApiController.umafrase);

router.put('/atualizar/:id',ApiController.atualizar);

router.delete('/deletar/:id',ApiController.deletar);

export default router;
