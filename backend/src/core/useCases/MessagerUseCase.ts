import { MessagerEntity, MessagerEntityFirebase } from '../entities/messagers/MessagerEntity';
import { responseHelper } from '../helpers/respoonseHelpers';

class MessagerUseCase {
    private static instance: MessagerUseCase;
    messagerEntity: MessagerEntity;

    private constructor(messagerEntity: MessagerEntity) {
        this.messagerEntity = messagerEntity
    }

    public static getInstance(): MessagerUseCase {
        if (!MessagerUseCase.instance) {
            MessagerUseCase.instance = new MessagerUseCase(new MessagerEntityFirebase());
        }

        return MessagerUseCase.instance;
    }

    public async createMessager(body) {
        try {
            const responseData = await this.messagerEntity.createMessager(body);
            return responseHelper.success(responseData);
        } catch (error) {
            return responseHelper.error(error);
        }
    }


    public async getMessagers(query) {
        try {
            const responseData = await this.messagerEntity.getMessagers(query);
            return responseHelper.success(responseData);
        } catch (error) {
            return responseHelper.error(error);
        }
    }
}

const messagerUseCase = MessagerUseCase.getInstance();

export {
    messagerUseCase 
}

