program coeficiente_de_reflexao
implicit none
!=======================================================================================
!objetivo: Obter os modulos dos coeficientes de reflexao para o caso beta_1 > beta_2
!
!programador: Rodolfo A. C. Neves    22 de julho de 2015
!
!=====================================================================================

integer, parameter:: n=1000 !número de intervalos amostrados
real::fi(n+1) !ângulo em graus
real:: fi_radianos(n+1) !ângulo em radianos
real:: fi2_radianos !ângulo de transmissão em radianos
real,dimension(n+1,5)::r_mod !módulo do coeficiente de reflexão
real:: beta_1  !beta_1 é a velocidade da onda s na camada de cima
real, parameter::beta_2 = 1. !beta_2 é a velocidade da onda s na camada de baixo
real:: dfi !incremento de amostragem
real:: fi_min !mínimo valor do ângulo na janela de amostragem
real:: fi_max !máximo valor do angulo na janela de amostragem
real, parameter:: pi = 4 * atan(1.) !número irracional pi
integer:: i, j !contador de laço
real:: r_mod_func !funcao q retorna o modulo do coeficiente de reflexao

!arquivo de saída, a primeira coluna é a abcissa com o valor do ângulo fi
!as colunas de 2 a 6 sao as curvas para diferentes razoes de beta_1 sobre beta_2
open(11, file='radianos.dat', status='replace', action='write')

!a janela de amostragem vai de zero a 90 graus
fi_min= 0. 
fi_max= 90.

!o incremento entre cada amostra pode ser calculado dividindo-se a janela em n intervalos
!obviamente, o número de amostras será o número de intervalos mais um (n+1)
dfi=(fi_max - fi_min)/n

do i=0, n

!para obter essa equação, basta substituir fi_max por fi e n por i na equação do incremento acima
!note que quando fi= fi_max, i= n, então obtem-se a mesma expressão para o incremento dfi
fi(i) = fi_min + dfi * i

!fi precisa estar em radianos para as funções trigonométricas do fortran
fi_radianos(i) = fi(i) * (pi / 180.)

end do


do j=1, 5

!a razao beta_1 sobre beta_2 pode ser variada mantendo beta_2 constante e variando beta_1
beta_1 = 1.0+j*0.1

	do i=0, n 
		!o módulo do coeficiente de reflexão é dado por
		r_mod(i,j) = r_mod_func(beta_1, beta_2, fi_radianos, i, n)
	end do

end do

do i=1, n+1
!escreva a saída em radianos.dat
write(11,100) fi(i), (r_mod(i,j), j=1,5)
end do
100 format (1x, f10.4, 5(f10.4))

end program coeficiente_de_reflexao

!aqui inicia a function que calcula o módulo do coeficiente de reflexão
!========================================================================================================================================================================

real function r_mod_func(beta_1, beta_2, fi_radianos, i, n)
implicit none
integer, intent(in):: n, i
real,intent(in)::beta_1, beta_2 
real,intent(in)::fi_radianos(n+1)
real::fi_rad
real::fi2_radianos

fi_rad = fi_radianos(i)

!o valor de fi2_rad pode ser dado em função de fi
fi2_radianos = acos ( sqrt(1-((beta_2/beta_1)**2) * (sin(fi_rad))**2) )

!calcula-se o módulo do coeficiente de reflexão
r_mod_func = abs( (beta_1 * cos(fi_rad) - beta_2 * cos(fi2_radianos)) / ( beta_1 * cos(fi_rad) + beta_2 * cos(fi2_radianos)) )



end function
