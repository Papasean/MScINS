/**
 * Created by Sean on 21/04/2017.
 */

function modalContent() {
    var userVisit = sessionStorage.getItem('userVisit') || 0;
    console.log(userVisit);

    if (userVisit < 1) {
        sessionStorage.setItem('userVisit', userVisit);
        console.log(userVisit);
        document.getElementById("div-title").innerHTML = "Question One";
        document.getElementById("div-body").innerHTML = "How are you?";
            }
    else if (userVisit < 2) {
        sessionStorage.setItem('userVisit', userVisit);
        console.log(userVisit);
        document.getElementById("div-title").innerHTML = "Question Two";
        document.getElementById("div-body").innerHTML = "How about you?";
            }
    else if (userVisit < 3){

        sessionStorage.setItem('userVisit', userVisit);
        console.log(userVisit);
        document.getElementById("div-title").innerHTML = "Question Three";
        document.getElementById("div-body").innerHTML = "See ya.";
    }
    else {
        window.location.href = "thanks.html";
    }
}

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