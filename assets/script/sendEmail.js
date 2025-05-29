/*
function sendEmail() {

    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };


    const serviceID = "service_1t6dvna";
    const templateID = "template_jv5jlrp";


    emailjs
        .send(serviceID, templateID, params)
        .then((response) => {
            alert("Email sent successfully!");
            console.log("Email sent successfully:", response.status, response.text);
        })
        .catch((error) => {
            alert("Failed to send email. Please try again later.");
            console.error("Error sending email:", error);
        });
}
*/


    function sendEmail() {
    var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
};


        const namee = document.getElementById("name").value.trim();
        const emaill = document.getElementById("email").value.trim();
        const msgg = document.getElementById("message").value.trim();

        if (!namee || !emaill || !msgg) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'All fields are required!',
                footer: '<a href="">Why do I have this issue?</a>'
            });
        } else{



    const serviceID = "service_1t6dvna";
    const templateID = "template_jv5jlrp";

    emailjs
    .send(serviceID, templateID, params)
    .then((response) => {
    Swal.fire({
    icon: 'success',
    title: 'Email Sent!',
    text: 'Your email was sent successfully.',
    confirmButtonText: 'OK',
}).then(() => {

        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
    });


    console.log("Email sent successfully:", response.status, response.text);
})
    .catch((error) => {
    Swal.fire({
    icon: 'error',
    title: 'Email Failed!',
    text: 'Failed to send email. Please try again later.',
    confirmButtonText: 'OK',
});
    console.error("Error sending email:", error);
});}

}

