import React from 'react';
import {useState} from 'react';
import {Header} from './components/Header';
import {Photo} from './components/Photo';
import {Photo2} from './components/Photo';
import {Evento} from './components/Evento';

const App = ()=>{
	let [n, setn] = useState(0);
	const handleMinus = ()=>{
		setn(n-1);
	}
	const handlePlus = ()=>{
		setn(n+1);
	}

	return (
		<div>
			<button onClick={handleMinus}>-</button>
			<div>{n}</div>
			<button onClick={handlePlus}>+</button>
		</div>
	);
}

export default App;
