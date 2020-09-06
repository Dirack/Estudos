# getchar_lib - Fortran 95 Library 

## Version (0.1) - Beta

> Module of functions in order to get values from command line.
> This value is passed to a main program in the form 'Key=value'. 
> 'Key' is a label that identify a variable to assign the 'value'.

*GETCHAR* is an operator to get CHARACTER values from command line.

*GETINT* is an operator to get INTEGER values from command line.

*GETREAL* is an operator to get REAL values from command line.

All of them recive a Key string that identifies the value passed through
command line in the form 'Key=value'. And they use that Key to catch the
value and assign to a variable of an specific type.

* Example, to pass a value to the variables 'name', 'balance' and 'age' in a main program:

```shell
~$ ./main.x name=Rodolfo balance=125.50 age=Dirack
```

* Pass a 'Key' to the .GETCHAR., .GETINT., .GETREAL. operator to assign the value associated 
with that key to a variable. Example:

```fortran
PROGRAM main
USE getinput_lib
IMPLICIT NONE

CHARACTER(20):: string
REAL:: money
INTEGER:: userage

string = .GETCHAR."name"
userage = .GETINT."age"
money = .GETREAL."balance"

END PROGRAM
```

