PROGRAM testGetOperator
!
! testGetOperator.f90 (Fortran 90)
! 
! Purpose: Verify if get operator is checking if the parameter was passed from command line.
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

INTEGER:: i

i = merge(.GETINT."test",0,.GET."test")

WRITE(*,100) i
100 FORMAT(I1)

END PROGRAM
