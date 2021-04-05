// init github 
const github = new Github;
// init ui 
const ui = new UI;

// a variable to take input using ID attribute
const userInput = document.getElementById('searchUser');

userInput.addEventListener('keyup',(e)=>{
    const userName = e.target.value;
    if(userName !== ''){
        // make http call 
        github.getUser(userName)
        .then(res =>{
            if(res.profile.message==="Not Found"){
                // show alert
                ui.showAlert('user not found',"alert alert-danger");
            }else{
                // show profile
                ui.showProfile(res.profile);
                ui.showRepos(res.repos);
               
            }
        });
    }else{
        // clear profile because there is nothing in inputField.
        ui.clearProfile(); 
    }
    
})
