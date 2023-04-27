import React from 'react';
import {useState} from 'react';
import {Header} from './components/Header';
import {Photo} from './components/Photo';
import {Photo2} from './components/Photo';
import {Evento} from './components/Evento';
import {Pessoa} from './components/Pessoa';
import {Botao} from './Botao';

const App = ()=>{
	let lista = [
		'fulano',
		'cicrano',
		'beltrano',
		'futrica',
		'abdala',
		'texeira'
	];
	let lista2 = [
		{name:'fulano',age:90},
		{name:'cicrano',age:80},
		{name:'beltrano',age:80},
		{name:'futrica',age:69},
		{name:'abdala',age:12},
		{name:'texeira',age:53}
	];


	return (
		<div>
			<h2>Lista de clientes</h2>
			<ul>
				{lista.map((item, index)=>(
					<li key={index}>{item.toUpperCase()}</li>
				))}
			</ul>
			<hr />
			<h2>Lista de clientes</h2>
			<ul>
				{lista2.map((item, index)=>(
					<li key={index}>{item.name.toUpperCase()} tem {item.age} anos</li>
				))}
			</ul>
			<hr />
			<ul>
				{lista2.map((item, index)=>(
					<Pessoa key={index} data={item} />
				))}
			</ul>

		</div>
	);
}

export default App;
