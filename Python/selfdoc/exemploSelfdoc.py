# exemploSelfdoc.py (Python)
# 
# Objetivo: Exemplificar a funcao help() do python.
# 
# Versao 1.0
# 
# Site: http://www.dirackslounge.online
# 
# Programador: Rodolfo A. C. Neves (Dirack) 03/07/2019
# 
# Email: rodolfo_profissional@hotmail.com
# 
# Licenca: Software de uso livre e codigo aberto.

def add(x, y):
    """
    This function adds the given integer arguments
    :param x: integer
    :param y: integer
    :return: integer
    """
    return x + y


class Employee:
    """
    Employee class, mapped to "employee" table in Database
    """
    id = 0
    name = ''

    def __init__(self, i, n):
        """
        Employee object constructor
        :param i: integer, must be positive
        :param n: string
        """
        self.id = i
        self.name = n

help(Employee)
