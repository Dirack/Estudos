import { Request, Response } from 'express';
import nodemailer from 'nodemailer';


export const contato = async (req: Request, res: Response) => {

	// Configurar o transporter
	let transport = nodemailer.createTransport({
		host: "smtp.mailtrap.io",
		port: 2525,
		auth: {
			user: "7cc93254476b04",
			pass: "d283873b5c34c4"
		}
	});

	// Configurar a mensagem
	let message = {
		from: req.body.from,
		to: 'capuleto@gmail.com',
		subject: req.body.subject,
		html: req.body.email,
		text: req.body.email
	};

	// Enviar a mensagem
	let info = await transport.sendMail(message);
	console.log(info);
    res.json({pong: true});
}

