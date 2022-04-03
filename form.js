function confirmPassword() {
    if (password1.value === password2.value) {
        match.innerText = "Passwords Match!"
        match.style.cssText = 'visibility: visible';

    } else {
        match.innerText = "Passwords Don't Match!"
        match.style.cssText = 'visibility: visible'

    }  
    
}

let match = document.querySelector('.match');
let password1 = document.getElementById("password")
let password2 = document.getElementById("confirm-password")


password1.addEventListener('keyup',() => {
    console.log(password1.value);
    console.log(password2.value);
    if (password2.value.length != 0 ) {
        confirmPassword();
    }
    
       

    if(password1.value.length === 0 || password2.value.length){
        match.style.cssText = 'visibility: hidden';
        notMatch.style.cssText = 'visibility: hidden';
    } 
});

password2.addEventListener('keyup',confirmPassword);



