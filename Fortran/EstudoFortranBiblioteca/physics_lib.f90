MODULE physics_lib
!
! physics_lib.f90 (Fortran)
! 
! Objetivo: Funções para a solução de problemas de Física básica.
! 
! Versão 1.0
! 
! Site: http://www.dirackslounge.online
! 
! Programador: Rodolfo A. C. Neves (Dirack) 10/06/2019
! 
! Email: rodolfo_profissional@hotmail.com
! 
! Licença: Software de uso livre e código aberto.

USE math_lib, ONLY : GU_
IMPLICIT NONE

CONTAINS

	FUNCTION forca_grav(m1,m2,d)
		REAL, INTENT(IN):: m1, m2
		REAL, INTENT(IN):: d
		REAL:: forca_grav

		forca_grav = GU_ * (m1 * m2)/(d*d)

	END FUNCTION

END MODULE
