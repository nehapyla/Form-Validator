const form=document.getElementById("form");
const username=document.getElementById("name");
const email=document.getElementById("email");
const password=document.getElementById("password");
const submitbtn=document.getElementById("sub");

submitbtn.addEventListener("click", (e) => {
    e.preventDefault();
    formValidator();
})

function formValidator() {
    let nameValue=username.value.trim();
    let emailValue=email.value.trim();
    let passwordValue=password.value.trim();

    // USERNAME
    if (nameValue === "")
    {
        invalid(username, "User name cannot be blank")
    }

    else if (nameValue.length<5)
    {
        invalid(username, "User name should be atleast 6 characters")
    }

    else 
    {
        valid(username)
    }

    // EMAIL
    if (emailValue === "")
    {
        invalid(email, "Email id cannot be blank")
    }

    else if (!emailcheck(emailValue))
    {
        invalid(email, "Enter a valid email id")
    }

    else
    {
        valid(email)
    }

    // PASSWORD
    if (passwordValue === "")
    {
        invalid(password, "Password cannot be empty")
    }

    else if (passwordValue.length<8)
    {
        invalid(password, "Password should consist of atleast 8 characters")
    }

    else
    {
        valid(password)
    }

    // INVALID FUNCTION
    function invalid(a, errormsg) {
        var parent=a.parentElement;
        var paratag=parent.querySelector("p");
        paratag.innerHTML=errormsg;
        parent.classList.add("error");
        parent.classList.remove("success");
    }

    function valid(a) {
        var parent=a.parentElement;
        parent.classList.add("success");
        parent.classList.remove("error");
    }

    function emailcheck(result) {
        var check = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        var finaloutput = check.test(result);
        return finaloutput;
    }
}