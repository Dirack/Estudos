#!/bin/bash

while true; do echo -n .; sleep 1; done &
trap "kill $!" SIGTERM SIGKILL

echo "Running command $0"
./teste.sh > login.txt
echo done
kill $!
