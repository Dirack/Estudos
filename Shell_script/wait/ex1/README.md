## Estudo comando wait em Shell Script

Example-1: Using wait command for multiple processes
After executing the following script, two processes will run in the background and the process id of the first echo command is stored in $process\_id variable. When wait command is executed with $process\_id then the next command will wait for completing the task of the first echo command. The second wait command is used with ‘$!’ and this indicate the process id of the last running process. ‘$?’ is used to read the status value of wait command.



Utilize os seguintes comandos:

```sh
./wait1.sh
```
