MODULE vector_lib
!
! Objetivo: Definir o tipo vector (vetor 3D) e as operações fundamentais 
! entre esse tipo e os tipos primitivos (através da sobrecarga de operadores)
!
! Versão 1.2
!
! Programador: Rodolfo A. C. Neves 02/05/2018
!
! Email(manutenção): rodolfo_profissional@hotmail.com
!
! Site: http://dirackslounge.online
!
! Referências: Adaptado de Chapman, S. "Fortran 95/03 for scientists and engeneers", cap.13 pg.601
               

IMPLICIT NONE

! Definição do tipo vector (vetor 3D)
TYPE:: vector

        REAL:: x
        REAL:: y
        REAL:: z

END TYPE vector

! atribuição de um VECTOR para ARRAY e vice-versa
INTERFACE ASSIGNMENT (=)
        MODULE PROCEDURE vector2array
        MODULE PROCEDURE array2vector
END INTERFACE

! soma de vetores
INTERFACE OPERATOR (+)
        MODULE PROCEDURE soma_vector
END INTERFACE

! subtração de vetores
INTERFACE OPERATOR (-)
        MODULE PROCEDURE sub_vector
END INTERFACE

! produto na classe VECTOR:
! entre dois VECTOR (prod_vector)
! entre um INTEGER e um VECTOR (prod_int_vector)
! entre um número polar e um REAL (prod_real_vector)
INTERFACE OPERATOR (*)
       MODULE PROCEDURE prod_int_vector
       MODULE PROCEDURE prod_real_vector
       MODULE PROCEDURE prod_vector_int
       MODULE PROCEDURE prod_vector_real
END INTERFACE

! divisão de tipo VECTOR
INTERFACE OPERATOR (/)
       MODULE PROCEDURE div_vector_int
       MODULE PROCEDURE div_vector_real
END INTERFACE

INTERFACE OPERATOR (.VERS.)
        MODULE PROCEDURE versor
END INTERFACE

! produto escalar
INTERFACE OPERATOR (.ESC.)
         MODULE PROCEDURE prod_esc
END INTERFACE

! produto vetorial
INTERFACE OPERATOR (.VET.)
         MODULE PROCEDURE prod_vet
END INTERFACE

INTERFACE OPERATOR (.DISTVECTOR.)
	MODULE PROCEDURE distanciaEntreDoisPontos
END INTERFACE

CONTAINS
        SUBROUTINE vector2array(a,v)
                TYPE(vector),INTENT(IN):: v
                REAL,DIMENSION(3),INTENT(OUT):: a

                a(1)=v%x
                a(2)=v%y
                a(3)=v%z

        END SUBROUTINE

        SUBROUTINE array2vector(v,a)
                REAL, DIMENSION(3), INTENT(IN):: a
                TYPE(vector),INTENT(OUT):: v

                v%x=a(1)
                v%y=a(2)
                v%z=a(3)

        END SUBROUTINE

        FUNCTION soma_vector(v1,v2)
                TYPE(vector):: soma_vector
                TYPE(vector),INTENT(IN):: v1,v2

                soma_vector%x=v1%x+v2%x
                soma_vector%y=v1%y+v2%y
                soma_vector%z=v1%z+v2%z


        END FUNCTION

        FUNCTION sub_vector(v1,v2)
                TYPE(vector):: sub_vector
                TYPE(vector),INTENT(IN):: v1,v2

                sub_vector%x=v1%x-v2%x
                sub_vector%y=v1%y-v2%y
                sub_vector%z=v1%z-v2%z


        END FUNCTION

        FUNCTION prod_int_vector(i,v1)
                TYPE(vector):: prod_int_vector
                TYPE(vector),INTENT(IN):: v1
                INTEGER,INTENT(IN):: i

                prod_int_vector%x=i*v1%x
                prod_int_vector%y=i*v1%y
                prod_int_vector%z=i*v1%z

        END FUNCTION

        FUNCTION prod_vector_int(v1,i)
                TYPE(vector):: prod_vector_int
                TYPE(vector),INTENT(IN):: v1
                INTEGER, INTENT(IN):: i

                prod_vector_int%x=v1%x*i
                prod_vector_int%y=v1%y*i
                prod_vector_int%z=v1%z*i


        END FUNCTION

        FUNCTION prod_real_vector(f,v1)
                TYPE(vector):: prod_real_vector
                TYPE(vector),INTENT(IN):: v1
                REAL,INTENT(IN):: f

                prod_real_vector%x=f*v1%x
                prod_real_vector%y=f*v1%y
                prod_real_vector%z=f*v1%z

        END FUNCTION

        FUNCTION prod_vector_real(v1,f)
                TYPE(vector):: prod_vector_real
                TYPE(vector),INTENT(IN):: v1
                REAL, INTENT(IN):: f

                prod_vector_real%x=v1%x*f
                prod_vector_real%y=v1%y*f
                prod_vector_real%z=v1%z*f


        END FUNCTION

        FUNCTION div_vector_int(v1,i)
                TYPE(vector):: div_vector_int
                TYPE(vector),INTENT(IN):: v1
                INTEGER,INTENT(IN):: i

                div_vector_int%x=v1%x/i
                div_vector_int%y=v1%y/i
                div_vector_int%z=v1%z/i

        END FUNCTION

        FUNCTION div_vector_real(v1,f)
                TYPE(vector):: div_vector_real
                TYPE(vector),INTENT(IN):: v1
                REAL, INTENT(IN):: f

                div_vector_real%x=v1%x/f
                div_vector_real%y=v1%y/f
                div_vector_real%z=v1%z/f

        END FUNCTION
        
        
        FUNCTION versor(v1)
                TYPE(vector):: versor
                TYPE(vector),INTENT(IN):: v1
                REAL:: m_v1 ! módulo do vetor

                m_v1=sqrt(v1%x**2+v1%y**2+v1%z**2)

                versor%x=v1%x/m_v1
                versor%y=v1%y/m_v1
                versor%z=v1%z/m_v1

        END FUNCTION

        FUNCTION prod_esc(v1, v2)
                REAL:: prod_esc
                TYPE(vector),INTENT(IN):: v1
                TYPE(vector), INTENT(IN):: v2

                prod_esc=v1%x*v2%x+v1%y*v2%y+v1%z*v2%z

        END FUNCTION

        FUNCTION prod_vet(v1, v2)
                TYPE(vector):: prod_vet
                TYPE(vector),INTENT(IN):: v1
                TYPE(vector), INTENT(IN):: v2

                prod_vet%x=v1%y*v2%z-v1%z*v2%y
                prod_vet%y=v1%z*v2%x-v1%x*v2%z
                prod_vet%z=v1%x*v2%y-v1%y*v2%x

                !a × b = [a2b3 − a3b2, a3b1 − a1b3, a1b2 − a2b1]
        END FUNCTION

	FUNCTION distanciaEntreDoisPontos(v1,v2)
		TYPE(vector), INTENT(IN):: v1
		TYPE(vector), INTENT(IN):: v2
		REAL:: distanciaEntreDoisPontos, tmp

		tmp = (v1%x-v2%x)*(v1%x-v2%x) + (v1%y-v2%y)*(v1%y-v2%y) + (v1%z-v2%z)*(v1%z-v2%z)

		distanciaEntreDoisPontos = sqrt(tmp) 

	END FUNCTION

END MODULE
