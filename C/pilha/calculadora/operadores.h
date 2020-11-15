int retornaIntParaCadaOperador(const char op){
	if(op=='+'){
		return 1;
	}else if(op=='-'){
		return 2;
	}else if(op=='*'){
		return 3;
	}else if(op=='/'){
		return 4;
	}else{
		return 0;
	}
}
