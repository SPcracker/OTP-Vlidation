function genOtp(){
    let genOtp = Math.floor(1000+Math.random()*9000);
    window.localStorage.setItem("otp",genOtp);
}

function validateOtp(){
    let enterOtp = document.querySelector("#enterOtp").value;
    let otp = window.localStorage.getItem("otp");
    if(enterOtp === otp){
        console.log("you are login")
        window.location.href = "welcome.html";
    } else{
        alert("Wrong Credentials");
    }
}