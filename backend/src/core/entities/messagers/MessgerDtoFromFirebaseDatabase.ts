import { Messager } from './Messager';

class MessgerDtoFromFirebaseDatabase implements Messager {
    id: String;
    name: String;
    message: String;
    createdAt: Date;


    constructor(item: Messager) {
        this.id = item.id;
        this.name = item.name;
        this.message = item.message;
        this.createdAt = item.createdAt
    }
}

export {
    MessgerDtoFromFirebaseDatabase
}