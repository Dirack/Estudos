#### Estudo sobre SIGSEGV erro de segmentação

O programa 'exemplo.c' produz um erro de segmentação
ao tentar acessar o espaço de memória NULL. O script
do GDB, 'gdb\_script', corrige o erro chamando malloc
dentro do GDB e atribuindo um endereço de memória válido
ao ponteiro 'i'.
