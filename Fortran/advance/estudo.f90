program exemplo
implicit none

real:: var

write (*,2,advance="no") "Escreva o valor de var: "
read (*,*) var
2 format (a)

write(*,*) "var=", var

end program
