const formLogin = document.getElementById('login');
const formRegister = document.getElementById('register');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('form-mail');
const password = document.getElementById('form-password');
const confirmPassword = document.getElementById('confirm-Password');

if(formRegister){
    formRegister.addEventListener('submit',(e)=>{
        e.preventDefault();
    
        validateInputs();
    });
}

if(formLogin){

    formLogin.addEventListener('submit',(e)=>{
        e.preventDefault();
        validateInputsLogin();
    });
}


const setSuccess = (element)=>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

const setError = (element,message)=>{
    const inputControl = element.parentElement;
    const existingErrorMessage = inputControl.querySelector('.error');
    if (existingErrorMessage) {
        inputControl.removeChild(existingErrorMessage);
    }
    const mess = document.createElement("p");
    inputControl.appendChild(mess);
    mess.classList.add('error');
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = message;
    console.log(message);
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
    
}

const isValidEmail = (email)=>{
    const re =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return re.test(String(email).toLowerCase());
}


const validateInputsLogin=()=>{
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if(emailValue === ''){
        setError(email,'Email is required');
    }
    else if(!isValidEmail(emailValue)){
        setError(email,'Invalid email address');
    }
    else{
        setSuccess(email);
    }

    if(passwordValue === ''){
        setError(password, 'Password is required');
    }
    else if(passwordValue.length<8){
        setError(password,'Password must be at least 8 characters');
    }
    else{
        setSuccess(password);
    }
}
const validateInputs = ()=>{
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const confirmValue = confirmPassword.value.trim();

    if(firstNameValue === ''){
        setError(firstName,'Please enter a first name');
    }
    else{
        setSuccess(firstName);
    }
    if(lastNameValue === ''){
        setError(lastName,'Please enter a last name');
    }
    else{
        setSuccess(lastName);
    }


    if(emailValue === ''){
        setError(email,'Email is required');
    }
    else if(!isValidEmail(emailValue)){
        setError(email,'Invalid email address');
    }
    else{
        setSuccess(email);
    }

    if(passwordValue === ''){
        setError(password, 'Password is required');
    }
    else if(passwordValue.length<8){
        setError(password,'Password must be at least 8 characters');
    }
    else{
        setSuccess(password);
    }

    if(confirmValue === ''){
        setError(confirmPassword,'Please verify your password');
    }
    else if(confirmValue != passwordValue){
        setError(confirmPassword,'Password mismatched');
    }
    else{
        setSuccess(confirmPassword);
    }
};

