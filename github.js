class Github {
    constructor() {
        this.client_id = 'f8384534e477bd21622a';
        this.client_secret = 'ea107a0c4bb17f5c276017d686454c4bbd97536c';
        this.repos_count = 5;
        this.repos_sort = 'created:asc';

    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();
        return {
            profile,
            repos
        }
    }
}