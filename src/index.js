import $ from 'jquery';
import './style.css';
import Botao from './components/botao/index';

$(function(){

    let botao = new Botao();
    botao.setTitle('Testador');

    $('.area').html(botao.render());
});