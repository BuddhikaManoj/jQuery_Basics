$(function() {
    $("form[name='registration']").validate({
        rules: {
            firstName: "required",

            lastName: "required",

            password: {
                required: true,
                minlength: 5
            },

            confirmPassword: {
                required: true,
                minlength: 5,
                equalTo: "#password"
            }
        },

        messages: {
            firstName: "Please enter your first Name",

            lastName: "Please enter your last Name",

            password: {
                required: "Please provide a password",
                minlength: "Your password must consist of at leaset 5 characters",
            },
            confirmPassword: {
                required: "Please re-enter the password",
                minlength: "Your password must consist of at leaset 5 characters",
                equalTo: "Please enter the same password as above"
            },
        }
    });
});