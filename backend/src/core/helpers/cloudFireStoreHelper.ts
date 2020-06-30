import { offsetGenerator } from '../utils/utils';

export class CloudFirestoreQueryPagination {
    public pageNumber;
    public limit;

    constructor(item?: CloudFirestoreQueryPagination) {

        this.pageNumber = item.pageNumber ? Number(item.pageNumber): 1;
        this.limit = item.limit ? Number(item.limit) : 10;
    }
}

export class FirebaseQueryResponse<T> {
    public meta;
    public data;

    constructor(meta, data) {
        this.meta = meta;
        this.data = data;
    }
}

class CloudFireStoreHelper {
    private static instance: CloudFireStoreHelper;
    
    private constructor(){}

    public static getInstance(): CloudFireStoreHelper {
        if (!CloudFireStoreHelper.instance) {
            CloudFireStoreHelper.instance = new CloudFireStoreHelper();
        }

        return CloudFireStoreHelper.instance;
    }

    async create<T>(model, data: T) {
        const dataForSave = JSON.parse(JSON.stringify(data));
        const dataSaved: T = await model.doc().set(dataForSave);
        return dataForSave
    }

    async getAll<T>(model, cloudFirestoreQueryPagination = new CloudFirestoreQueryPagination()) {
        console.log(cloudFirestoreQueryPagination);
        const totalItems = (await model.where('softDelete', '==', false).get())._size;
        const offsetManger = offsetGenerator(cloudFirestoreQueryPagination.pageNumber, cloudFirestoreQueryPagination.limit, totalItems);
        const snapshot = await model.where('softDelete', '==', false)
                                .orderBy('createdAt', 'desc')
                                .limit(cloudFirestoreQueryPagination.limit)
                                .offset(offsetManger.offset)
                                .get()
        let tmp: T[] = [];
        snapshot.forEach(doc => {
            let tmpObj = doc.data();
            tmpObj.id = doc.id;
            tmp.push(tmpObj);
          });                  
        return {
            meta: {
                totalPages: offsetManger.maxPages,
                limit: cloudFirestoreQueryPagination.limit,
                pageNumber: offsetManger.pageCal,
            },
            data: tmp
        };
    }

}

const cloudFireStoreHelper: CloudFireStoreHelper = CloudFireStoreHelper.getInstance();

export {
    cloudFireStoreHelper
}
