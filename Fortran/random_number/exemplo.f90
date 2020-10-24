PROGRAM exemplo
!
! exemplo.f90 (Fortran 90)
! 
! Objetivo: Estudo sobre geração de números aleatórios em Fortran 90.
! 
! Site: https://dirack.github.io
! 
! Versão 1.0
! 
! Programador: Rodolfo A C Neves (Dirack) 23/10/2020
! 
! Email: rodolfo_profissional@hotmail.com
! 
! Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.

REAL:: r

call RANDOM_SEED()

call RANDOM_NUMBER(r)

WRITE(*,*) "r= ", r

END PROGRAM
