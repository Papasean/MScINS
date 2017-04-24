/*** Created by Sean on 17/04/2017.**/
function send2Firebase()
    {

        var userId = JSON.parse(Cookies.get('UserID'));
        var radioValue = document.querySelector('input[name="answer"]:checked').value;
        var finTime = document.getElementById("time").innerHTML;
        var correctAnswer = questions.correctAnswer;

        // Initialize Firebase
        var config = {
            apiKey: "AIzaSyAu-8hww6VXWXNXSDKxZxYLBP4NEpjOJ30",
            authDomain: "mscins-9ab2e.firebaseapp.com",
            databaseURL: "https://mscins-9ab2e.firebaseio.com",
            projectId: "mscins-9ab2e",
            storageBucket: "mscins-9ab2e.appspot.com",
            messagingSenderId: "354357573870"
        };
        firebase.initializeApp(config);

        var database = firebase.database();
        var results = database.ref('results/netmon3');
        var data = {
            Username: userId,
            Answer_User: radioValue,
            Answer_Correct: correctAnswer,
            Time: finTime
        };

        results.push(data, finished);
        function finished(error) {
            if (error) {
                console.log('ooops');
            } else {
                console.log('data saved!');
                //window.location.href = "../../thanks.html";
                if (sessionStorage.getItem('userVisit') < 3) {
                    window.location.href = "../../index.html";
                }
                else{
                    window.location.href = "../../thanks.html";
                }
            }
        }

    }
