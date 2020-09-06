PROGRAM teste
!
! teste.f90 (Fortran)
! 
! Objetivo: Exemplo de uso de physics_lib.f90
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

USE physics_lib
USE math_lib, ONLY: GU_
USE vector_lib
IMPLICIT NONE

! Implementação de forca_grav com a distância calculada para um tipo vector (VETOR 3D)
TYPE(vector):: v1, v2
REAL:: valorForcaGravitacional

! O resultado esperado para m1=1, m2=1 e d=1 é
! o valor da Constante Gravitacional Universal 
! 6.674184E-11 Nm^2/kg^2 no S.I.
valorForcaGravitacional = forca_grav(1.,1.,1.)

WRITE(*,*) "Força Gravitacional: ", valorForcaGravitacional
WRITE(*,*) "Constante Gravitacional Universal: ", GU_

v1 = vector(3.,0.,0.)
v2 = vector(0.,4.,0.)

WRITE(*,*) "Distância entre v1 e v2: ", v1.DISTVECTOR.v2

! A distância entre os dois vetores que localizam as massas será 5
! O resultado esperado para valorForcaGravitacional é 6.674184E-11 Nm^2/kg^2 no S.I.
valorForcaGravitacional = forca_grav(5.,5.,v1.DISTVECTOR.v2)

WRITE(*,*) "Implementação com o tipo vector da biblioteca vector_lib.f90"
WRITE(*,*) "Força Gravitacional: ", valorForcaGravitacional
WRITE(*,*) "Constante Gravitacional Universal: ", GU_


END PROGRAM
