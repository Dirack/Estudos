#!/bin/bash
echo "Testing wait command"
sleep 20 &
pid=$!
kill $pid
wait $pid
echo $pid was terminated.
