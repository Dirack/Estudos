PROGRAM testGetindexOperator
!
! testGetindexOperator.f90 (Fortran 90)
! 
! Purpose: Verify if getindex operator is geting the right index parameter of 
! 'test' passed from command line.
! 
! Site: http://www.dirackslounge.online
! 
! Version 1.0
! 
! Programer: Rodolfo Dirack 17/09/2019
! 
! Email: rodolfo_profissional@hotmail.com
! 
! License: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.

USE getinput_lib

IMPLICIT NONE

INTEGER:: j

j = .GETINDEX."test"

IF(j /= -1)THEN

	WRITE(*,100) j
ELSE
	WRITE(*,200) j
END IF

	100 FORMAT(I1)
	200 FORMAT(I2)

END PROGRAM
