MODULE getinput_lib
!
! getinput_lib.f90 (Fortran)
! 
! Purpose: To get a parameter from command line, in the form
! 'Key=value' and assign it to a variable.
! 
! Version 1.0
! 
! Site: http://www.dirackslounge.online
! 
! Programer: Rodolfo A. C. Neves (Dirack) 17/09/2019
! 
! Email: rodolfo_profissional@hotmail.com
! 
! License: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.    
IMPLICIT NONE

INTERFACE OPERATOR (.GET.)
        MODULE PROCEDURE getCharValueFromCommandLine
	MODULE PROCEDURE getIntegerValueFromCommandLine
	MODULE PROCEDURE getRealValueFromCommandLine
END INTERFACE

CONTAINS

	FUNCTION getIndexParameterFromCommandLine(key)
		INTEGER:: getIndexParameterFromCommandLine
		CHARACTER(len=*),INTENT(IN):: key
		CHARACTER(20):: readKey
		INTEGER:: numArgumentsPassed
		CHARACTER:: NULL = ""//CHAR(0)
		INTEGER:: i
		INTEGER:: keyWasFound

		numArgumentsPassed = COMMAND_ARGUMENT_COUNT()

                IF( numArgumentsPassed == 0)THEN
                        getIndexParameterFromCommandLine = -1
			RETURN
                END IF

		DO i=1,numArgumentsPassed

			CALL GET_COMMAND_ARGUMENT(i, readKey)

			keyWasFound = INDEX(readKey(1:LEN_TRIM(readKey)),key//"=")

			IF( keyWasFound == 1)THEN

				getIndexParameterFromCommandLine = i
				RETURN
				
			END IF
		
		END DO

                getIndexParameterFromCommandLine = -1

	END FUNCTION getIndexParameterFromCommandLine

	FUNCTION getCharValueFromCommandLine(key,pc)
		CHARACTER(len=*), POINTER, INTENT(IN):: pc
		LOGICAL:: getCharValueFromCommandLine
		CHARACTER(len=*),INTENT(IN):: key
		CHARACTER(20):: readKey
		CHARACTER:: NULL = ""//CHAR(0)
		INTEGER:: i
		INTEGER:: valueStartIndex

		i = getIndexParameterFromCommandLine(key)

                IF( i == -1)THEN
                        getCharValueFromCommandLine = .FALSE.
			pc = ""//CHAR(0)
			RETURN
                END IF

		CALL GET_COMMAND_ARGUMENT(i, readKey)

		valueStartIndex=INDEX(readKey(1:LEN_TRIM(readKey)),"=") + 1
		getCharValueFromCommandLine = .TRUE.
		pc = readKey(valueStartIndex:LEN_TRIM(readKey))

	END FUNCTION getCharValueFromCommandLine

	FUNCTION getIntegerValueFromCommandLine(key,pi)
		INTEGER, POINTER, INTENT(IN):: pi
		LOGICAL:: getIntegerValueFromCommandLine
		CHARACTER(len=*), INTENT(IN):: key
		CHARACTER(len=20),TARGET:: stringValue
		CHARACTER:: NULL = ""//CHAR(0)
		CHARACTER(len=20),POINTER:: pc

		pc => stringValue
 
		IF(key.GET.pc) THEN
			READ(stringValue,*) pi
			getIntegerValueFromCommandLine = .TRUE.
			RETURN
		END IF

		getIntegerValueFromCommandLine = .FALSE.


	END FUNCTION getIntegerValueFromCommandLine

	FUNCTION getRealValueFromCommandLine(key,pr)
		REAL, POINTER, INTENT(IN):: pr
		LOGICAL:: getRealValueFromCommandLine
		CHARACTER(len=*), INTENT(IN):: key
		CHARACTER(len=20),TARGET:: stringValue
		CHARACTER:: NULL = ""//CHAR(0)
		CHARACTER(len=20),POINTER:: pc

		pc => stringValue

		IF(key.GET.pc) THEN
			READ(stringValue,*) pr
			getRealValueFromCommandLine = .TRUE.
			RETURN
		END IF

		getRealValueFromCommandLine = .FALSE.

	END FUNCTION getRealValueFromCommandLine

END MODULE
