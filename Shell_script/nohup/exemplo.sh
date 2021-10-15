#!/bin/bash

i=0

while :
do
	echo "$i" >> log.txt
	sleep 2
	i=$((i+1))
done
