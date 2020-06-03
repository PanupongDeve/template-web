
class User {
    uid?: string;
    email: String;
    password: String;

    constructor(item: any) {
        this.uid = item.uid || null;
        this.email = item.email
        this.password = item.password
    }
}


export {
    User
}