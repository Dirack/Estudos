PROGRAM main
!
! main.f90 (Fortran 90)
! 
! Purpose: Scratch of an 'explode' function. It creates an array of strings
! from a string, using a delimiter.
!
! Example: 'hello Fortran world' will create the array ('hello','Fortran','world')
! 
! Site: http://www.dirackslounge.online
! 
! Version 1.0
! 
! Programer: Rodolfo Dirack 29/09/2019
! 
! Email: rodolfo_profissional@hotmail.com
! 
! License: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.
IMPLICIT NONE

CHARACTER(len=:),ALLOCATABLE:: str
CHARACTER(len=256):: str_buffer
CHARACTER(len=1),PARAMETER:: delimiter=' '
INTEGER:: n,i,lenstr,dn, num_occurencies
CHARACTER(len=:),ALLOCATABLE,DIMENSION(:):: str_array

WRITE(*,*) "Escreva:"
READ(*,'(A)') str_buffer

str = TRIM(str_buffer)
lenstr = LEN(TRIM(str_buffer))

n = 0
num_occurencies = 0

DO i=1,6

	dn = INDEX(str(1+n:lenstr),delimiter)
	n = n + dn

	IF(dn == 0 .or. (n+dn) >= lenstr) EXIT

	num_occurencies = num_occurencies + 1

END DO 

num_occurencies = num_occurencies + 1

ALLOCATE(str_array(num_occurencies+1),SOURCE=str)

n = 0
DO i=1,num_occurencies+1

	dn = INDEX(str(1+n:lenstr),delimiter)
	IF(dn == 0 .or. (n+dn) >= lenstr)THEN
		dn = INDEX(str(1:lenstr),delimiter,.true.)
		str_array(i) = str(dn+1:lenstr)
		EXIT
	END IF
	str_array(i) = str(1+n:dn+n)
	n = n + dn

END DO

DO i=1,num_occurencies+1

	WRITE(*,'(A)') str_array(i)

END DO






END PROGRAM
