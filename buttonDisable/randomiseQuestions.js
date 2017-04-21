/**
 * Created by Sean on 20/04/2017.
 */
    //Sets up the question bank
function myQuestionRandomiser() {

    var questionOrderArray = [123, 132, 213, 231, 312, 321];

//Chooses a random question
    var orderQuestions = questionOrderArray[Math.floor(Math.random() * questionOrderArray.length)];
    sessionStorage.setItem('questOrder', orderQuestions);

}