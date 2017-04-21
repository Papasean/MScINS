/**
 * Created by Sean on 20/04/2017.
 */
// Check the value of userVisit
var userVisit = sessionStorage.getItem('userVisit') || 0;

//check the value of questOrder
var questionsOrder = JSON.parse(sessionStorage.getItem('questOrder')) || 0;
//console.log(questionsOrder);
if (questionsOrder === 0)
{
    var questionOrderArray = [123, 132, 213, 231, 312, 321];
    questionsOrder = questionOrderArray[Math.floor(Math.random() * questionOrderArray.length)];
}
/**else
{
    console.log("Boom");
}
*/
function enableButtons() {
    //var questionsOrder = 312;
    console.log(questionsOrder);
    sessionStorage.setItem('questOrder', questionsOrder);
    console.log(userVisit);
    var text;

    switch(questionsOrder) {
        case 123:
            if (userVisit < 1) {
                text = "Good morning 123";
                userVisit++;
                sessionStorage.setItem('userVisit', userVisit);
                document.getElementById("myBtn1").disabled = false;
            } else if (userVisit < 2) {
                text = "Good day 123";
                userVisit++;
                sessionStorage.setItem('userVisit', userVisit);
                document.getElementById("myBtn2").disabled = false;
            } else if (userVisit < 3) {
                text = "Good night 123";
                userVisit++;
                sessionStorage.setItem('userVisit', userVisit);
                document.getElementById("myBtn3").disabled = false;
            }
            else {
                atTheEnd();
                //window.location.href = "../quizStuff/thanks.html";
            }
            break;
        case 132:
            if (userVisit < 1) {
                text = "Good morning 132";
                userVisit++;
                sessionStorage.setItem('userVisit', userVisit);
                document.getElementById("myBtn1").disabled = false;
            } else if (userVisit < 2) {
                text = "Good day 132";
                userVisit++;
                sessionStorage.setItem('userVisit', userVisit);
                document.getElementById("myBtn3").disabled = false;
            } else if (userVisit < 3) {
                text = "Good night 132";
                userVisit++;
                sessionStorage.setItem('userVisit', userVisit);
                document.getElementById("myBtn2").disabled = false;
            }
            else {
                atTheEnd();
                //window.location.href = "../quizStuff/thanks.html";
            }
            break;
        case 213:
            if (userVisit < 1) {
                text = "Good morning 213";
                userVisit++;
                sessionStorage.setItem('userVisit', userVisit);
                document.getElementById("myBtn2").disabled = false;
            } else if (userVisit < 2) {
                text = "Good day 213";
                userVisit++;
                sessionStorage.setItem('userVisit', userVisit);
                document.getElementById("myBtn1").disabled = false;
            } else if (userVisit < 3) {
                text = "Good night 213";
                userVisit++;
                sessionStorage.setItem('userVisit', userVisit);
                document.getElementById("myBtn3").disabled = false;
            }
            else {
                atTheEnd();
                //window.location.href = "../quizStuff/thanks.html";
            }
            break;
        case 231:
            if (userVisit < 1) {
                text = "Good morning 231";
                userVisit++;
                sessionStorage.setItem('userVisit', userVisit);
                document.getElementById("myBtn2").disabled = false;
            } else if (userVisit < 2) {
                text = "Good day 231";
                userVisit++;
                sessionStorage.setItem('userVisit', userVisit);
                document.getElementById("myBtn3").disabled = false;
            } else if (userVisit < 3) {
                text = "Good night 231";
                userVisit++;
                sessionStorage.setItem('userVisit', userVisit);
                document.getElementById("myBtn1").disabled = false;
            }
            else {
                atTheEnd();
                //window.location.href = "../quizStuff/thanks.html";
            }
            break;
        case 312:
            if (userVisit < 1) {
                text = "Good morning 312";
                userVisit++;
                sessionStorage.setItem('userVisit', userVisit);
                document.getElementById("myBtn3").disabled = false;
            } else if (userVisit < 2) {
                text = "Good day 312";
                userVisit++;
                sessionStorage.setItem('userVisit', userVisit);
                document.getElementById("myBtn1").disabled = false;
            } else if (userVisit < 3) {
                text = "Good night 312";
                userVisit++;
                sessionStorage.setItem('userVisit', userVisit);
                document.getElementById("myBtn2").disabled = false;
            }
            else {
                atTheEnd();
                //window.location.href = "../quizStuff/thanks.html";
            }
            break;
        case 321:
            if (userVisit < 1) {
                text = "Good morning 321";
                userVisit++;
                sessionStorage.setItem('userVisit', userVisit);
                document.getElementById("myBtn3").disabled = false;
            } else if (userVisit < 2) {
                text = "Good day 321";
                userVisit++;
                sessionStorage.setItem('userVisit', userVisit);
                document.getElementById("myBtn2").disabled = false;
            } else if (userVisit < 3) {
                text = "Good night 321";
                userVisit++;
                sessionStorage.setItem('userVisit', userVisit);
                document.getElementById("myBtn1").disabled = false;
            }
            else {
                atTheEnd();
                //window.location.href = "../quizStuff/thanks.html";
            }
            break;
            userVisit++;
            return userVisit;
            console.log(userVisit);
        default:
            text = "Looking forward to the Weekend";
        }
    //document.getElementById("demo").innerHTML = text;

    console.log(questionsOrder);

    console.log(userVisit);

}

function atTheEnd() {
    window.location.href = "thanks.html";
}