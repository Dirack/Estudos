import './Quadrado.css';

const Quadrado = ()=>{
	const handleButtonClick = ()=>{
		alert('clicou!');
	}

	return (
		<div id="quadrado" onClick={handleButtonClick}>
		</div>
	);
}

export default Quadrado
