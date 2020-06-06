


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
        const dataSaved: T = await model.doc().set(JSON.parse(JSON.stringify(data)));
        return dataSaved
    }

    async getAll<T>(model) {
        const snapshot = await model.where('softDelete', '==', false).orderBy('createdAt', 'desc').limit(10).get()
        let tmp: T[] = []  
        snapshot.forEach(doc => {
            let tmpObj = doc.data();
            tmpObj.id = doc.id;
            tmp.push(tmpObj);
            
            console.log(doc.id, '=>', doc.data());
          });                  
        return tmp;
    }

}

const cloudFireStoreHelper: CloudFireStoreHelper = CloudFireStoreHelper.getInstance();

export {
    cloudFireStoreHelper
}
