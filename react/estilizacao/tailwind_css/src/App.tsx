import React from 'react';
import {useState} from 'react';
import {Header} from './components/Header';
import {Photo} from './components/Photo';
import {Photo2} from './components/Photo';
import {Evento} from './components/Evento';
import {Pessoa} from './components/Pessoa';
import {Botao} from './Botao';
import './styles.css';
import styled from 'styled-components';
import * as C from './Capa';

const App = ()=>{
	return (
		<>
		<div className="bg-black text-red-500">
			Texto qualquer...
		</div>
		<C.Container bgColor="#0000FF">
			<span>Texto do componente</span>
			<a className="link">Capa</a>
			<C.Botao bg="#FF0000" small>Botao Grande</C.Botao>
			<C.Botao bg="#00FF00" small>Botao Pequeno</C.Botao>
		</C.Container>
		</>
	);
}

export default App;
