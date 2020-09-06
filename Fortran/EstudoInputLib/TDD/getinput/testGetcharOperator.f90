PROGRAM testGetcharOperator
!
! testGetcharOperator.f90 (Fortran 90)
! 
! Purpose: Verify if getchar operator is geting the right parameter passed from command line.
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

CHARACTER(10),TARGET:: string
CHARACTER(10),POINTER:: pc 

pc => string

IF (.not.("name".GET.pc)) pc = "std"

WRITE(*,100) string(1:LEN_TRIM(string))
100 FORMAT(A)

END PROGRAM
