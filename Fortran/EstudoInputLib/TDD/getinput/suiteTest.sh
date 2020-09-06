#!/bin/bash
#
# suiteTest.sh (Shell Script)
# 
# Purpose: Test suite from getinput_lib.f90.
# 
# Site: http://www.dirackslounge.online
# 
# Version 1.0
# 
# Programer: Rodolfo Dirack 17/09/2019
# 
# Email: rodolfo_profissional@hotmail.com
# 
# License: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.

purpleMesage(){

	echo -e "\033[35m$1\033[m"
}

redMesage(){
	echo -e "\033[31m$1\033[m"
}

purpleMesage "# Compilation Step"
cd ../..
make clean
make 
cd -
make clean
make

purpleMesage "# Test GETCHAR without any argument"
TEST=$(./testGetcharOperator.x)
[ -n "$TEST" -a "$TEST" == "std" ] && echo ok  || {
	redMesage "Fail"
	exit 1 
}


purpleMesage "# Test GETCHAR passing an argument name=Dirack"
TEST=$(./testGetcharOperator.x name=Dirack)
[ -n "$TEST" -a "$TEST" == "Dirack" ] && echo ok || { 
	redMesage "Fail"
	exit 1 
}


purpleMesage "# Test GETINT without any argument"
TEST=$(./testGetintOperator.x)
[ -n "$TEST" -a "$TEST" == "0" ] && echo ok || {
	redMesage "Fail"
	echo "$TEST"
	exit 1
}

purpleMesage "# Test GETINT passing an argument i=1"
TEST=$(./testGetintOperator.x i=1)
[ -n "$TEST" -a "$TEST" == "1" ] && echo ok || {
	redMesage "Fail"
	exit 1
}

purpleMesage "# Test GETREAL without any argument"
TEST=$(./testGetrealOperator.x)
[ -n "$TEST" -a "$TEST" == "0.0" ] && echo ok || {
	redMesage "Fail"
	echo "$TEST"
	exit 1
}

purpleMesage "# Test GETREAL passing an argument r=1.0"
TEST=$(./testGetrealOperator.x r=1.0)
[ -n "$TEST" -a "$TEST" == "1.0" ] && echo ok || {
	redMesage "Fail"
	exit 1
}




