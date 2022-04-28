import $ from 'jquery';
import './test.scss';
import FlipImg from './images/flip.png';
import Botao from './components/botao/index.js';

$(function(){

    let botao = new Botao();
    botao.setTitle('Testador');
        botao.setclick(function(){
            alert("CLICOU!");
        })

    $('.area').html(botao.render());
});