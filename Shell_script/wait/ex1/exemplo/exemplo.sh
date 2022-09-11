#!/bin/bash

SCRIPTS=("fail.sh" "success.sh")

for ((x=0; x<${#SCRIPTS[*]}; x++))
do
	./${SCRIPTS[$x]} &
	process_id=$!
	echo "Continuando a execução do script principal..."
	wait $process_id
	echo "Finalizou o script principal com status $?"
done
