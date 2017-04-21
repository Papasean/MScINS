/**
 * Created by Sean on 21/04/2017.
 */

(function modalContent() {
    var userVisit = sessionStorage.getItem('userVisit') || 0;
    console.log(userVisit);
    var modalTitleText;
    var modalBodyQuestion;


    if (userVisit < 1) {
        modalTitleText = "Question One";
        modalBodyQuestion = "What is question 1";
            }
    else if (userVisit < 2) {
        modalTitleText = "Question Two";
        modalBodyQuestion = "What is question 2";
            }
    else {
        modalTitleText = "Question Three";
        modalBodyQuestion = "What is question 3";
            }
    document.getElementsByClassName("modal-title").innerHTML = modalTitleText;
    document.getElementsByClassName("modal-body").innerHTML = modalBodyQuestion;
    })();

}