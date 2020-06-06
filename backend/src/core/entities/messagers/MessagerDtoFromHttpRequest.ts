import { Messager } from './Messager';


class MessagerDtoForCreateFromHttpRequest implements Messager {
    name: String;
    message: String;
    softDelete: Boolean; // created by backend,
    createdAt: Date

    constructor(item: Messager) {
        this.name = item.name;
        this.message = item.message;
        this.softDelete = item.softDelete || false;
        this.createdAt = new Date()
    }
}

export {
    MessagerDtoForCreateFromHttpRequest
}