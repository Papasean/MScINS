/**
 * Created by Sean on 20/04/2017.
 */

/** Developed from http://codepen.io/gcarino/pen/LDgtn */


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
console.log(questions);
console.log(questions.question);
console.log(questions.correctAnswer);

var selections = []; //Array containing user choices
var quiz1 = $('#quiz1'); //Quiz div object
var quiz2 = $('#quiz2'); //Quiz div object

    // Display initial question
    //askQuestion1();
    //askQuestion2();

/**
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
*/
    // Creates and returns the div that contains the questions and
    // the answer selections
function createModal1() {
        var qElement1 = $('<div>', {
            id: 'question1'
        });
        var question1 = $('<p>').append(questions.question);
        qElement1.append(question1);

        return qElement1;
    }

function createModal2() {
        var qElement2 = $('<div>', {
            id: 'question2'
        });

        var question2 = $('<p>').append(questions.question);
        qElement2.append(question);

        var radioButtons = createRadios();
        qElement2.append(radioButtons);

        return qElement2;
    }

    // Creates a list of the answer choices as radio inputs
function createRadios() {
        var radioList = $('<ul>');
        var item;
        var input = '';
        for (var i = 0; i < questions.choices.length; i++) {
            item = $('<li>');
            input = '<input type="radio" class="radio" name="answer" value=' + i + ' />';
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

    // Displays initial Modal Question element
function askQuestion1() {
    //quiz.fadeOut(function() {
    //  $('#question').remove();
    var submitQuestion1 = createModal1();
    quiz1.append(submitQuestion1).fadeIn();

    return submitQuestion1;
    }

    // Displays submit requested element
function askQuestion2() {
    var submitQuestion = createModal2();
    quiz2.append(submitQuestion).fadeIn();

    if (!(isNaN(selections))) {
        $('input[value='+selections+']').prop('checked', true);
    }

    // Controls display of 'prev' button
    else{

    }

    }

