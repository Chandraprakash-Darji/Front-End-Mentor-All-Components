function ValidateEmail(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat))
{
document.getElementById('error').style.display='none';
document.getElementById('error-text').style.display='none';
}
else
{
// alert("You have entered an invalid email address!");
document.getElementById('error').style.display='block';
document.getElementById("input-div").style.border= '.2em solid var(--Soft-Red)';
document.getElementById('error-text').style.display='block';
document.form1.email.focus();
return false;
}
}
