const searchUser = document.querySelector('#searchUser');
const github = new Github();
const ui = new UI();

searchUser.addEventListener('keyup', e => {
    const userName = e.target.value;

    if (userName !== '') {
        github
            .getUser(userName)
            .then(data => {
                if (data.profile.message === 'Not Found') {
                    // console.log('User not found');

                    ui.showAlert('User not found', 'alert alert-danger')
                } else {
                    // console.log(data);
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos)
                }
            })
            .catch(err => console.log(err));
    } else {
        ui.clearProfile();
    }
});