PROGRAM testGetlistOperator
!
! testGetlistOperator.f90 (Fortran 90)
! 
! Purpose: Verify if getlist operator is geting the list os strigs from command line.
! 
! Site: http://www.dirackslounge.online
! 
! Version 1.0
! 
! Programer: Rodolfo Dirack 04/10/2019
! 
! Email: rodolfo_profissional@hotmail.com
! 
! License: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.
USE getinput_lib
USE string_lib

IMPLICIT NONE

CHARACTER(len=:),DIMENSION(:),ALLOCATABLE:: stringList
CHARACTER(len=20),TARGET:: string
CHARACTER(len=20),POINTER:: pc
INTEGER:: i

pc => string

IF(.not.("name".GET.pc)) pc = ""//CHAR(0)

CALL explode(stringList,string,',')

DO i=1,SIZE(stringList)
	WRITE(*,100) stringList(i)
END DO
100 FORMAT(A)

END PROGRAM
