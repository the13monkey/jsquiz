$(document).ready(function(){

    $('#quiz-result').hide();
    $('#quiz-end').hide();
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

    var scores = [];

    $('#next').click(function(){
        $('.current').hide().addClass('previous');
        if( $('.current').is(':last-child') ) {
            $('#quiz-result').show();
            //fetch the selected answers
        } else {
            $('.current').next().removeClass('previous').show().addClass('current');
        }
        $('.previous').removeClass('current');

        var value = $('.selected').data('value');
        scores.push(value);
    });

    $('#submit').click(function(event){
        event.preventDefault();
        $('#quiz-result').hide();
        $('#quiz-end').show();
        var answer1 = scores[0];
        var answer2 = scores[1];
        var answer3 = scores[2];
        $.ajax({
            method: 'POST',
            url: 'process.php',
            data: {
                a1 : answer1,
                a2 : answer2, 
                a3 : answer3
            },
            success: function(data) {
                $('#result-display').html(data);
                $('#recommend-display').html(data);
            }
        }); 
    }); 

});