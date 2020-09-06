MODULE polar_lib
!
! Objetivo: Definir o tipo polar (número complexo em
! coordenadas polares) e as operações fundamentais entre esse tipo
! e o tipo complex (através da sobrecarga de operadores)
!
! Versão 1.1
!
! Programador: Rodolfo A. C. Neves 01/05/18
!
! email(manutenção): rodolfo_profissional@hotmail.com
!
! Atualizações:
!
!       -Extração da parte real e imaginária com .REAL. e .IMAG.
!
!       -Definição da divisão de POLAR pelo tipo INTEGER e REAL
!
! POLAR (número complexo em coordenadas polares):
!
!       r (módulo do complexo)
!       teta (fase do complexo)
!
!       Permite atribuição entre COMPLEX e POLAR, exemplo:
!               COMPLEX:: c1=(1.,1.)
!               TYPE(polar):: p1
!
!               p1=c1
!               c1=p1
!
!       Permite a soma, produto, subtração, divisão entre dois
!       números tipo POLAR, exemplo:
!
!               TYPE(polar):: p1, p2, p3
!               
!               p3 = p1 + p2
!               p3 = p1 - p2
!               p3 = p1 * p2
!               p3 = p1 / p2
!
!       Permite a potenciação entre POLAR e INTEGER ou REAL (número POLAR é a base
!       INTEGER ou REAL é o expoente)
!
!               TYPE(polar):: p1, p2, p3
!
!               p3 = p1 ** 2
!
!               p3 = p1 ** 0.5 (raíz quadrada)
!
!       Pemite conjugado complexo e simétrico complexo (rotação de fase de 180°)
!
!               TYPE(polar):: p1=polar(1.,1.)
!               TYPE(polar):: p2, p3
!               
!               ! preste atenção nos pontos 
!               ! que identificam o operador
!               p3 = .sim.p1 ! simétrico complexo
!               p2 = .conj.p1 ! conjugado complexo
!
!       Permite o inverso multiplicativo do número complexo 1/z
!
!               TYPE(polar):: p1=polar(1.,1.)
!               TYPE(polar):: p2
!
!               p2 = .invmul.p1 ! p2 é o inverso multiplicativo de p1
!
!       Permite a extração da parte real e imaginária de um número complexo polar
!
!               TYPE(polar):: p1=polar(1.,1.)
!               REAL:: x ! parte real
!               REAL:: y ! parte imaginária
!
!               x = .REAL.p1 ou y = .IMAG.p1                

IMPLICIT NONE

! Definição do tipo Polar (número complexo)
TYPE:: polar

        REAL:: r
        REAL:: teta

END TYPE polar

!------[ Sobrecarga de operadores]---------
! Definindo operações de atribuição, soma, 
! subtração, etc com o tipo polar
!------------------------------------------

! atribuição de um número polar para complexo e vice-versa
INTERFACE ASSIGNMENT (=)
        MODULE PROCEDURE polar2complexo
        MODULE PROCEDURE complexo2polar
END INTERFACE

! soma em coordenadas polares
INTERFACE OPERATOR (+)
        MODULE PROCEDURE soma_polar
END INTERFACE

! subtração em coordenadas polares
INTERFACE OPERATOR (-)
        MODULE PROCEDURE sub_polar
END INTERFACE

! produto em coordenadas polares:
! entre dois números polares (prod_polar)
! entre um número inteiro e um polar (prod_int_polar)
! entre um número polar e um REAL (prod_real_polar)
INTERFACE OPERATOR (*)
        MODULE PROCEDURE prod_polar
        MODULE PROCEDURE prod_int_polar
        MODULE PROCEDURE prod_real_polar
END INTERFACE

! divisão de dois números polares
INTERFACE OPERATOR (/)
        MODULE PROCEDURE div_polar
        MODULE PROCEDURE div_polar_int
        MODULE PROCEDURE div_polar_real
END INTERFACE

! potenciação
INTERFACE OPERATOR (**)
        MODULE PROCEDURE pot_polar_real
        MODULE PROCEDURE pot_polar_int
END INTERFACE

! conjugado complexo
INTERFACE OPERATOR (.CONJ.)
        MODULE PROCEDURE conj_polar
END INTERFACE

! simétrico complexo (rotação de 180°)
INTERFACE OPERATOR (.SIM.)
        MODULE PROCEDURE sim_polar
END INTERFACE

! inverso multiplicativo
INTERFACE OPERATOR (.INVMUL.)
        MODULE PROCEDURE invmul_polar
END INTERFACE

! extração da parte real
INTERFACE OPERATOR (.REAL.)
        MODULE PROCEDURE real_polar
END INTERFACE

! extração da parte imaginária
INTERFACE OPERATOR (.IMAG.)
        MODULE PROCEDURE imag_polar
END INTERFACE

