import $ from 'jquery';
import './style.css';
import aImage from './images/camus.jpg';

$(function(){
    
    $('#botao').on('click',function(){
        $('h1').html('Olá mundo, ALTERADO!');
        $(this).addClass('botao');

        $('.img').attr('src',aImage);
    });
})