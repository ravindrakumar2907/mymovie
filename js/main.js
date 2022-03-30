
/* This is login form related code */
function validateLogin(){
    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();
    
    let passLen = password.length;
    console.log("Inside the validateLogin function passLen: " + passLen);

    if(username == ""){
        document.getElementById("errorInfo").innerHTML="Username should not be empty.";
        document.getElementById("errorInfo").style.color="red";
        return false
    }

    if(passLen < 10 ){
        document.getElementById("errorInfo").innerHTML="Password should be at least 10 char long";
        document.getElementById("errorInfo").style.color="red";
        return false
    }
    document.getElementById("errorInfo").innerHTML="Username or password is not valid.";
    document.getElementById("errorInfo").style.color="red";


    document.getElementById("errorInfo").innerHTML="Login Success.";
    document.getElementById("errorInfo").style.color="white";
    document.getElementById("errorInfo").style.backgroundColor="green";
    return false
}