
class UserDtoFromHttp {
    uid;
    email;
    softDelete;

    constructor(item) {
        this.uid = item.uid;
        this.email = item.email;
        this.softDelete = item.softDelete;
    }
}

export {
    UserDtoFromHttp
}