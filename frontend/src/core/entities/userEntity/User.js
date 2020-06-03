class User {
    id;
    email;
    softDelete;

    constructor(item) {
        this.id = item.uid;
        this.email = item.email;
        this.softDelete = item.softDelete;
    }
}


export {
    User
}