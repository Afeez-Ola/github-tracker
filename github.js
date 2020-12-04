class Github {
    constructor(client_id, secret_key) {
        this.client_id = '06dda69092a83febfff2';
        this.client_secret = 'dcc8ae9cd3b3574946da14727734e7b4cbf8dd76 ';
        this.repos_count = 5;
        this.repos_sort = 'created asc'
    }

    async getUser(user) {
        const profileResponse = await fetch(
            `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret${this.client_secret}`
        );

        const profileData = await profileResponse.json();

        const repoResponse = await fetch(
            `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret${this.client_secret}`
        );

        const reposData = await repoResponse.json();
        return {
            profile: profileData,
            repos: reposData
        };
    }
}