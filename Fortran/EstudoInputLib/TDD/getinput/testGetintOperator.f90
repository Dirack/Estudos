PROGRAM testGetintOperator
!
! testGetintOperator.f90 (Fortran 90)
! 
! Purpose: Verify if getint operator geting the right parameter passed from command line.
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

INTEGER,TARGET:: i
INTEGER,POINTER:: pi

pi => i

IF (.not.("i".GET.pi)) pi = 0

WRITE(*,100) i

100 FORMAT(I1)

END PROGRAM
