PROGRAM integracaoNumerica
!
! integracaoNumerica.f90 (Fortran)
! 
! Objetivo: Realizar testes de integração numérica em Fortran. Recebendo os parâmetros
! a, b, c de um arquivo e realizadno a integração de F(lambda, a, b, c).
! Mais detalhes no arquivo Fortran_2019_4.pdf nesta pasta.
! 
! Versão 1.0
! 
! Site: http://www.dirackslounge.online
! 
! Programador: Rodolfo A. C. Neves (Dirack) 02/07/2019
! 
! Email: rodolfo_profissional@hotmail.com
! 
! Licença: Software de uso livre e código aberto.
USE integral
IMPLICIT NONE

REAL:: x
REAL:: integralDe0aX
REAL:: area
REAL, PARAMETER:: a=0., b=5.
INTEGER, PARAMETER:: n=500
REAL, PARAMETER:: dx=0.01
INTEGER:: i, j
CHARACTER(20), PARAMETER:: arquivo_in="parametros_ABC.dat"
CHARACTER(20), PARAMETER:: arquivo_out="Integral.csv"
INTEGER:: ierror=0
!REAL:: p1, p2, p3

OPEN(UNIT=11,FILE=arquivo_in,STATUS="old", ACTION="read", IOSTAT=ierror)

OPEN(UNIT=22,FILE=arquivo_out,STATUS="replace", ACTION="write", IOSTAT=ierror)

DO j=1,7

	CALL carregarParametros()

	area = 0.

	DO i=0,n-1

		x=i*dx

		CALL trapezios(integrando, a, x, n, area)

		WRITE(22,100) x, area

	END DO
END DO

100 FORMAT(F6.3,",",F6.3)
	CLOSE(22)
	CLOSE(11)

END PROGRAM
