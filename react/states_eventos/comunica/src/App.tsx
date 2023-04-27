import React from 'react';
import {useState} from 'react';
import {Header} from './components/Header';
import {Photo} from './components/Photo';
import {Photo2} from './components/Photo';
import {Evento} from './components/Evento';
import {Botao} from './Botao';

const App = ()=>{
	let textoBotao = "Clica aqui!";
	let func = (txt:string)=>{
		alert('clicou '+txt);
	}
	return (
		<div>
			<Botao text={textoBotao} clickfn={func} />
		</div>
	);
}

export default App;
