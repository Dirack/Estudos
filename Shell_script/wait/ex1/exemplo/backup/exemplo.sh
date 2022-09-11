#!/bin/bash

echo "Command 1" && sleep 5 && echo "Finished cmd 1" && ls h &

process_id=$!

echo "Continuando a execução do script principal..."
wait $process_id

echo "Finalizou o script principal com status $?"

echo "Command 2" && sleep 5 && echo "Finished cmd 2" &

process_id=$!

echo "Continuando a execução do script principal..."
wait $process_id

echo "Finalizou o script principal com status $?"
