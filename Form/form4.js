document.getElementById("myForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let age = document.getElementById("age").value.trim();
    let password = document.getElementById("password").value;


    let msg = document.getElementById("message");

    if (!msg) {
        msg = document.createElement("p");
        msg.id = "message";
        document.body.appendChild(msg);
    }

   
    let namePattern = /^[A-Za-z ]{3,30}$/;
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    let phonePattern = /^[6-9]\d{9}$/;
    let agePattern = /^\d+$/;
    let passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%&*!]).{8,}$/;

    if (name === "" || !namePattern.test(name)) {
        msg.innerHTML = "Please enter a valid name!";
    }
    else if (email === "" || !emailPattern.test(email)) {
        msg.innerHTML = "Please enter a valid email address!";
    }
    else if (phone === "" || !phonePattern.test(phone)) {
        msg.innerHTML = "Please enter a valid 10-digit mobile number!";
    }
    else if (age === "" || !agePattern.test(age) ||
             Number(age) < 18 || Number(age) > 100) {
        msg.innerHTML = "Age must be between 18 and 100!";
    }
    else if (!passwordPattern.test(password)) {
        msg.innerHTML = "Password must contain uppercase, lowercase, number, special character and at least 8 characters!";
    }
    else {
        msg.innerHTML = "Registration Successful!";
        this.reset();
    }

});