emailjs.init("WIWcDxgaD1yAkOMFi");

document
.getElementById("contact-form")
.addEventListener("submit", function(e){

    e.preventDefault();

    emailjs.send(
        "service_oqo4l75",
        "template_5ive9ah",
        {
            from_name:
            document.getElementById("name").value,

            from_email:
            document.getElementById("email").value,

            message:
            document.getElementById("message").value
        }
    )

    .then(function(){

        alert("Message Sent Successfully!");

        document
        .getElementById("contact-form")
        .reset();

    })

    .catch(function(error){

        alert("Error: " + error);

    });

});