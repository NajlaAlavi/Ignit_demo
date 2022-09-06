function ValidateForm(){
    let x = document.forms["myForm"]["lname"].value;
    if (x=="") {
        alert("Name must be filled out");
        return false;
    }
}

// function ValidateEmail(input){
//     let validRegex = "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/";
//     if (input.value.match(validRegex)){
//         alert('Valid Email Address!');
//         document.myForm.email.focus();
//         return true;
//     }
//     else{
//         alert('Invalid Email Address!!');
//         document.myForm.email.focus();
//         return false;
//     }
// }

