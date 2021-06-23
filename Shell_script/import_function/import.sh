#!/bin/bash

import(){
	local FILE="${1:?Error: import function needs at least 1 parameter}"
	if [ -f "$FILE" ]; then
		source "$FILE"
	else
		echo "$BASH_LINENO: Error: Cannot find library at: $FILE"
		exit 1
	fi
}

import existe.sh

