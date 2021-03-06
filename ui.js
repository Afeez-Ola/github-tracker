class UI {
    constructor(profile) {
        this.profile = document.querySelector('#profile');
    }

    showProfile(user) {
        // console.log(user);
        this.profile.innerHTML = `
        <div class='card card-body mb-3 '>
            <div class='row'>
                <div class='col-md-3'>
                    <img src="${user.avatar_url}" alt="" class="mb-2 img-fluid">
                    <a href="${user.html_url}" class="btn btn-block btn-primary mb-4" target=_blank''>View Profile</a>
                </div>
                <div class='col-md-9'>
                    <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                    <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
                    <span class="badge badge-success">Followers: ${user.followers}</span>
                    <span class="badge badge-primary">Following: ${user.following}</span>

                    <br>
                     <ul class="list-group">
                        <li class="list-group-item">Company: ${user.company}</li>
                        <li class="list-group-item">Twitter: ${user.twitter_username}</li>
                        <li class="list-group-item">Email: ${user.email}</li>
                        <li class="list-group-item">Website/Blog: ${user.blog}</li>
                        <li class="list-group-item">Location: ${user.location}</li>
                        <li class="list-group-item">Member Since: ${user.created_at}</li>
                    </ul>
                    
                </div>
            </div>
        </div>
        <h3 class="page-heading mb-3"></h3>
        <div id='repos'></div>
        
        `;
    }

    showRepos(repos) {
        let output = '';

        repos.forEach(repo => {
            output += `
            <div class="mb-2 card card-body">
            
                <div class="row">
                    <div class="col-md-6">
                        <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer">${repo.name}</a>
                    </div>
                    <div class="col-md-6">
                          <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
                          <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
                          <span class="badge badge-success">Forks: ${repo.forks_count}</span>
                    </div>
                </div>

            </div>
                `;
        });

        document.getElementById('repos').innerHTML = output;
    }

    showAlert(message, className) {
        this.clearAlert();
        const div = document.createElement('div');

        div.className = className;
        div.appendChild(document.createTextNode(message));

        const container = document.querySelector('.searchContainer');
        const search = document.querySelector('.search');

        container.insertBefore(div, search);

        setTimeout(() => {
            this.clearAlert();
        }, 3000);
    }

    clearAlert() {
        const currentAlert = document.querySelector('.alert');

        if (currentAlert) {
            currentAlert.remove();
        }
    }

    clearProfile() {
        this.profile.innerHTML = '';
    }
}