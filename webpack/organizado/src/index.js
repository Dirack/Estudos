import $ from 'jquery';
import './style.css';
import Botao from './componentes/botao';
import Camus from './images/camus.jpg';

$(function(){
    
    let botao = new Botao();
    botao.setTitle('Testador');
    botao.setClick(function(){
        alert('Clicou!');
    })

    $('.area').html(botao.render());
})