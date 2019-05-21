$(document).ready(function(){

    $('#quiz-result').hide();
    $('#quiz-end').hide();
    $('.quiz-question').hide();
    $('.quiz-question-answers').hide();
    $('.quiz-question-answer img').addClass('allowed');
    $('#next').addClass('disabled');
    $('#result').addClass('disabled');
    $('.disabled').click(function(event){
        event.preventDefault();
    });
    $('.quiz-question').first().show().addClass('now');
    $('.quiz-question-answers').first().show().addClass('current');

    $('.quiz-question-answer img').click(function(){
        $(this).addClass('selected notallowed').removeClass('allowed');
        $('#next').removeClass('disabled');       
    });

    $('.quiz-question-answer .allowed').click(function(){
        $('.quiz-question-answer .notallowed').removeClass('selected').addClass('allowed');
        $(this).addClass('selected notallowed');
    });

    $('#next').click(function(){
        $('.current').hide().addClass('previous');
        if( $('.current').is(':last-child') ) {
            $('#quiz-result').show();
        } else {
            $('.current').next().removeClass('previous').show().addClass('current');
        }
        $('.previous').removeClass('current');

        $('.now').hide().addClass('before');
        if ( $('.now').is(':last-child') ) {
            $('#next').hide();
        } else {
            $('.now').next().removeClass('before').show().addClass('now');
        }
        $('.before').removeClass('now');
    });

    $('#submit').click(function(event){
        event.preventDefault();
        $('#quiz-result').hide();
        $('#quiz-end').show();
    });

});