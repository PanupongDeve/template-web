class UserProfile {
    name;

    constructor() {
        this.name = 'John Dow';
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

}


export {
    UserProfile
}