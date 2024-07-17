$(function() {
    $("form[name='registration']").validate({
        rules: {
            firstName: "required",

            lastName: "required",

            email: {
                required: true,
                email: true
            },

            mobileNo: {
                required: true,
                maxlength: 10,
                minlength: 10
            },

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

            email: {
                required: "Please provide an email",
                email: "Please enter a valid email"
            },

            mobileNo: {
                required: "Please enter a contact number",
                minlength: "10 Numbers required",
                maxlength: "Please enter no more than 10 numbers"
            },

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