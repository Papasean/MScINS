/*** Created by Sean on 17/04/2017.**/
function() {
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
}

function writeUserData(userId, testNumber, radioValue, finTime)
    {
    firebase.database().ref('users/' + userId).set({
        Viztest = testNumber,
        radioValue,
        finTime
    });
    }