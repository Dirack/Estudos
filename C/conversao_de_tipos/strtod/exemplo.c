#include <stdio.h>
#include <stdlib.h>

int main () { 
   char str[30] = "20.30300 This is test";
   char *ptr;
   double ret;

   ret = strtod(str, &ptr);
   printf("The number(double) is %lf\n", ret);
   printf("String part is |%s|", ptr);

   return(0);
}
