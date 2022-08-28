function validateForm(){
	
	let x = document.forms["regform"]["email"].value;
	if (x == ""){
		alert("Email is mandatory");
		return false;
	}
}