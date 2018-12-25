PROGRAM fortran2shell
!
! Objetivo: Receber variáveis através da linha de comando do shell
! para o programa em FORTRAN. Se o argumento passado pelo usuário for 
! igual a -f, o programa exibirá uma mensagem na tela.
!
! Versão 1.0
!
! Programador: Rodolfo A. C. Neves 11/04/2018

IMPLICIT NONE !Não permitir variável implícita

INTEGER:: contador ! contador de argumentos passados
INTEGER :: i ! Contador de laço
CHARACTER(len=32) :: arg !recebe argumentos da linha de comando

      ! Exemplifica a execução de um comando shell através do FORTRAN
      ! echo "oi" (exibe na tela as palavras oi shell)
      CALL EXECUTE_COMMAND_LINE("echo 'oi shell'") 

     ! Conta quantos argumentos foram passados pelo usuário
     contador=COMMAND_ARGUMENT_COUNT()

!Formato de exibição da mensagem
100 FORMAT ("O usuário passou ", 1X, I3 , 1X "argumentos pela linha de comando")
 
     
! Exibe na tela quantos argumentos foram passados pela linha de comando
WRITE(*,100) contador

! laço para ler os argumentos passados
i = 0
DO
  ! Leia o argumento 'i' e atribua à variável 'arg'
  CALL get_command_argument(i, arg)

  ! Quando o último argumento for lido arg==0, então termine a leitura
  IF (LEN_TRIM(arg) == 0) EXIT
        
        !Exibe uma mensagem se o usuário passar o argumento '-f'
        IF(arg == '-f') THEN
                WRITE(*,*) "O usuário passou o argumento '-f' pela linha de comando!"

        END IF
! Incremente i para ler o próximo argumento   
  i = i+1
END DO
                          

END PROGRAM
