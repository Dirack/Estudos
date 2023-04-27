import React from 'react';
import {useState} from 'react';
import {Header} from './components/Header';
import {Photo} from './components/Photo';
import {Photo2} from './components/Photo';
import {Evento} from './components/Evento';

const App = ()=>{
	let [name, setname] = useState('Pedro');

	const handle = (event: React.ChangeEvent<HTMLInputElement>)=>{
		setname(event.target.value);
	}
	return (
		<div>
			<input type="text" value={name} onChange={handle} />
			<hr/>
			Seu nome é: {name}
		</div>
	);
}

export default App;
