import { Router } from 'express';
import * as TodoController from '../controllers/todoController';
import multer from 'multer';
import * as ApiController from '../controllers/apiController';

const upload = multer({
	dest:'./tmp'
});

const router = Router();

router.get('/todo',TodoController.all);
router.post('/todo',TodoController.add);
router.put('/todo/:id',TodoController.update);
router.delete('/todo/:id',TodoController.remove);
router.post('/upload',upload.single('avatar'),ApiController.uploadFile);
router.post('/uploadSeveral',upload.array('avatars',2),ApiController.uploadArray);
router.post('/uploadFields',upload.fields([
	{name:'avatar',maxCount:1},
	{name:'gallery',maxCount:3}
]),ApiController.uploadFields);

export default router;
