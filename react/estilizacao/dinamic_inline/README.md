# Estilização inline dinâmica do ReactJS

Utilize states e variáveis para estilização dinâmica como no exemplo:

```jsx
const [clicked,setClicked] = useState(false);

const handle = () => {
		setClicked(true);
	}

	return (
		<div>
			<button
				onClick={handle}
				style={{
				backgroundColor: clicked ? 'blue':'purple',
					color:'white',
					border:'0'
			}}>Clique aqui!</button>
		</div>
	);
```
