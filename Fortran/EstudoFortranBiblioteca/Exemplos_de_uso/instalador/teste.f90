PROGRAM teste
!
! teste.f90 (Fortran)
! 
! Objetivo: Exemplo de uso da instalação e utilização da biblioteca de Fortran
! libdirack.
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

USE input_lib
USE math_lib
IMPLICIT NONE

INTEGER:: i
REAL:: r

      i = .GETINT."i"
      r = .GETREAL."r"

      WRITE(*,*) i, r
      WRITE(*,*) g_

END PROGRAM
