
function user_login(){
    if ($('#remember').is(':checked')) {
        // save username and password
        $.cookie('username', $('#user_email').val(), { expires: 14 });
        $.cookie('password', $('#user_password').val(), { expires: 14 });
        $.cookie('remember', true, { expires: 14 });
    } else {
    // reset cookies
    $.cookie('username', null);
    $.cookie('password', null);
    $.cookie('remember', null);
    }
    if ($("#LoginForm").valid()) {
        $('body').addClass("loaders");
        $.ajax({
            type: 'POST',
            url: '/webuser/login/',
            data: $("#LoginForm").serialize(),
            dataType: "json",
            success: function (data) {
                if (data.message != "success") {
                    $('body').removeClass("loaders");
                    $("#login-credentials-error").text(data.message);
                    $("#login-credentials-error").show();
                    return false;
                } else {
                    window.location.href = $("#redirection_url").val();
                }
            }
        });
    }
}

function sign_up() {    
    if ($("#SignUpForm").valid()) {
        if ($("#tnc_signup").prop("checked") == false){
            alert("Please accept terms & conditions.");
                return false;
        }
        $('body').addClass("loaders");
        $.ajax({
            type: 'POST',
            url: '/webuser/register/',
            data: $("#SignUpForm").serialize(),
            dataType: "json",
            success: function (data) {
                if (data.message != "Successfully registered.") {
                    $('body').removeClass("loaders");
                    if(data.data == 'referal'){
                     $("#refferal-error").text(data.message);
                     $("#refferal-error").show();
                    }

                    if(data.data == "User"){
                     $("#registered-email-error").text(data.message);
                     $("#registered-email-error").show();
                    }
                    return false;
                } else {
                    window.location.href = $("#signup_redirection_url").val();
                }
            }
        });
    }
}