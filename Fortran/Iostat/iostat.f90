PROGRAM iostat_estudo
!
! Objetivo: Exemplificar o uso de IOSTAT com os comandos
! OPEN e READ.
!
! IOSTAT=ierror
!       se ierror é 0, execução bem sucedida
!       se ierror é /= 0, erro na execução
!               se ierror é positivo, erro no formato do arquivo
!               ou arquivo ausente
!
!               se ierror é negativo, atingiu o fim do arquivo durante
!               a leitura
!
! Versão 1.0
!
! Programador: Rodolfo A. C. Neves 26/04/2018
! 
! email: rodolfo_profissional@hotmail.com
! 
! Licença: Software de uso livre e código aberto.

IMPLICIT NONE ! Não permitir variável implícita

!Declaração de Variáveis
INTEGER:: ierror ! Status de execução
INTEGER:: n=0 ! Contador de linhas
CHARACTER(10):: arquivo="num.txt" ! Arquivo de entrada
REAL:: valor ! Lido do arquivo

! Abra o arquivo "num.txt"
OPEN(UNIT=11,FILE=arquivo,STATUS="old", ACTION="read", IOSTAT=ierror)

! Se ierror é positivo, erro de leitura!
IF (ierror>0) THEN
        
        100 FORMAT ("Erro de Leitura: Arquivo ",A7," não encontrado!")        
        WRITE(*,100) arquivo
        WRITE(*,*) "Ierror=", ierror

! Se ierror = 0, arquivo aberto com sucesso! Comece a ler
ELSE IF (ierror==0) THEN

        ! Laço de Leitura: Lê cada linha
        DO
                READ(11,*,IOSTAT=ierror) valor 
                IF(ierror/=0)EXIT

                n=n+1
        END DO

        ! Se ierror é positivo, o erro de leitura é no formato do arquivo
        IF(ierror>0) THEN
                WRITE(*,*) "Erro de formato na linha: ", n+1
                WRITE(*,*) "IERROR=", ierror
        ! Sem erro? Informe o número de linhas ao usuário        
        ELSE
                WRITE(*,*) "Número de linhas do arquivo: ", n
                WRITE(*,*) "ierror=", ierror
        END IF

END IF

END PROGRAM

