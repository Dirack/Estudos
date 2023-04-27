import React from 'react';
import {useState} from 'react';
import {Header} from './components/Header';
import {Photo} from './components/Photo';
import {Photo2} from './components/Photo';
import {Evento} from './components/Evento';

const App = ()=>{
	let [nome, setnome] = useState('');
	let [sobrenome, setsobrenome] = useState('');
	let [idade, setidade] = useState('');

	const handleNome = (event: React.ChangeEvent<HTMLInputElement>)=>{
		setnome(event.target.value);
	}
	const handleSobrenome = (event: React.ChangeEvent<HTMLInputElement>)=>{
		setsobrenome(event.target.value);
	}
	const handleIdade = (event: React.ChangeEvent<HTMLInputElement>)=>{
		setidade(event.target.value);
	}

	return (
		<div>
			Nome: <input type="text" value={nome} onChange={handleNome} />
			Sobrenome: <input type="text" value={sobrenome} onChange={handleSobrenome} />
			Idade: <input type="text" value={idade} onChange={handleIdade} />
			<hr/>
			Seu nome é: {nome} {sobrenome}
			Vc tem: {idade} anos
		</div>
	);
}

export default App;
