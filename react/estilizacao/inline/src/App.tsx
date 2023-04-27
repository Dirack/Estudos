import React from 'react';
import {useState} from 'react';
import {Header} from './components/Header';
import {Photo} from './components/Photo';
import {Photo2} from './components/Photo';
import {Evento} from './components/Evento';
import {Pessoa} from './components/Pessoa';
import {Botao} from './Botao';

const App = ()=>{
	return (
		<div>
			<button style={{
				backgroundColor:'blue',
					color:'white',
					border:'0'
			}}>Clique aqui!</button>
		</div>
	);
}

export default App;
