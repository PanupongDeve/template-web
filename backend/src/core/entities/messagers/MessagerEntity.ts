import { Messager } from './Messager';
import { firebaseAdmin } from '../../services/firebaseAdmin/FirebaseAdmin';
import { MessagerDtoForCreateFromHttpRequest } from './MessagerDtoFromHttpRequest';
import { MessgerDtoFromFirebaseDatabase } from './MessgerDtoFromFirebaseDatabase';
import { cloudFireStoreHelper } from '../../helpers/cloudFireStoreHelper';

interface MessagerEntity {
    createMessager(item): Promise<Messager>;
}


class MessagerEntityFirebase implements MessagerEntity {

    
    getModel() {
        const database = firebaseAdmin.getDatabase();
        const messagerModel = database.collection("messagers");
        return messagerModel;
    }

    private changeObjectToArray(object: any) {
        
        return Object.keys(object).map((key) => {
            const item = object[key];
            item.id = key
            return item;
        });
    }

    private mappingtoArrayMessager(items): Messager[] {
        return items.map(item => {
            return new MessgerDtoFromFirebaseDatabase(item);
        })
    }


    async createMessager(item): Promise<Messager> {
        const messager = new MessagerDtoForCreateFromHttpRequest(item);
        const messagerModel = this.getModel();
        const messagerSaved = await cloudFireStoreHelper.create<Messager>(messagerModel, messager);
        return messagerSaved
    }

    async getMessagers(): Promise<Messager[]> {
        const messagerModel = this.getModel();
        const messagers = await cloudFireStoreHelper.getAll<Messager>(messagerModel);
        return messagers;

    }
}

export {
    MessagerEntity,
    MessagerEntityFirebase
}