MODULE parameterTable_lib
!
!       Objetivo: Montar uma tabela de parâmetros passados pela
!	linha de comandos na forma 'chave=valor'.
!
!       Versão 1.0
!
!       Programador: Rodolfo A. C. Neves (Dirack) 08/06/2019
!
!	Site: http://www.dirackslounge.online
!
!	Email(manutenção): rodolfo_profissional@hotmail.com

! Definir a tabela de parâmetros
TYPE:: table

	CHARACTER(len=20):: chave
	CHARACTER(len=20):: valor

END TYPE table

CONTAINS

        SUBROUTINE construirTabelaDeParametros()
                TYPE(table), ALLOCATABLE, DIMENSION(:):: tabela
		INTEGER:: numArgumentosPassadosLinhaComandos
		CHARACTER(len=20):: chaveLida

		numArgumentosPassadosLinhaComandos = COMMAND_ARGUMENT_COUNT()

		ALLOCATE(tabela(numArgumentosPassadosLinhaComandos), STAT=istat)

                DO i=1,numArgumentosPassadosLinhaComandos

			CALL GET_COMMAND_ARGUMENT(i, chaveLida)

			tabela(i)%chave = chaveLida

			tabela(i)%valor = chaveLida 

			WRITE(*,*) tabela(i)%chave

		END DO

        END SUBROUTINE



END MODULE
