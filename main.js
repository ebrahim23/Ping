let form = document.getElementById("form"),
    email = document.getElementById("email"),
    small = document.querySelector("small"),
    button = document.querySelector("button");


function checkIf(){
    const emailValue = email.value.trim();

    if(!isEmail(emailValue)) {
        setError(email, 'Please provide a valid email adress')
    }
}

function setError(input, message){
    small.innerText = message;

    email.className = 'err';
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}