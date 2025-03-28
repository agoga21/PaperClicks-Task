window.onload = function() {
    display();

    setTimeout(function() {
        localStorage.clear();
    }, 3000); //Delete from local storage after 3 seconds

}

function display(){
    var userInput = localStorage.getItem("userInput");
    var firstName = localStorage.getItem("firstName");
    var lastName = localStorage.getItem("lastName");
    var email = localStorage.getItem("email");
    var phoneNumber = localStorage.getItem("phoneNumber");
    var result = document.querySelector(".result");

    if(userInput && firstName && lastName && email && phoneNumber){
        result.innerHTML = `
            <h2>Result</h2>
            <p><strong>User Input:</strong> ${userInput}</p>
            <p><strong>First Name:</strong> ${firstName}</p>
            <p><strong>Last Name:</strong> ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone Number:</strong> ${phoneNumber}</p>
        `;

    }
    else{
        result.innerHTML = `<p>Error: Missing data!</p>`;
    }
}