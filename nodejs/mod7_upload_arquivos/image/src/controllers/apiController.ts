import { unlink } from 'fs/promises';
import { Request, Response } from 'express';
import { User } from '../models/User';
import JWT from 'jsonwebtoken'; 
import dotenv from 'dotenv';
import sharp from 'sharp';

dotenv.config();

export const ping = (req: Request, res: Response) => {
    res.json({pong: true});
}

export const register = async (req: Request, res: Response) => {
    if(req.body.email && req.body.password) {
        let { email, password } = req.body;

        let hasUser = await User.findOne({where: { email }});
        if(!hasUser) {
            let newUser = await User.create({ email, password });
		const token = JWT.sign(
			{id: newUser.id, email: newUser.email},
			process.env.JWT_SECRET_KEY as string,
			{expiresIn:'2h'}
		);

            res.status(201);
            res.json({ id: newUser.id, token });
        } else {
            res.json({ error: 'E-mail já existe.' });
        }
	}else{
		res.json({ error: 'E-mail e/ou senha não enviados.' });
	}
}

export const login = async (req: Request, res: Response) => {
    if(req.body.email && req.body.password) {
        let email: string = req.body.email;
        let password: string = req.body.password;

        let user = await User.findOne({ 
            where: { email, password }
        });

        if(user) {

		const token = JWT.sign(
			{id: user.id, email: user.email},
			process.env.JWT_SECRET_KEY as string,
			{expiresIn:'2h'}
		);
            res.json({ status: true, token });
            return;
        }
    }

    res.json({ status: false });
}

export const list = async (req: Request, res: Response) => {
    let users = await User.findAll();
    let list: string[] = [];

    for(let i in users) {
        list.push( users[i].email );
    }

    res.json({ list });
}

export const uploadFile = async (req: Request, res: Response)=>{
	if(req.file){
		await sharp(req.file.path).resize(500)
		.toFormat('jpeg')
		.toFile(`./public/media/${req.file.filename}.jpg`);
		res.json({image:`${req.file.filename}.jpg`});
		await unlink(req.file.path);
	}else{
		res.status(400).json({error:"Um erro ocorreu"});
	}
};

export const uploadArray = async (req: Request, res: Response)=>{
	console.log(req.files);
	res.json({});
};

export const uploadFields = async (req: Request, res: Response)=>{
	type UploadFiles = {
		avatar: Express.Multer.File[];
		gallery: Express.Multer.File[];
	};
	console.log(req.files);
	const files = req.files as UploadFiles;
	console.log("AVATAR:",files.avatar);
	console.log("GALLERY:",files.gallery);
	res.json({});
};
