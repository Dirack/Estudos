# coding: utf-8
#
# openEmail.py (Python)
# 
# Objetivo: Estudo sobre como abrir o email do outlook com python e selenium.
#
# Site: http://www.dirackslounge.online 
# 
# Versão 1.0
# 
# Programador:  Rodolfo A. C. Neves (Dirack) 01/03/2020
# 
# Email: rodolfo_profissional@hotmail.com
# 
# Licença: Software de uso livre e código aberto.
 
from selenium import webdriver as wb
import time
browser = wb.Firefox()
browser.get(
        '''
        https://outlook.live.com/owa/
        ''')

time.sleep(5)

a=browser.find_elements_by_css_selector('.sign-in-link')

a[1].click()

time.sleep(5)

emailInput=browser.find_element_by_id(
        'i0116')
emailInput.send_keys(
        'rodolfo_profissional@hotmail.com')

button=browser.find_element_by_id(
        'idSIButton9')
button.click()

time.sleep(5)

passwd=browser.find_element_by_id(
        'i0118')

senha=raw_input('Digite a sua senha: ')
passwd.send_keys(senha)
passwd.submit()

