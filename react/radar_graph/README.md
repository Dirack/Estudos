# Radar graph

A radar or spider or web chart is a two-dimensional chart type designed to plot one or more series of values over multiple quantitative variables.
Each variable has its own axis, all axes are joined in the center of the figure.

This page is a step-by-step guide on how to build your own radar chart for the web,
using React (for rendering) and D3.js (to compute the axis, and shape coordinates).

It starts by describing how the data should be organized and how to initialize the Radar component.
It then explains how to compute axis dynamically, and plot the lines and axis. Once this is done,
it shows how to deal with scaling and how to add an interactive legend.

## Índice

- [Background grid](https://github.com/Dirack/Estudos/tree/master/react/radar_graph/simples#background-grid)
- [Radar chart com um grupo](https://github.com/Dirack/Estudos/tree/master/react/radar_graph/one_group#radar-chart-com-um-grupo)
- [Radar chart com vários grupos](https://github.com/Dirack/Estudos/tree/master/react/radar_graph/multiple_groups#radar-chart-com-v%C3%A1rios-grupos)
