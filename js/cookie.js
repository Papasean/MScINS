/**
 * Created by Sean on 17/04/2017.
 */

function cookieMonster()
    {

    if (Cookies.get("testCookie") == null) {
        //Do stuff if cookie doesn't exist like set a cookie with a value of 1
        //randomize order of contents with DIV class="group1"
        randomizeContent("group1");
        // create array for Order of Exercises
        var exOrder = $('.group1').map(function () {
            console.log(this.childNodes[1].id);
            return this.childNodes[1].id;
        });
        exOrder = exOrder.splice(0, 3);

        console.log(exOrder);

        // set cookie with div order
        Cookies.set('testCookie', JSON.stringify(exOrder));

    }

    else {

        var reOrder = JSON.parse(Cookies.get('testCookie'));
        console.log(reOrder);
        var div1 = $('#1');

        var div2 = $('#2');

        var div3 = $('#3');

        $('.group1').each(function (parameters) {
            var index = parameters.index;
            // console.log("hello");
            //$(this).empty();
            switch (reOrder[index]) {
                case "1":
                    $(this).append(div1);
                    break;
                case "2":
                    $(this).append(div2);
                    break;
                case "3":
                    $(this).append(div3);
                    break;
            }
            $(this).css({"visibility": "visible"})
        });

    }

}
