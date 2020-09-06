PROGRAM teste
USE input_lib
!
!	Objetivo: Exemplo de uso de input_lib.f90
!
!	Versão 1.0
!
!	Email (manutenção): rodolfo_profissional@hotmail.com
!
!	Site: http://www.dirackslounge.online
!
!	Programador: Rodolfo A. C. Neves (Dirack) 30/01/2019

IMPLICIT NONE

INTEGER:: i ! inteiro a ser passado pela linha de comandos
REAL:: r ! Real a ser passado pela linha de comandos
CHARACTER(len=20):: nome="NULL" ! Nome passado pela linha de comandos

! Verificar parâmetros passados pela linha de comandos
i = merge(.GETINT."i",0, .GET."i")  
r = merge(.GETREAL."r", 0., .GET."r")

IF(.GET."nome") THEN
	nome = .GETCHAR."nome"
END IF

! Escreva na tela
WRITE(*,*) "i=", i
WRITE(*,*) "r=", r
WRITE(*,*) "O nome passado foi: ", nome
WRITE(*,*) "O Primeiro argumento passado foi: ", .GETKEY.1
WRITE(*,*) "Com o valor ", .GETINT."i" 
WRITE(*,*) "O Segundo argumento passado foi: ", .GETKEY.2
WRITE(*,*) "Com o valor ", .GETREAL."r" 
WRITE(*,*) "O Terceiro argumento passado foi: ", .GETKEY.3
WRITE(*,*) "Com o valor ", .GETCHAR."nome"


END PROGRAM
