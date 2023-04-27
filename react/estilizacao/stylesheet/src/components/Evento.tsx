import {useState} from 'react';

export const Evento = ()=>{
	let [nome,setName] = useState('Fulano');
	const handleButtonClick = ()=>{
		setName('Dirack');
	}
	return (
		<div>
			O número é: {nome}
			<button onClick={handleButtonClick}>Click</button>
		</div>
	);
}
