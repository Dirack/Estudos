MODULE input_lib
!
!       Objetivo: Conjunto de funções para tratar argumentos
!       passados através da linha de comandos pelo usuário
!	na forma 'chave=valor'.
!
!       Versão 1.0
!
!       Programador: Rodolfo A. C. Neves (Dirack) 30/01/2019
!
!	Site: http://www.dirackslounge.online
!
!	email(manutenção): rodolfo_profissional@hotmail.com
      
IMPLICIT NONE

INTERFACE OPERATOR (.GETINT.)
        MODULE PROCEDURE integerPassadoLinhaComandos
END INTERFACE

INTERFACE OPERATOR (.GETREAL.)
        MODULE PROCEDURE realPassadoLinhaComandos
END INTERFACE

INTERFACE OPERATOR (.GET.)
       MODULE PROCEDURE verificaSeArgumentoFoiPassado
END INTERFACE

INTERFACE OPERATOR (.GETCHAR.)
       MODULE PROCEDURE characterPassadoLinhaComandos
END INTERFACE

INTERFACE OPERATOR (.GETKEY.)
       MODULE PROCEDURE retornaChaveArgumento
END INTERFACE

CONTAINS

	! Retornar valor do argumento passado ao programa através
	! da linha de comandos na forma 'chave=valor'
	FUNCTION retornaValorArgumento(chaveProcurada)
		CHARACTER(len=*),INTENT(IN):: chaveProcurada
		CHARACTER(len=20):: retornaValorArgumento
		INTEGER:: numArgumentosPassadosLinhaComandos
		INTEGER:: i, chaveFoiEncontrada, indiceDoCaractereIgual
		CHARACTER(len=20):: chaveLida

     		numArgumentosPassadosLinhaComandos=COMMAND_ARGUMENT_COUNT()

		DO i=1,numArgumentosPassadosLinhaComandos

			CALL GET_COMMAND_ARGUMENT(i, chaveLida)

			! len_trim: Pegua o último caractere não branco de 'chaveLida'
			! index: Procura o índice da primeira ocorrência de 
			! uma substring, da esquerda para a direita.
			! O índice retornado por index deve ser
			! 1 para indicar que o parâmetro foi passado, se for
			! diferente de um, este parâmetro não foi passado
		
			chaveFoiEncontrada = index(chaveLida(1:len_trim(chaveLida)),chaveProcurada//"=")

			IF ( chaveFoiEncontrada == 1) THEN

				! Retire só o valor do argumento passado na forma 'var=valor'
				indiceDoCaractereIgual=index(chaveLida(1:len_trim(chaveLida)),"=")

				retornaValorArgumento = chaveLida(indiceDoCaractereIgual+1:len_trim(chaveLida))
				RETURN
				
			END IF

		END DO

		retornaValorArgumento = "NULL"
		
	END FUNCTION retornaValorArgumento

	! Retornar chave do argumento passado ao programa através
	! da linha de comandos na forma 'chave=valor'
	FUNCTION retornaChaveArgumento(indiceChaveProcurada)
		INTEGER,INTENT(IN):: indiceChaveProcurada
		CHARACTER(len=20):: retornaChaveArgumento
		INTEGER:: indiceDoCaractereIgual
		CHARACTER(len=20):: chaveLida
		INTEGER:: numArgumentosPassadosLinhaComandos

     		numArgumentosPassadosLinhaComandos=COMMAND_ARGUMENT_COUNT()

		IF( indiceChaveProcurada > numArgumentosPassadosLinhaComandos )THEN

			retornaChaveArgumento = "NULL"
			RETURN

		ELSE

			CALL GET_COMMAND_ARGUMENT(indiceChaveProcurada, chaveLida)

			! len_trim: Pegua o último caractere não branco de 'chaveLida'
			! index: Procura o índice da primeira ocorrência de 
			! uma substring, da esquerda para a direita.
			indiceDoCaractereIgual=index(chaveLida(1:len_trim(chaveLida)),"=")
			retornaChaveArgumento = chaveLida(1:indiceDoCaractereIgual-1)
			RETURN

		END IF
		
	END FUNCTION retornaChaveArgumento


	! Verificar se o argumento 'chave=valor' foi passado pelo usuário
	FUNCTION verificaSeArgumentoFoiPassado(chave)
		LOGICAL:: verificaSeArgumentoFoiPassado
		CHARACTER(len=*),INTENT(IN):: chave

		IF(COMMAND_ARGUMENT_COUNT()==0) THEN
			verificaSeArgumentoFoiPassado = .false.
			RETURN

		ELSE IF(retornaValorArgumento(chave) /= "NULL" ) THEN

			verificaSeArgumentoFoiPassado = .true.
			RETURN

		ELSE
			verificaSeArgumentoFoiPassado = .false.
			RETURN

		END IF

	END FUNCTION verificaSeArgumentoFoiPassado

	! Recebe um INTEGER passado pela linha de comandos
	! na forma 'chave=valor'
	FUNCTION integerPassadoLinhaComandos(chave)
		CHARACTER (len=*), INTENT(IN):: chave
		INTEGER:: integerPassadoLinhaComandos
		CHARACTER(len=20):: valorArgumento

     		valorArgumento = retornaValorArgumento(chave)

		IF(valorArgumento /= "NULL") THEN
			READ(valorArgumento , *) integerPassadoLinhaComandos
			RETURN
		END IF
		
		integerPassadoLinhaComandos = 0

	END FUNCTION integerPassadoLinhaComandos

	! Recebe um REAL passado pela linha de comandos
	! na forma 'chave=valor'
	FUNCTION realPassadoLinhaComandos(chave)
		CHARACTER (len=*), INTENT(IN):: chave
		REAL:: realPassadoLinhaComandos
		CHARACTER(len=20):: valorArgumento

		valorArgumento = retornaValorArgumento(chave)

		IF(valorArgumento /= "NULL") THEN

			READ(valorArgumento, *) realPassadoLinhaComandos
			RETURN

		END IF

		realPassadoLinhaComandos = 0.

	END FUNCTION realPassadoLinhaComandos

	! Recebe um CHARACTER passado pela linha de comandos
	! na forma 'chave=valor'
	FUNCTION characterPassadoLinhaComandos(chave)
		CHARACTER (len=*), INTENT(IN):: chave
		CHARACTER(len=20):: characterPassadoLinhaComandos
		CHARACTER(len=20):: valorArgumento

		valorArgumento = retornaValorArgumento(chave)

		IF(valorArgumento /= "NULL") THEN

			characterPassadoLinhaComandos = valorArgumento
			RETURN

		END IF

		characterPassadoLinhaComandos = "NULL"

	END FUNCTION characterPassadoLinhaComandos

END MODULE
