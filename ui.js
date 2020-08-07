class UI {
    constructor() {
        this.profile = document.getElementById('profile');
    }
    
    // show profile of user
    showProfile(user) {
        this.profile.innerHTML = `
        <div class="container mt-3">
        <div class="card card-body p-3">
    <div class="row">
        <div class="col-md-3">
            <img class="img-fluid mb-2" style="cursor:pointer" src="${user.avatar_url}">
            <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">view Profile</a>
        </div>
        <div class="col-md-9">
                <span class="badge badge-primary">public Repos: ${user.public_repos}</span>
                <span class="badge badge-secondary">public gists: ${user.public_gists}</span>
                <span class="badge badge-success">following: ${user.following}</span>
                <span class="badge badge-info">followers: ${user.followers}</span>
                <br><br>
                <ul class="list-group">
    <li class="list-group-item">Company : ${user.company}</li>
    <li class="list-group-item">website/Blog : ${user.blog}</li>
    <li class="list-group-item">Location : ${user.location}</li>
    <li class="list-group-item">Member Since : ${user.created_at}</li>
</ul>

        </div>
    </div>
    </div>
    <h3 class="page-heading mb-3 mt-3">Latest Repos</h3>
<div class="repos"></div>
</div>


        `;
    }



    // if user does not exist then throw error
    showAlert(msg, className) {
        // remove all alert div except last err div
        this.clearAlert();
        const div = document.createElement('div');
        div.className = className;
        div.appendChild(document.createTextNode(msg));
        const container = document.querySelector('#searchContainer');
        const search = document.querySelector('.search');
        container.insertBefore(div, search);


        // remove last err div after 3 sec.
        setTimeout(() => {
            this.clearAlert();
        }, 3000);
    }

    showRepos(repos) {
        let output = " ";

        // repos is a list , so apply a loop to access the single repo.
        repos.forEach((repo) => {
            output += ` 
                <div class="card card-body mb-2">
                <div class="row">
                <div class="col-md-6">
                <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                </div>
                <div class="col-md-6">
                <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
                <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
                <span class="badge badge-success">Forks: ${repo.forks_count}</span></div>

                </div>
                </div>
            `
        });
        document.querySelector('.repos').innerHTML = output;
    }



    // to aviod repeating err div , just create clearAlert function
    clearAlert() {
        const currentAlert = document.querySelector('.alert');
        if (currentAlert) {
            currentAlert.remove();
        }
    }


    // if input field is empty then clear the profile
    clearProfile() {
        document.getElementById('profile').innerHTML = " ";
    }
}