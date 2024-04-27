import {Sequelize} from 'sequelize';
import dotenv from 'dotenv';
import db from './database';

dotenv.config();

export const sequelize = new Sequelize(
	db.db as string,
	db.user as string,
	db.password as string,
	{
		dialect: 'mysql',
		port: parseInt(db.port as string)
	}
);
