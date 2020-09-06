PROGRAM testGetrealOperator
!
! testGetrealOperator.f90 (Fortran 90)
! 
! Purpose: Verify if getreal operator is geting the right parameter passed from command line.
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

REAL,TARGET:: r
REAL,POINTER:: pr

pr => r

IF (.not.("r".GET.pr)) pr = 0

WRITE(*,100) r

100 FORMAT(F3.1)

END PROGRAM
