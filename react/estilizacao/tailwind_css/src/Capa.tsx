import styled from 'styled-components';

export const Container = styled.div`
	max-width: 600px;
	margin: auto;
	background-color: ${props => props.bgColor};
	color: white;

	span {
		font-weight: bold;
		color: #000;
	}

	.link {
		color: #FFF;
		&:hover {
			color: #00FF00;
		}
	}

	@media (max-width: 500px){
		background-color: green;
	}
`;

export const Botao = styled.button`
	font-size: ${(props) => props.small? '15px':'30px'};
	background-color: ${props => props.bg};
`;
