#!/bin/bash

chamada(){
	echo -e "\033[33mfilho $PID chamou!\033[m"
	wait $PID
}

finalizar(){
	echo -e "\033[33mFILHO FINALIZOU\033[m"
}

failreport(){
	echo -e "\033[33mfilho falhou! Tentando chamar filho com parâmetro 3\033[m"
	./teste.sh $$ 3 &
	PID=$!
	wait $PID
}

trap chamada SIGTRAP
trap finalizar SIGINT
trap failreport SIGQUIT

echo -e "\033[33mChamando filho com parâmetro 2\033[m"
./teste.sh $$ 2 &
PID=$!
wait $PID
