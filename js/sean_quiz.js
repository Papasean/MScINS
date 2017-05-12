/*** Created by Sean on 20/04/2017
 Developed from http://codepen.io/gcarino/pen/LDgtn ...*/


var questBank = JSON.parse(sessionStorage.getItem('questBank')) || 0;

console.log(questBank);

//Sets up the question bank


if (questBank === 1) {

    var questionbank = [{
        question: "1. Which Quarter of 2011 has the lowest sales for Ipads?",
        choices: [" Quarter 1", " Quarter 2", " Quarter 3", " Quarter 4"],
        correctAnswer: 1,
        dataset: "ssjson1.json"
    }, {
        question: "2. Which Quarter of 2011 has the lowest sales for Ipads?",
        choices: [" Quarter 1", " Quarter 2", " Quarter 3", " Quarter 4"],
        correctAnswer: 1,
        dataset: "ssjson2.json"
    }, {
        question: "3. Which Quarter of 2011 has the lowest sales for Ipads?",
        choices: [" Quarter 1", " Quarter 2", " Quarter 3", " Quarter 4"],
        correctAnswer: 2,
        dataset: "ssjson3.json"
    }
    ]
}
else if (questBank === 2){
    var questionbank = [{
        question: "4. What is the ip address of the most visited site",
        choices: [" 239.255.255.250", " 192.168.0.254", " 81.139.57.100", " 162.254.196.41"],
        correctAnswer: 3,
        dataset: "ssjson4.json"
    }, {
        question: "5. Which IP Address class has the least number of visited hosts",
        choices: [" Class A", " Class B", " Class C", " Class D"],
        correctAnswer: 4,
        dataset: "ssjson5.json"
    }, {
        question: "6. What is the total number of site visits",
        choices: [" 948,328", " 3,392,766", " 1,488,847", " 4,372,605"],
        correctAnswer: 2,
        dataset: "ssjson6.json"
    }
    ]
}
else {
    var questionbank = [{
        question: "7. How many times is the icmp.js listed in the errorlog?",
        choices: [" 33", " 80", " 47", " 53"],
        correctAnswer: 4,
        dataset: "ssjson7.json"
    }, {
        question: "8. Which is the most called javascript library",
        choices: [" checkState.js", " dateNavigation.js", " dateInterval.js", " bootstrap-button.js"],
        correctAnswer: 2,
        dataset: "ssjson8.json"
    }, {
        question: "9. What is the value of the root node?",
        choices: [" 3564", " 2462", " 8778", " 1139"],
        correctAnswer: 3,
        dataset: "ssjson9.json"
    }
    ]
}
/** var questionbank = [{
        question: "1. What is the ip address of the most visited site",
        choices: [" 239.255.255.250", " 192.168.0.254", " 81.139.57.100", " 162.254.196.41"],
        correctAnswer: 3,
        dataset: "ssjson1.json"
    }, {
        question: "2. Which IP Address class has the least number of visited hosts",
        choices: [" Class A", " Class B", " Class C", " Class D"],
        correctAnswer: 4,
        dataset: "ssjson2.json"
    }, {
        question: "3. What is the total number of site visits",
        choices: [" 948,328", " 3,392,766", " 1,488,847,", " 192.168.1.13"],
        correctAnswer: 2,
        dataset: "ssjson3.json"
    }, {
        question: "4. What is the ip address of the host with the most errors",
        choices: [" 192.168.1.10", " 192.168.1.11", " 192.168.1.12", " 192.168.1.13"],
        correctAnswer: 4,
        dataset: "ssjson4.json"
    }, {
        question: "5. What is the ip address of the host with the most errors",
        choices: [" 192.168.1.10", " 192.168.1.11", " 192.168.1.12", " 192.168.1.13"],
        correctAnswer: 1,
        dataset: "ssjson5.json"
    }, {
        question: "6. What is the ip address of the host with the most errors",
        choices: [" 192.168.1.10", " 192.168.1.11", " 192.168.1.12", " 192.168.1.13"],
        correctAnswer: 2,
        dataset: "ssjson6.json"
    }, {
        question: "7. What is the ip address of the host with the most errors",
        choices: [" 192.168.1.10", " 192.168.1.11", " 192.168.1.12", " 192.168.1.13"],
        correctAnswer: 3,
        dataset: "ssjson7.json"
    }, {
        question: "8. What is the ip address of the host with the most errors",
        choices: [" 192.168.1.10", " 192.168.1.11", " 192.168.1.12", " 192.168.1.13"],
        correctAnswer: 4,
        dataset: "ssjson8.json"
    }, {
        question: "9. What is the ip address of the host with the most errors",
        choices: [" 192.168.1.10", " 192.168.1.11", " 192.168.1.12", " 192.168.1.13"],
        correctAnswer: 4,
        dataset: "ssjson9.json"
    }
];

 */

    //Chooses a random question
    var questions = questionbank[Math.floor(Math.random() * questionbank.length)];
    //console.log(questions);
    //console.log(questions.correctAnswer);
    //console.log(questions.question);

// Check the value of userVisit

var userVisit = JSON.parse(sessionStorage.getItem('userVisit')) || 0;

//console.log(userVisit);
//console.log(typeof userVisit);
/**
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
*/

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
            //console.log(qElement.get(0).innerHTML);
            return qElement.get(0).innerHTML;
        }

        // Creates a list of the answer choices as radio inputs
function createRadios() {
            var radioList = $('<ul>');
            var item;
            var input = '';
            for (var i = 0; i < questions.choices.length; i++) {
                item = $('<li>');
                input = '<input type="radio" class="radio" name="answer" value=' + i + ' required/>';
                input += questions.choices[i];
                item.append(input);
                radioList.append(item);
            }
            return radioList;
        }
