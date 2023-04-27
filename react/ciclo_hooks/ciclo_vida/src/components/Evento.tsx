export const Evento = ()=>{
	const handleButtonClick = ()=>{
		alert('clique!');
	}
	return (
		<div>
			<button onClick={handleButtonClick}>Click</button>
		</div>
	);
}
