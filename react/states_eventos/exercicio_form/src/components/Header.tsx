type Props = {
	title?: string;
}

export const Header = (prop: Props)=>{
	return (
		<header>
			<h1>{prop.title}</h1>
			<hr />
		</header>
	);
}

