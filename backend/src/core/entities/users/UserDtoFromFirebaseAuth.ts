import { User } from './User';


class UserDtoFromFirebaseAuth implements User {
    uid?: string;
    email: String;
    softDelete: Boolean;

    constructor(item) {
        this.uid = item.uid;
        this.email = item.email;
        this.softDelete = item.disabled
    }
}

export {
    UserDtoFromFirebaseAuth,
    User
}