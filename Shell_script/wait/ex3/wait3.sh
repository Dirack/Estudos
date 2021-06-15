#!/bin/bash
function check()
{
echo "Sleep for $1 seconds"
sleep $1
exit $2
}
check $1 $2 &
b=$!
echo "Checking the status"
wait $b && echo OK || echo NOT OK

