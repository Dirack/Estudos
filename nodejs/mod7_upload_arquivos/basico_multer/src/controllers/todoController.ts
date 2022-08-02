import {Request,Response} from 'express';
import {Todo} from '../models/Todo';

export const all = async (req: Request, res: Response)=>{
	let tarefas = await Todo.findAll();
	res.json({tarefas});
};

export const add = async (req: Request, res: Response)=>{
	if(req.body.title){
		let newTodo = await Todo.create({
			title: req.body.title,
			done: req.body.done ? true : false
		});
		return res.status(201).json({item:newTodo});
	}

	return res.status(404).json({error:'Tarefa não adicionada'});
};
export const update = async (req: Request, res: Response)=>{

	const id: string = req.params.id;
	let todo = await Todo.findByPk(id);
	if(todo){
		if(req.body.title){
			todo.title = req.body.title;
		}
		if(req.body.done){
			switch(req.body.done.toLowerCase()){
				case 'true':
				case '1':
					todo.done = true;
					break;
				case 'false':
				case '0':
					todo.done = false;
					break;
			}
		}

		await todo.save();
		res.status(201).json({item:todo});
	}else{
		res.status(404).json({error:'Id não encontrado'});
	}
};
export const remove = async (req: Request, res: Response)=>{
	let id = req.params.id;
	let todo = await Todo.findByPk(id);
	if(todo){
		await todo.destroy();
	}
	res.json({});
};
