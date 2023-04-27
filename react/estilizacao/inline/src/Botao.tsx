type Props = {
	text: string;
	clickfn: (txt:string)=> void;
}

export const Botao = ({text,clickfn}:Props)=>{
	const handle = ()=>{
		clickfn("Frase");
	}
	return (
		<button onClick={handle}>{text}</button>
	);
};
