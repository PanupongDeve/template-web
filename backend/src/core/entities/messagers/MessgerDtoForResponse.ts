import { Messager } from './Messager';

class MessgerDtoForResponse implements Messager {
    id: String;
    name: String;
    message: String;
    createdAt: Date;
    updatedAt?: Date;


    constructor(item: Messager) {
        this.id = item.id;
        this.name = item.name;
        this.message = item.message;
        this.createdAt = item.createdAt;
        this.updatedAt = item.updatedAt;
    }
}

export {
    MessgerDtoForResponse
}