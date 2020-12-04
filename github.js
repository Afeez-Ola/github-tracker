class Github {
    constructor(client_id, secret_key) {
        this.client_id = '06dda69092a83febfff2';
        this.client_secret = 'dcc8ae9cd3b3574946da14727734e7b4cbf8dd76 ';
    }

    async getUser(user) {
        const profileResponse = await fetch(
            `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret${this.client_secret}`
        );

        const profileData = await profileResponse.json();
        return {
            profile: profileData,
        };
    }
}