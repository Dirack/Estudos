program estudo
implicit none

real:: t, y

write(*,*) "t="
read(*,*) t

if (t<0) then
	y = 3*t**2+5
else
	y = -3*t**2+5
end if

write(*,*) "y(",t,")=",y

end program
