MODULE funcaoIntegrando
!
! funcaoIntegrando.f90 (Fortran)
! 
! Objetivo:
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

IMPLICIT NONE

REAL,SAVE:: p1, p2, p3

CONTAINS

	FUNCTION integrando(lambda)
		REAL, INTENT(IN):: lambda
		REAL:: integrando 

		integrando = p1*exp(-p2*lambda)*(p2*cos(p3*lambda)+p3*sin(p3*lambda))

	END FUNCTION

END MODULE
