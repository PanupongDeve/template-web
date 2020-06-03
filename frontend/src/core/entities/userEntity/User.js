class User {
    id;
    email;
    password;
    softDelete;

    constructor(item) {
        this.id = item.id;
        this.email = item.email;
        this.password = item.password;
        this.softDelete = item.softDelete;
    }
}


export {
    User
}