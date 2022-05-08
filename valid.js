const emailMessage = document.querySelector('.error-message');
const email = document.querySelector('#email');
const emailSubmit = document.querySelector('.email_submit')
emailSubmit.addEventListener('click', () => {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.value == "" || email.value == "null"){
emailMessage.innerHTML = "Please enter valid email address.";
    }
    if(!email.value.match(mailformat)){
        emailMessage.innerHTML = "Please enter valid email address.";
    }else{
        emailMessage.innerHTML = "";
    }
})