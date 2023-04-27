import React from 'react';
import {useState} from 'react';
import {Header} from './components/Header';
import {Photo} from './components/Photo';
import {Photo2} from './components/Photo';
import {Evento} from './components/Evento';
import {Pessoa} from './components/Pessoa';
import {Botao} from './Botao';
import styles from './styles.module.css';

const App = ()=>{
	return (
		<div>
			<button className={styles.botao}>Clique aqui!</button>
		</div>
	);
}

export default App;
