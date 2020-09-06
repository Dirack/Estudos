PROGRAM teste
!
! teste.f90 (Fortran)
! 
! Objetivo: Exemplo de uso da biblioteca vector_lib.f90 que define o tipo 
! vector (VETOR 3D).
! 
! Versão 1.0
! 
! Site: http://www.dirackslounge.online
! 
! Programador: Rodolfo A. C. Neves (Dirack) 10/06/2019
! 
! Email: rodolfo_profissional@hotmail.com
! 
! Licença: Software de uso livre e código aberto.

USE vector_lib
IMPLICIT NONE

TYPE(vector):: v1, v2

! Os dois vetores formam a terna pitagórica 5^2 = 3^2 + 4^2
! A distância entres os pontos deve ser igual a 5
v1 = vector(3.,0.,0.)
v2 = vector(0.,4.,0.)

WRITE(*,*) " A distância entre os dois pontos é: ", v1.DISTVECTOR.v2
WRITE(*,*) " A distância entre os dois pontos é: ", v2.DISTVECTOR.v1

END PROGRAM
