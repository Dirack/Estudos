program estudocase
implicit none

integer:: age

write(*,*) "your age?"
read(*,*) age

select case (age)
	case (:0) ! <= 0
		write(*,*) "Error, age should be positive!"
	case (1:10)
		write(*,*) "Criança"
	case(11:17)
		write(*,*) "Adolescente"
	case(18:50)
		write(*,*) "Adulto"
	case default
		write(*,*) "Tá velho já meu chapa!"
end select

end program
