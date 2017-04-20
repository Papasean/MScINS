/**
 * Created by Sean on 20/04/2017.
 */

/** Developed from http://codepen.io/gcarino/pen/LDgtn */

(function() {

    //Sets up the question bank
    var questionbank = [{
        question: "What is 2*5?",
        choices: [2, 5, 10, 15, 20],
        correctAnswer: 2
    }, {
        question: "What is 3*6?",
        choices: [3, 6, 9, 12, 18],
        correctAnswer: 4
    }, {
        question: "What is 8*9?",
        choices: [72, 99, 108, 134, 156],
        correctAnswer: 0
    }, {
        question: "What is 1*7?",
        choices: [4, 5, 6, 7, 8],
        correctAnswer: 3
    }, {
        question: "What is 8*8?",
        choices: [20, 30, 40, 50, 64],
        correctAnswer: 4
    }];

    //Chooses a random question
    var questions = questionbank[Math.floor(Math.random() * questionbank.length)];
    console.log(questions)

    var selections = []; //Array containing user choices
    var quiz = $('#quiz'); //Quiz div object

    // Display initial question
    askQuestion();

    // Click handler for the 'submit' button
    $('#submit').on('click', function (e) {
        e.preventDefault();

        // Suspend click listener during fade animation
        if(quiz.is(':animated')) {
            return false;
        }
        choose();

        // If no user selection, progress is stopped
        if (isNaN(selections)) {
            alert('Please make a selection!');
        } else {

            window.location.href = "thanks.html";
        }
    });

    // Creates and returns the div that contains the questions and
    // the answer selections
    function createQuestionElement() {
        var qElement = $('<div>', {
            id: 'question'
        });

        //var header = $('<h2>Question ' + (index + 1) + ':</h2>');
       //qElement.append(header);

        var question = $('<p>').append(questions.question);
        qElement.append(question);

        var radioButtons = createRadios();
        qElement.append(radioButtons);

        return qElement;
    }

    // Creates a list of the answer choices as radio inputs
    function createRadios() {
        var radioList = $('<ul>');
        var item;
        var input = '';
        for (var i = 0; i < questions.choices.length; i++) {
            item = $('<li>');
            input = '<input type="radio" name="answer" value=' + i + ' />';
            input += questions.choices[i];
            item.append(input);
            radioList.append(item);
        }
        return radioList;
    }

    // Reads the user selection and pushes the value to an array
    function choose() {
        selections = +$('input[name="answer"]:checked').val();
    }

    // Displays submit requested element
    function askQuestion() {
        quiz.fadeOut(function() {
            $('#question').remove();


                var submitQuestion = createQuestionElement();
                quiz.append(submitQuestion).fadeIn();
                if (!(isNaN(selections))) {
                    $('input[value='+selections+']').prop('checked', true);
                }

                // Controls display of 'prev' button
                else{

                }

        });

    }

})();