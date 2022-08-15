import { Router } from 'express';
import * as TodoController from '../controllers/todoController';
import multer from 'multer';
import * as ApiController from '../controllers/apiController';

const storage = multer.diskStorage({
	destination: (req,file,cb)=>{
		cb(null,'./tmp');
	},
	filename: (req,file,cb)=>{
		let randomName = Math.floor(Math.random()*99999999);
		cb(null,`${randomName+Date.now()}.jpg`);
	}
});

const upload = multer({
	storage,
	fileFilter: (req,file,cb)=>{
		const allowed: string[] = ['image/jpg','image/jpeg','image/png'];
		console.log("INFO:",file);
		if(allowed.includes(file.mimetype)){
			cb(null,true);
		}else{
			cb(null,false);
		}
	},
	limits: { fieldSize: 20000000}
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
