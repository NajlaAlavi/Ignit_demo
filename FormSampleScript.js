function ValidateForm(){
    let x = document.forms["myForm"]["lname"].value;
    if (x=="") {
        alert("Name must be filled out");
        return false;
    }
}



