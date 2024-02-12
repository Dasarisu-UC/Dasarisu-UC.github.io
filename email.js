var shown = false;
function showhideEmail(){
	if(shown){
		document.getElementById('email').innerHTML = "show my email";
		shown = false;
	}
	else
	{
		var myemail = "<i class='resume-contact-icon bi bi-envelope me-2'></i>"+ "<a href ='mailto:dasarisu" + "@" + "mail.uc.edu'>dasarisu" + "@" + "mail.uc.edu </a>";
		document.getElementById('email').innerHTML = myemail;
		shown = true;
	}
}