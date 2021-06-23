#!/bin/bash

PID="$1"
PARAM="$2"
echo "Pai=$PID filho=$$"

reportfail(){
	echo FILHO: falha catastrófica!
	kill -n 3 $PID
	exit 2
}

trap reportfail err

if [ $PARAM == 2 ]
then
	sleep 3
	ls h
fi

for i in $(seq 3)
do
	kill -n 5 $PID
	echo "FILHO: Olá pai?"
	sleep 3
done

kill -n 2 $PID
