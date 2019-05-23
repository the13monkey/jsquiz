<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Quiz - Team Pastrami?</title>
    <link rel="icon" href="favicon.png">
    <link rel="stylesheet" href="style.css">
    <script src="jquery-3.3.1.min.js"></script>
    <script src="quiz.js"></script>
</head>
<body>

    <div id="quiz-wrapper">
        
        <div id="quiz-title" class="flex-center">
            <h1>Are you team Pastrami or team Corned Beef?</h1>
        </div>
        
        <div id="quiz-result">
            <p class="flex-center">Here are what you've selected.</p>
            <div id="selected-answers">
            <!--    <img src="bbq.jpg">
                    <img src="hearty.jpg">
                    <img src="roll.jpg">
            -->
            </div>
            <h1>Ready to see the result?</h1>
            <a href="#" id="submit">Submit</a>
            <a href="#" id="back">Not ready to submit. Do it again.</a>
        </div>

        <div id="quiz-end" class="flex-center">
            <div>
                <p>Did you guess it right?</p>
                <h1>Team <span id="result-display"></span>!</h1>
                <div id="recommend">
                    <h4>Check out our best <span id="recommend-display"></span> dishes here:</h4>
                    <div id="dishes">
                        <img src="bbq.jpg">
                        <img src="roll.jpg">
                        <img src="hearty.jpg">
                        <img src="leany.jpg">
                    </div>
                </div>
            </div>
        </div>

        <div id="quiz-questions" class="flex-center">
           <?php 
                $url = 'questions.json';
                $data = file_get_contents($url);
                $questions = json_decode($data);
                foreach ($questions as $question) {
            ?>
            <div class="quiz-question-answers">
                <h2 class="quiz-question"><?php echo $question->question; ?></h2>
                <?php 
                    $answersArray = $question->answers;
                    foreach ($answersArray as $answerArray) { ?>
                         <div class="quiz-question-answer">
                            <img src="<?php echo $answerArray->image; ?>" class="answer" data-value="<?php echo $answerArray->value; ?>" data-name="<?php echo $answerArray->image; ?>">
                            <p class="answer"><?php echo $answerArray->subtitle; ?></p>
                        </div>
                <?php  } ?>
            </div>
            <?php 
                }
           ?>
        </div>

        <div id="quiz-control" class="flex-center">
            <a href="#" id="next">Next</a> 
        </div>
    </div>   

    <p id="copyright">by <a href="http://dinahchen.rocks" target="_blank">Dinah Chen</a></p>
</body>
</html>