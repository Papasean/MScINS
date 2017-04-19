/**
 * Created by Sean on 17/04/2017.
 */
function createSession()
{
    if (Cookies.get('UserID') == null) {
        //Do stuff if cookie doesn't exist like set a cookie with a value of 1
        var session_id = Date.now();

        Cookies.set('UserID', JSON.stringify(session_id));
        console.log(session_id);
    }

    else {
        console.log(session_id);
    }
}