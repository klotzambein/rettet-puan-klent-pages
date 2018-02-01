$(function () {
    var $root = $('html, body');

    $('a[href^="#"]').click(function () {
        var href = $.attr(this, 'href');

        $root.animate({
            scrollTop: $(href).offset().top - 50
        }, 500, function () {
            //window.location.hash = href;
        });

        return false;
    });

    $(".navbar-nav a").click(function (event) {
        $(".navbar-collapse").collapse('hide');
    });
    $('#navBtn').click(function () {
        $(".navbar-collapse").collapse('toggle');
    });
    $('#saveBtn').click(function () {
        $('#emailError').text("");
        $('#emailSuccess').text("");
        var email = $('#emailInput').val();
        if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email))
            $.post("http://nodejs-mongo-persistent-rettet-puan-klent.7e14.starter-us-west-2.openshiftapps.com/api/add", {
                email: email
            }, function (params, status) {
                if (params.error) {
                    $('#emailSuccess').text("");
                    $('#emailError').text(params.error);
                } else {
                    $('#emailError').text("");
                    $('#emailSuccess').text("Vielen Dank");
                }
            });
        else {
            $('#emailSuccess').text("");
            $('#emailError').text("Error: not a valid email");
        }
    });
});