! Definindo as funções para cada operador descrito acima
CONTAINS
        SUBROUTINE polar2complexo(c,p)
                TYPE(polar),INTENT(IN):: p
                complex,INTENT(OUT):: c

                c=cmplx(p%r*cos(p%teta),p%r*sin(p%teta))

        END SUBROUTINE

        SUBROUTINE complexo2polar(p,c)
                complex, INTENT(IN):: c
                TYPE(polar),INTENT(OUT):: p

                p%r=cabs(c)
                p%teta=atan(aimag(c)/real(c))

        END SUBROUTINE

        FUNCTION soma_polar(p1,p2)
                TYPE(polar):: soma_polar
                TYPE(polar),INTENT(IN):: p1,p2
                REAL:: x, y

                x=p1%r*cos(p1%teta)+p2%r*cos(p2%teta)
                y=p1%r*sin(p1%teta)+p2%r*sin(p2%teta)


                soma_polar%r=sqrt(x**2+y**2)
                soma_polar%teta=atan(y/x)

        END FUNCTION

        FUNCTION sub_polar(p1,p2)
                TYPE(polar):: sub_polar
                TYPE(polar),INTENT(IN):: p1,p2
                REAL:: x, y

                x=p1%r*cos(p1%teta)-p2%r*cos(p2%teta)
                y=p1%r*sin(p1%teta)-p2%r*sin(p2%teta)


                sub_polar%r=sqrt(x**2+y**2)
                sub_polar%teta=atan(y/x)

        END FUNCTION

        FUNCTION prod_polar(p1,p2)
                TYPE(polar):: prod_polar
                TYPE(polar),INTENT(IN):: p1,p2

                prod_polar%r=p1%r*p2%r
                prod_polar%teta=p1%teta+p2%teta

        END FUNCTION

        FUNCTION prod_int_polar(p1,i)
                TYPE(polar):: prod_int_polar
                TYPE(polar),INTENT(IN):: p1
                INTEGER, INTENT(IN):: i

                prod_int_polar%r=p1%r*i
                prod_int_polar%teta=p1%teta

        END FUNCTION

         FUNCTION prod_real_polar(p1,f)
                TYPE(polar):: prod_real_polar
                TYPE(polar),INTENT(IN):: p1
                REAL, INTENT(IN):: f

                prod_real_polar%r=p1%r*f
                prod_real_polar%teta=p1%teta

        END FUNCTION

        FUNCTION div_polar(p1,p2)
                TYPE(polar):: div_polar
                TYPE(polar),INTENT(IN):: p1,p2

                div_polar%r=p1%r/p2%r
                div_polar%teta=p1%teta-p2%teta

        END FUNCTION

         FUNCTION div_polar_int(p1,i)
                TYPE(polar):: div_polar_int
                TYPE(polar),INTENT(IN):: p1
                INTEGER,INTENT(IN):: i

                div_polar_int%r=p1%r/i
                div_polar_int%teta=p1%teta

        END FUNCTION

        FUNCTION div_polar_real(p1,f)
                TYPE(polar):: div_polar_real
                TYPE(polar),INTENT(IN):: p1
                REAL,INTENT(IN)::f

                div_polar_real%r=p1%r/f
                div_polar_real%teta=p1%teta

        END FUNCTION


        FUNCTION pot_polar_real(p1,n)
                TYPE(polar):: pot_polar_real
                TYPE(polar),INTENT(IN):: p1
                REAL,INTENT(IN):: n
                
                pot_polar_real%r=p1%r**n
                pot_polar_real%teta=n*p1%teta

        END FUNCTION

        FUNCTION pot_polar_int(p1,n)
                TYPE(polar):: pot_polar_int
                TYPE(polar),INTENT(IN):: p1
                INTEGER, INTENT(IN):: n
                
                pot_polar_int%r=p1%r**n
                pot_polar_int%teta=n*p1%teta

        END FUNCTION

        ! conjugado complexo
         FUNCTION conj_polar(p1)
                TYPE(polar):: conj_polar
                TYPE(polar),INTENT(IN):: p1
                
                conj_polar%r=p1%r
                conj_polar%teta=-1*p1%teta

        END FUNCTION

        ! simétrico de número polar
        FUNCTION sim_polar(p1)
                TYPE(polar):: sim_polar
                TYPE(polar),INTENT(IN):: p1
                REAL, PARAMETER:: PI=4*ATAN(1.)
                
                sim_polar%r=p1%r
                sim_polar%teta=PI+p1%teta

        END FUNCTION

        ! inverso multiplicativo 1/z
        FUNCTION invmul_polar(p1)
                TYPE(polar):: invmul_polar
                TYPE(polar),INTENT(IN):: p1
                
                invmul_polar%r=1/p1%r
                invmul_polar%teta=-1*p1%teta

        END FUNCTION

        ! extração da parte real
        FUNCTION real_polar(p1)
                REAL:: real_polar
                TYPE(polar),INTENT(IN):: p1
                
                real_polar=p1%r*cos(p1%teta)

        END FUNCTION

        ! extração da parte imaginária
        FUNCTION iamg_polar(p1)
                REAL:: iamg_polar
                TYPE(polar),INTENT(IN):: p1
                
                iamg_polar=p1%r*sin(p1%teta)

        END FUNCTION

END MODULE
