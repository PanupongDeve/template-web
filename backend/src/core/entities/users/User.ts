
class User {
    uid?: string;
    email: String;
    password: String;
    softDelete: Boolean;

    constructor(item: any) {
        this.uid = item.uid || null;
        this.email = item.email;
        this.password = item.password;
        this.softDelete = item.disabled
    }
}


export {
    User
}