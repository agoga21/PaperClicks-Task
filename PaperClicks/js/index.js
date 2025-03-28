function redirect(){
    var userInput = document.getElementById("select").value;
    
    if(userInput){
        localStorage.setItem("userInput", userInput);
        window.location.href = "../html/page2.html";
    }
    else{
        document.getElementById("errorMsg").innerHTML = "Please select a value!";
    }
}
function redirect2(){
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var phoneNumber = document.getElementById("phoneNumber").value;

    if(firstName && lastName && email && phoneNumber){

        localStorage.setItem("firstName", firstName);
        localStorage.setItem("lastName", lastName);
        localStorage.setItem("email", email);
        localStorage.setItem("phoneNumber", phoneNumber);
        window.location.href = "../html/result.html";
    }
    else{
        document.getElementById("errorMsg").innerHTML = "Please fill all the fields!";
    }
}
