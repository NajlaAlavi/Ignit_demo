function validateForm(){
	
	let x = document.forms["regform"]["email"].value;
	if (x == ""){
		alert("Email is mandatory");
		return false;
	}
}

function CheckPassword(inputtxt){
	var passw = /^[A-Za-z]\w{7,14}$/, letters = /^[A-Za-z]+$/ ;
	if (inputtxt.value.match(passw){
		return true;
	}
	else{
		alert('Password should contain Alphabets, numeric, and special characters ')
		return false;
	}
}

// function allLetter(inputtxt){
	// var letters = /^[A-Za-z]+$/;
	// if (inputtxt.value.match(letters){
		// return true;
	// }
	// else{
		// alert('First Name and Last Name should only contain alphabets.')
		// return false;
	// }
// }