import { Messager } from './Messager';
import { firebaseAdmin } from '../../services/firebaseAdmin/FirebaseAdmin';
import { MessagerDtoForCreate } from './MessagerDtoForCreate';
import { MessgerDtoForResponse } from './MessgerDtoForResponse';
import { cloudFireStoreHelper, CloudFirestoreQueryPagination, FirebaseQueryResponse } from '../../helpers/cloudFireStoreHelper';

interface MessagerEntity {
    createMessager(item): Promise<Messager>;
    getMessagers(query): Promise<FirebaseQueryResponse<Messager[]>>;
}


class MessagerEntityFirebase implements MessagerEntity {

    
    getModel() {
        const database = firebaseAdmin.getDatabase();
        const messagerModel = database.collection("messagers");
        return messagerModel;
    }


    private mappingtoArrayMessager(items): Messager[] {
        return items.map(item => {
            return new MessgerDtoForResponse(item);
        })
    }


    async createMessager(item): Promise<Messager> {
        const messager = new MessagerDtoForCreate(item);
        const messagerModel = this.getModel();
        const messagerSaved = await cloudFireStoreHelper.create<Messager>(messagerModel, messager);
        console.log('messagerSaved', messagerSaved);
        const messagerSavedResponse = new MessgerDtoForResponse(messagerSaved);
        console.log('messagerSavedResponse', messagerSavedResponse);
        return messagerSavedResponse
    }

    async getMessagers(query): Promise<FirebaseQueryResponse<Messager[]>> {
        const messagerModel = this.getModel();
        const { data, meta } = await cloudFireStoreHelper.getAll<Messager>(messagerModel, new CloudFirestoreQueryPagination(query));
        const messgaersResponse = await this.mappingtoArrayMessager(data);
        const response = new FirebaseQueryResponse<Messager[]>(meta, data)
        return response;

    }
}

export {
    MessagerEntity,
    MessagerEntityFirebase
}