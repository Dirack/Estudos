import {ReactNode} from 'react';

type Props = {
	url: string;
	legend: string;
}

type Teste = {
	legend: string;
	children: ReactNode;
}

export const Photo = ({url,legend}: Props)=>{
	return (
		<div>
			<img src={url} />
			<p>{legend}</p>
		</div>
	);
}

export const Photo2 = ({legend,children}: Teste)=>{
	return (
		<div>
			{children}
			<p>{legend}</p>
		</div>
	);
}
