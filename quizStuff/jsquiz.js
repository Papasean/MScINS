/**
 * Created by Sean on 20/04/2017.
 */

/** Developed from http://codepen.io/gcarino/pen/LDgtn */

    //Sets up the question bank
var questionbank = [{
        question: "1. What is the ip address of the host with the most errors",
        choices: [" 192.168.1.10", " 192.168.1.11", " 192.168.1.12", " 192.168.1.13"],
        correctAnswer: 1
    }, {
        question: "2. What is the ip address of the host with the most errors",
        choices: [" 192.168.1.10", " 192.168.1.11", " 192.168.1.12", " 192.168.1.13"],
        correctAnswer: 2
    }, {
        question: "3. What is the ip address of the host with the most errors",
        choices: [" 192.168.1.10", " 192.168.1.11", " 192.168.1.12", " 192.168.1.13"],
        correctAnswer: 3
    }, {
        question: "4. What is the ip address of the host with the most errors",
        choices: [" 192.168.1.10", " 192.168.1.11", " 192.168.1.12", " 192.168.1.13"],
        correctAnswer: 4
    }, {
        question: "5. What is the ip address of the host with the most errors",
        choices: [" 192.168.1.10", " 192.168.1.11", " 192.168.1.12", " 192.168.1.13"],
        correctAnswer: 1
    }, {
        question: "6. What is the ip address of the host with the most errors",
        choices: [" 192.168.1.10", " 192.168.1.11", " 192.168.1.12", " 192.168.1.13"],
        correctAnswer: 2
    }, {
        question: "7. What is the ip address of the host with the most errors",
        choices: [" 192.168.1.10", " 192.168.1.11", " 192.168.1.12", " 192.168.1.13"],
        correctAnswer: 3
    }, {
        question: "8. What is the ip address of the host with the most errors",
        choices: [" 192.168.1.10", " 192.168.1.11", " 192.168.1.12", " 192.168.1.13"],
        correctAnswer: 4
    }];

    //Chooses a random question
    var questions = questionbank[Math.floor(Math.random() * questionbank.length)];
    console.log(questions);
    console.log(questions.correctAnswer);
    console.log(questions.question);

// Check the value of userVisit

var userVisit = JSON.parse(sessionStorage.getItem('userVisit')) || 0;

//var questiontime = 0;
console.log(userVisit);
console.log(typeof userVisit);

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


    if (userVisit === 1) {
        document.getElementById("div-title").innerHTML = "Question One";
        document.getElementById("div-body").innerHTML = (questions.question);
        document.getElementById("div-title2").innerHTML = "Question One";
        document.getElementById("div-body2").innerHTML = (questions.question);
        document.getElementById("div-question").innerHTML = createQuestionElement();
        }
    else if (userVisit === 2){
            document.getElementById("div-title").innerHTML = "Question Two";
            document.getElementById("div-body").innerHTML = (questions.question);
            document.getElementById("div-title2").innerHTML = "Question Two";
            document.getElementById("div-body2").innerHTML = (questions.question);
            document.getElementById("div-question").innerHTML = (createQuestionElement());
        }
     else {
            document.getElementById("div-title").innerHTML = "Question Three";
            document.getElementById("div-body").innerHTML = (questions.question);
            document.getElementById("div-title2").innerHTML = "Question Three";
            document.getElementById("div-body2").innerHTML = (questions.question);
            document.getElementById("div-question").innerHTML = (createQuestionElement());
        }

// Creates and returns the div that contains the questions and
// the answer selections
function createQuestionElement() {
            var qElement = $('<div>', {
                id: 'question'
            });

            //var header = $('<h2>Question ' + (index + 1) + ':</h2>');
            //qElement.append(header);

            //var question = $('<p>').append(questions.question);
            //qElement.append(question);

            var radioButtons = createRadios();
            qElement.append(radioButtons);
            console.log(qElement.get(0).innerHTML);
            return qElement.get(0).innerHTML;
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
