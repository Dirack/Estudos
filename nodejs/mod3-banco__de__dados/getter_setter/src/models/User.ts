import {Model,DataTypes} from 'sequelize';
import {sequelize} from '../instances/mysql';

export interface UserInstance extends Model{
	id: number;
	name: string;
	age: number;
};

export const User = sequelize.define<UserInstance>("user",{
	id:{
		primaryKey:true,
		autoIncrement: true,
		type: DataTypes.INTEGER
	},
	name:{
		type:DataTypes.STRING,
		get(){
			const raw = this.getDataValue('name');
			return raw.toUpperCase();
		}
	},
	firstLetter:{
		type: DataTypes.VIRTUAL,
		get(){
			let name: string = this.getDataValue('name');
			return name.charAt(0);
		}
	},
	age:{
		type:DataTypes.INTEGER,
		defaultValue: 18,
		set(value: number){
			if(value < 18)
				this.setDataValue('age',18);
		}
	}},{
		tableName: "users",
		timestamps: false
});
