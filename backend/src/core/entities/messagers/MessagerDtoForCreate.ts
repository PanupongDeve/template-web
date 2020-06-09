import { Messager } from './Messager';


class MessagerDtoForCreate implements Messager {
    name: String;
    message: String;
    softDelete: Boolean; // created by backend,
    createdAt: Date;
    updatedAt?: Date;
    deletedAt?: Date;

    constructor(item: Messager) {
        this.name = item.name;
        this.message = item.message;
        this.softDelete = item.softDelete || false;
        this.createdAt = new Date();
        this.updatedAt = null;
        this.deletedAt = null;
    }
}

export {
    MessagerDtoForCreate
}