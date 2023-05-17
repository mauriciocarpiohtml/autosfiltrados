const autos =[
    {modelo: 'Ford Focus III 1.6 Sedan S 150CV Automática',
    marca: 'Ford',
    precio: 1700,
    imagen:'https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMjQyMjI5L0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNjgwOTU5NzcyMzQxLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjc1NiwiaGVpZ2h0Ijo0MzR9fX0=',
    color: 'negro',
    id:1},

    {modelo: 'Ford Ranger 2.2 Cd XLT Tdci 150CV Automática',
    marca: 'Ford',
    precio: 4700,
    imagen:'https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMjQyMDkwL0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNjgwNTIyNjQwODExLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjc1NiwiaGVpZ2h0Ijo0MzR9fX0=',
    color: 'blanco',
    id:2},

    {modelo: 'Chevrolet Tracker 1.8 Ltz Fwd Mt 140cv',
    marca: 'Chevrolet',
    precio: 2500,
    imagen:'https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMjQwOTk1L0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNjc5NzUxMzU3ODkwLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjc1NiwiaGVpZ2h0Ijo0MzR9fX0=',
    color: 'blanco',
    id:3},

    {modelo: 'Toyota Corolla 1.8 Xli Mt 140cv L/14',
    marca: 'Toyota',
    precio: 1200,
    imagen:'https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMjQwMDI1L0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNjc5OTI4MDY3OTY5LmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjc1NiwiaGVpZ2h0Ijo0MzR9fX0=',
    color: 'negro',
    id:4},
    
    {modelo: 'Renault Sandero 1.6 Privilege 105cv',
    marca: 'Renault',
    precio: 3150,
    imagen:'https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMjQwMDA2L0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNjc5MzM3MDcxNzU4LmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjc1NiwiaGVpZ2h0Ijo0MzR9fX0=',
    color: 'azul',
    id:5},

    {modelo: 'Ford Focus III 1.6 S',
    marca: 'Ford',
    precio: 1000,
    imagen:'https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMjM5NzA2L0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNjc5MDUyNjQzNDgwLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjc1NiwiaGVpZ2h0Ijo0MzR9fX0=',
    color: 'rojo',
    id:6},

    {modelo: 'Volkswagen Golf 1.6 Trendline',
    marca: 'Volkswagen',
    precio: 700,
    imagen:'https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMjM1MDQ1L0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNjc3NDk2ODk0NjM2LmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjc1NiwiaGVpZ2h0Ijo0MzR9fX0=',
    color: 'negro',
    id:7},

    {modelo: 'Renault Duster 1.6 Ph2 4x2 Privilege',
    marca: 'Renault',
    precio: 7000,
    imagen:'https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMjM0MDU3L0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNjc1NDU3NzU2MDMxLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjc1NiwiaGVpZ2h0Ijo0MzR9fX0=',
    color: 'negro',
    id:8},

    {modelo: 'Peugeot 408 2.0 Allure 143cv',
    marca: 'Renault',
    precio: 3000,
    imagen:'https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMjI4MzEzL0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNjcyNjc4MjYxOTcxLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjc1NiwiaGVpZ2h0Ijo0MzR9fX0=',
    color: 'negro',
    id:9},

]

export {autos}