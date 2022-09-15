function ValidateEmail(inputEmail)
{
    var formatofEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(inputEmail.value.match(formatofEmail))
    {
        return true;
    }
    else
    {
        alert("You have entered an invalid email address!");
        document.form1.GroupEmail.focus();
        return false;
    }
}

function ValidateUsername(inputUsername)
{
    var formatofUserName = /(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[A-Z])(?=.*[0-9]).*$/;
    if(inputUsername.value.match(formatofUserName))
    {
        document.getElementById("InvalidCheck").innerHTML = "";
        return true;
    }
    else
    {
        document.getElementById("InvalidCheck").innerHTML = "Invalid Username";
        return false;
    }
}

function ValidatePassword(inputPassword1, inputPassword2){
    
    if(inputPassword1.value != "" && inputPassword2.value != "" && inputPassword1.value.match(inputPassword2.value))
    {
        return true;
    }
    else if (inputPassword1.value == "" && inputPassword2.value == ""){
        alert("Password Cannot be empty");
        return false;
    }
    else
    {
        alert("Your Passwords don't match");
        return false;
    }
}

function ValidateTeamLead(element){
    if(element.value == "tempLead"){
        alert("Please select a Team Lead");
    }
    else{
        return true;
    }
}

function checkAll(){
    if(ValidateEmail(document.form1.GroupEmail) && ValidateUsername(document.form1.ServerUsername) && ValidatePassword(document.form1.ServerPassword, document.form1.ConfirmPassword) && ValidateTeamLead(document.form1.TeamLead)){
        alert("Name : "+document.form1.ManagerName.value+"\nEmail : "+document.form1.GroupEmail.value+"\nUsername : "+document.form1.ServerUsername.value+"\nTeam Lead : "+document.form1.TeamLead.value+"\nTeam Members : ");
    }
    else{
        alert("Incorrect Data");
        return false;
    }
}


document.onkeyup = function(key){
    if (key.ctrlKey && (key.key).charCodeAt(0) == 109){
        switchToBlackMode();
    }
    console.log(key.key);
}

function switchToBlackMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");

}