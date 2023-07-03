import $ from 'jquery';
import './style.css';
import Botao from './componentes/botao';

$(function(){
    
    let botao = new Botao();
    botao.setTitle('Testador');
    botao.setClick(function(){
        alert('Clicou!');
    })

    $('.area').html(botao.render());
})