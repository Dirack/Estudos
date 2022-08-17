import React from 'react';
import {Header} from './components/Header';
import {Photo} from './components/Photo';
import {Photo2} from './components/Photo';

const App = ()=>{
	let name: string = 'Rodolfo Dirack';
	function somar(n1: number, n2: number){
		return n1+n2;
	}
	//return React.createElement('div',null,'Olá mundo, React! Fala '+name.toUpperCase()+' Vc tem '+somar(10,20)+' anos');
	return (
		<>
		<Header title="Título qualquer" />
		<Header />
		<div>Olá mundo, react!</div>
		<Photo url="http://www.google.com.br/google.jpg" legend="Estudo sobre react" />
		<hr />
		<Photo2>
			<img src="http://www.google.com.br/google.jpg" legend="Uso do children" />
		</Photo2>
		</>
	);
}

export default App;
