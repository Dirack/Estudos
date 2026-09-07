Ruff no dia a dia

Você normalmente coloca configuração no pyproject.toml:

[tool.ruff]
line-length = 88

[tool.ruff.lint]
select = ["E", "F"]

Aqui estamos dizendo, simplificando:

E → regras relacionadas a estilo/erros de código
F → regras derivadas do Pyflakes, como imports não utilizados

Depois:

ruff check .

E para corrigir automaticamente aquilo que for seguro:

ruff check . --fix

E para formatar:

ruff format .
