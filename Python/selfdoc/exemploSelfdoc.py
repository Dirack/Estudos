#!/usr/bin/env python
# -*- coding: utf-8 -*-
#
# exemploSelfdoc.py (Python)
# 
# Objetivo: Exemplificar a funcao help() do python.
# Para gerar a documentação automática em uma página html
# rodar o comando 'python -m pydoc -w exemploSelfdoc' que irá
# gerar um HTML com a documentação deste módulo.
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

"""Estudo sobre documentação selfdoc no python.

Este é um módulo genérico que define uma função de adição 'add' e uma classe 'Employee'
"""

# Metadados reconhecidos pelo pydoc
__author__ = "seu nome"
__copyright__ = "Copyright 2017, Por mim"
__credits__ = ["equipe que desenvolve linux", "equipe que desenvolve Python", "equipe opensource"]
__license__ = "GPL"
__version__ = "1.0.1"
__maintainer__ = "eu também"
__author_email__ = "xyz@zkls.com"
__status__ = "Production"
__url__ = "https://github.com/Dirack"

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

if __name__ == "__main__":
	help(Employee)
