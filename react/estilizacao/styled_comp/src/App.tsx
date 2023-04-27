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

const Container = styled.div`
	background-color: blue;
	color: white;
`;

const App = ()=>{
	return (
		<Container>
			Texto do componente
		</Container>
	);
}

export default App;
