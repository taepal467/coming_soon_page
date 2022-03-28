
const button = document.getElementById("btn");
const getEmail = document.getElementById("email-input");
const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const getErrorMessage = document.getElementById("error-msg");


button.addEventListener("click", validate);

function validate(e) {
  e.preventDefault();

  let valid = true;

  if (!getEmail.value) {
    getErrorMessage.classList.add("visible");
    getEmail.classList.add("invalid");
    getErrorMessage.setAttribute("aria-hidden", false);
    getErrorMessage.setAttribute("aria-invalid", true);
    getErrorMessage.textContent = "Whoops! It looks like you forgot to add your email";
  } else if (getEmail.value !== validRegex ) {
    getErrorMessage.textContent = "Please provide a valid email address"
  } else if(getEmail.value){
    //What is the correct way to remove the error message once the inpput is valid??
    return valid;
  }
 
}









  
 






