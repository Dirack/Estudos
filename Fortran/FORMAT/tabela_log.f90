PROGRAM tabela_log
!
! Objetivo: Resolução da questão 7 do capítulo 5 do livro de FORTRAN (Stephen J. Chapman).
! construir uma tabela de log(x) na base 10. Exibir utilizando o comando FORMAT 
! e diferentes format descriptors. Basta mudar o formato do Write do cabeçalho e das linhas
! da tabela.
!
! Fw.d (ponto flutuante) 10.003
! Ew.d (Notação exponencial mantissa entre 0 e 1) .000E+00
! ESw.d (Notação científica mantissa entre 0 e 10) 1.0000E+01
! nX (espaço n vezes)
!
! w é o número total de casas
! d é o número de casas decimais
!
! Versão 1.0
!      
! Programador: Rodolfo A. C. Neves 27/04/2018

IMPLICIT NONE

! Declaração
REAL:: x(10) ! Vetor linha da tabela
INTEGER:: k, i, j ! contadores de laço

! Formato ponto flutuante
102 FORMAT (9X,10("x.",I1,5X))
200 FORMAT (F4.1,3X,10(F5.3,3X))

! Formato Notação exponencial
103 FORMAT (12X,10("x.",I1,8X))
300 FORMAT (F4.1,3X,10(E8.3,3X))

! Formato notação científica
104 FORMAT (18X,10("x.",I1,12X))
400 FORMAT (F4.1,3X,10(ES14.4,1X))

! Cabeçalho da tabela
WRITE(*,103) (k-1, k=1,10)

! Laço para preencher as linhas da tabela
DO i=1,10

        DO j=1,10
                
               x(j)=LOG10(i+(j-1)*0.1)

        END DO

        WRITE(*,300) REAL(i), ( x(k), k=1,10)
END DO        


END PROGRAM
