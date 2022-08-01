require('dotenv').config();
const express = require('express');
const {Sequelize} = require('sequelize');

const app = express();

app.use(express.json);

const sequelize = new Sequelize(
        process.env.MYSQL_DB,
        process.env.MYSQL_USER,
        process.env.MYSQL_PASSWORD,
        {
                dialect: 'mysql',
                port: parseInt(process.env.MYSQL_PORT)
        }

);

app.get('/',(req, res)=>{
	res.status(201).json({msg:"Bem vindo a nossa API!"});
});

app.post('/auth/register',async (req, res)=>{
	const {name,email,password,confirmPassword} = req.body;
	if(!name){
		res.status(422).json({msg:"O nome é obrigatório!"});
	}
});

app.listen(process.env.PORT);

