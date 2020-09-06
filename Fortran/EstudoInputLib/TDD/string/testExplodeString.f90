PROGRAM testExplodeString
!
! testExplodeString.f90 (Fortran 90)
! 
! Purpose: Test explode string subroutine.
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

USE string_lib

IMPLICIT NONE

CHARACTER(len=:),DIMENSION(:),ALLOCATABLE:: buffer1, buffer2, buffer3
INTEGER:: i

CALL explode(buffer1,"ii,jj,kk",",")

DO i=1,SIZE(buffer1)
	WRITE(*,'(A)') buffer1(i)
END DO

CALL explode(buffer2,"ii jj kk"," ")

DO i=1,SIZE(buffer2)
	WRITE(*,'(A)') buffer2(i)
END DO

CALL explode(buffer3,"iijjkk"," ")

DO i=1,SIZE(buffer3)
	WRITE(*,'(A)') buffer3(i)
END DO

END PROGRAM
