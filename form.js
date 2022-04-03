function confirmPassword(a,b) {
    if (a === b) {
        return true;
    }
}
let password1 = document.getElementById("password")
let password2 = document.getElementById("confirm-passowrd")
console.log(confirmPassword(password1,password2));