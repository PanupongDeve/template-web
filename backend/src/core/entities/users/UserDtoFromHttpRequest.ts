import { User } from './User';

class UserDtoFromHttpRequest implements User {
    email: String;
    password: String

    constructor(item) {
        this.email = item.email;
        this.password = item.password
    }
}

export {
    UserDtoFromHttpRequest
}