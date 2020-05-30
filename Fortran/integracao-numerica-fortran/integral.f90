MODULE integral

USE funcaoIntegrando

IMPLICIT NONE
CONTAINS

	SUBROUTINE carregarParametros()

		READ(11,*) p1, p2, p3

		WRITE(*,*) p1, p2, p3

	END SUBROUTINE

SUBROUTINE trapezios(fun, a, b, n, area)

IMPLICIT NONE

real, external::fun
real, intent(in)::a, b
integer, intent(in)::n
real, intent (out)::area
integer::i
real::x, dx

dx=(b-a)/n
area=(fun(a)+fun(b))*0.5
x=a

do i=1, n-1

	x=x+dx
	area=area+fun(x)

   
end do

area=area*dx

end subroutine trapezios


!============================================================================

real function func_teste(x)

implicit none

real, intent(in)::x

func_teste=sin(x)

end function func_teste



!============================================================================


subroutine trapeziosnovo(fun, a, b,n, area2)

implicit none

real, external::fun
real, intent(in)::a, b
integer, intent(out)::n
real, intent (out)::area2
integer::i
real::x, dx, eps=1.e-4, area1, soma




n=2
dx=(b-a)/n

soma=(fun(a)+fun(b))/2. + fun((a+b)/2.)
area1=dx*soma

do

	x=a+dx*0.5
	
	do i=1,n
	   soma=soma+fun(x)
	   x=x+dx
	
	end do

	dx=dx*0.5
	n=n*2
	area2=dx*soma

	if (abs(area2-area1)<eps)then
	   exit

	else
	    area1=area2

	end if

end do

!write(*,*)n colocar na subrotina ou no programa principal

end subroutine trapeziosnovo

!==========================================================================
subroutine trapezios5(fun, a, b,n, s2)

implicit none

real, external::fun
real, intent(in)::a, b
integer, intent(out)::n
real, intent (out)::s2
integer::i
real::x, dx, eps=1.e-4, area1, soma,area2,s1


n=2
dx=(b-a)/n
soma=(fun(a)+fun(b))/2. + fun((a+b)/2.)
area1=dx*soma

x=a+dx*0.5

do i=1,n
   soma=soma+fun(x)
   x=x+dx

end do

dx=dx*0.5
n=n*2
area2=dx*soma

!s1=(4./3.)*area2-(1./3.)*area1
s1=(4.*area2-area1)/3.
area1=area2

do

	x=a+dx*0.5
  
	do i=1,n
	   soma=soma+fun(x)
	   x=x+dx
	
	end do

	dx=dx*0.5
	n=n*2
	area2=dx*soma
	s2=(4.*area2-area1)/3.

	if (abs(s2-s1)<eps)then
	   exit

	else
	    s1=s2
	    area1=area2
	end if

end do

!write(*,*)n colocar na subrotina ou no programa principal

end subroutine trapezios5

end module integral
