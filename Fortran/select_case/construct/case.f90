program estudocase
implicit none

character (len=11):: day
character (len=11):: day_type

write(*,*) "day?"
read(*,*) day

select case (day)
	case ('monday','tuesday','wenesday','thursday','friday')
		day_type = 'weekday'
	case ('saturday','sunday')
		day_type = 'weekend'
	case default
		day_type = 'Invalid day'
end select

write(*,*) 'day type =', day_type

end program
