let passwordFirstTry = document.getElementById('password1');
let passwordSecondTry = document.getElementById('password2');
let errorMsg = document.getElementById('error-msg');
let pwdval1, pwdval2;

errorMsg.style.visibility = "hidden";

passwordFirstTry.addEventListener('keyup', () => {
    pwdval1 = passwordFirstTry.value;
    pwdval2 = passwordSecondTry.value;
    if (pwdval2 != '') {
        if (pwdval1 === pwdval2) {
            //display class "ok"
            passwordFirstTry.classList.remove('error');
            passwordSecondTry.classList.remove('error');
            errorMsg.style.visibility = "hidden";

        } else {
            //display class "not ok"
            passwordFirstTry.classList.add('error');
            passwordSecondTry.classList.add('error');
            errorMsg.style.visibility = "visible";
        }
    }
})

passwordSecondTry.addEventListener('keyup', () => {
    pwdval1 = passwordFirstTry.value;
    pwdval2 = passwordSecondTry.value;
    if (pwdval1 === pwdval2) {
        //display class "ok"
        passwordFirstTry.classList.remove('error');
        passwordSecondTry.classList.remove('error');
        errorMsg.style.visibility = "hidden";
    } else {
        //display class "not ok"
        passwordFirstTry.classList.add('error');
        passwordSecondTry.classList.add('error');
        errorMsg.style.visibility = "visible";
    }
})
