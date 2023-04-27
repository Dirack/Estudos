import React from 'react';
import {useState} from 'react';
import {Header} from './components/Header';
import {Photo} from './components/Photo';
import {Photo2} from './components/Photo';
import {Evento} from './components/Evento';
import {Pessoa} from './components/Pessoa';
import {Botao} from './Botao';

const App = ()=>{
	const [show, setShow] = useState(false);

	const handle = ()=>{
		//setShow(!show)
		if(show){
			setShow(false)
		}else{
			setShow(true)
		}
	}
	return (
		<div>
			<button onClick={handle}>{show ? 'Ocultar':'Mostrar'}</button>
		{show === true && <div>bla bla bla...</div>}
		</div>
	);
}

export default App;
