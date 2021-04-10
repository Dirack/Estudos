#!/usr/bin/env python
# -*- coding: utf-8 -*-
#
# wlane_Cubic-Spline.py (Python)
# 
# Objetivo: Estudo sobre cubic spline em python.
# 
# Site: https://dirack.github.io
# 
# Versão 1.0
# 
# Programador: Rodolfo A C Neves (Dirack) 10/04/2021
# 
# Email: rodolfo_profissional@hotmail.com
# 
# Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.

from vpython import *

graph(fast=False)

data = []
data_graph = gdots(color=color.red)
x = -5.25
dx = 0.5
while (x<5.26):
    data.append((x,exp(-x**2)))
#    data.append((x,sin(x)))
    x = x + dx

for point in data:
    data_graph.plot(point[0],point[1])

def make_spline(data):
    # Returns sets of coefficients to create a cubic spline through points
    # contained in data. In each region x_i < x < x_i+1, the spline is
    # given by a_i*(x-x_i)^3 + b_i*(x-x_i)^2 + c_i*(x-x_i) + d_i.
    # The output is is a list of lists make_spline = [a,b,c,d].

    # Solve for ssp in the matrix equation T*ssp = r.
    # at, bt, and ct are the elements of the tridiagonal matrix T.
    # r is the column vector on the right-hand side.
    # ssd holds the values of the second derivative of the spline polynomial
    # at each data point.
    bt = [1]
    at = [0]
    ct = [data[1][0]-data[0][0]]
    r = [0]
    for i in range(1,len(data)-1):
        bt.append(2*( data[i+1][0]-data[i-1][0] ))
        ct.append(data[i+1][0]-data[i][0])
        at.append(data[i][0]-data[i-1][0])
        r1 = (data[i+1][1]-data[i][1])/(data[i+1][0]-data[i][0]) 
        r1 = r1 - (data[i][1]-data[i-1][1])/(data[i][0]-data[i-1][0])
        r.append(6*r1)
        
    at.append(data[len(data)-1][0]-data[len(data)-2][0])
    bt.append(1)
    ct.append(0)
    r.append(0)
    
    # Solve the matrix equation for ssd.
    beta = [bt[0]] # beta and rho are short-hand variables.
    rho = [r[0]]
    ssd = [0]
    for j in range(1,len(data)):
        beta.append( bt[j]-at[j]*ct[j-1]/beta[j-1] )
        rho.append( r[j]-at[j]*rho[j-1]/beta[j-1] )
        ssd.append(0)
    
    ssd[len(data)-1] = rho[len(data)-1]/beta[len(data)-1]
    for j in range(2,len(data)-2,1):
        ssd[len(data)-j] = ( rho[len(data)-j]-ct[len(data)-j]*ssd[len(data)-j+1] ) / beta[len(data)-j]

    
    # Spline has been determined. Prepare output.
    a = []
    b = []
    c = []
    d = []
    
    for i in range(0,len(data)-1):
        d.append(data[i][1])
        b.append(ssd[i]/2)
        a.append((ssd[i+1]-ssd[i])/(6*(data[i+1][0]-data[i][0])))
        c1 = (data[i+1][1]-data[i][1])/(data[i+1][0]-data[i][0])
        c1 = c1-((data[i+1][0]-data[i][0])*(ssd[i+1]+2*ssd[i])/6)
        c.append(c1)
        
    return [a,b,c,d]
    
my_spline = make_spline(data)
a = my_spline[0]
b = my_spline[1]
c = my_spline[2]
d = my_spline[3]

spline = gcurve(color=color.blue)
graph(fast=False)
sfd_graph = gdots(color=color.blue)
graph(fast=False)
ssd_graph = gdots(color=color.blue)
spline_vals = []
x = -5
dx = 0.01
while (x<5.1):
    # Find the data point to the left of x.
    j = 0
    while (data[j+1][0] < x):
        j = j + 1
    xdiff = x-data[j][0]
    spline_vals.append((x,a[j]*xdiff**3+b[j]*xdiff**2+c[j]*xdiff+d[j]))
    x = x + dx

for i in range(1,len(spline_vals)-1):
    spline.plot(pos=(spline_vals[i][0],spline_vals[i][1]))
    sfd = (spline_vals[i+1][1]-spline_vals[i][1])/(spline_vals[i+1][0]-spline_vals[i][0])
    sfd_graph.plot(pos=(spline_vals[i][0],sfd))
    ssd = (spline_vals[i+1][1]-2*spline_vals[i][1]+spline_vals[i-1][1])/(0.5*(spline_vals[i+1][0]-spline_vals[i-1][0]))**2
    ssd_graph.plot(pos=(spline_vals[i][0],ssd))
