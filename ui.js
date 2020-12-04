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

    clearProfile() {
        this.profile.innerHTML = '';
    }
}