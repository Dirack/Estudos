; hello.asm (Assembly)
; 
; Objetivo: Estudo assembly, olá mundo
; 
; Site: https://dirack.github.io
; 
; Versão 1.0
; 
; Programador: Rodolfo A C Neves (Dirack) 07/12/2020
; 
; Email: rodolfo_profissional@hotmail.com
; 
; Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.

global _start

section .data
message: db 'hello, world!', 10

section .text
_start:
	mov rax, 1	; O número da chamada de sistema deve ser armazenado em rax
	mov rdi, 1	; argumento #1 em rdi: onde escrever (descritor)?
	mov rsi, message	; argumento #2 em rsi: onde começa a string
	mov rdx, 14	; argumento #3 em rdx: quantos bytes devem ser escritos
	syscall	; essa instrução faz a chamada de sistema

	mov rax, 60	; número da syscall exit
	;mov rdi, 4	; status de execução de exit, comente a linha abaixo
	xor rdi, rdi	; rdi=0
	syscall
