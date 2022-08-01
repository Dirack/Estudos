import {Model,DataTypes} from 'sequelize';
import {sequelize} from '../instances/mysql';

export interface UserInstance extends Model{
	id: number,
	email: string,
	password: string
};

export const User = sequelize.define<UserInstance>("user",{
	id: {
		primaryKey: true,
		type: DataTypes.INTEGER
	},
	email:{
		type: DataTypes.STRING
	},
	password:{
		type: DataTypes.STRING
	}},{
		tableName: "usuarios",
		timestamps: false

});
