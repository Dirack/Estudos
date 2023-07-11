import $ from 'jquery';
import './teste.scss';
import Botao from './componentes/botao';

$(function(){
    
    let botao = new Botao();
    botao.setTitle('Testador');
    botao.setClick(function(){
        alert('Clicou!');
    })

    $('.area').html(botao.render());
})