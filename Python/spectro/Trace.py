# coding: utf-8
#
# Trace.py (Python)
# 
# Objetivo: Define a classe Trace para o programa 'exemplo.py'.
# 
# Site: http://www.dirackslounge.online
# 
# Versão 1.0
# 
# Programador: Rodolfo Dirack 14/02/2020
# 
# Email: rodolfo_profissional@hotmail.com
# 
# Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.

import os
import commands as cs

class Trace:
    """
    A 1D seismic trace formed by spike convolution with
    a ricker pulse
    """

    def __init__(self,n1,k1,mag):
        """
        Class trace constructor
        :param n1: integer
        :param k1: integer
        :param mag: float
        """
        self.n1 = n1
        self.k1 = k1
        self.mag = mag

    def __str__(self):
        """
        Resturn trace properties
        """
        return "n1=%s k1=%s mag=%s" % (self.n1,self.k1,self.mag)

    def spike(self,filename):
        """
        Generate a 1D spike signal
        :param filename: string
        """
        string="sfspike n1=%i nsp=2 k1=%g mag=%g > %s" % (self.n1,self.k1,self.mag,filename)
        os.system(string)

    def wave(self,spike,filename):
        """
        Generate a wave pulse signal
        :param spike: string
        :param filename: string
        """
        string="""
        < %s sfricker1 frequency=5 > %s
        """ % (spike,filename)
        os.system(string)

    def plot(self,filename,imgname):
        """
        plot function
        :param filename: string
        :param imgname: string
        """
        string="""
        < %s sfgraph symbol=y title="Ricker pulse" > %s
        """ % (filename,imgname)
        os.system(string)

    def view(self,imgname):
        """
        View trace
        """
        string="sfpen < %s" % imgname
        os.system(string)

