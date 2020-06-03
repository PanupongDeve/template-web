import {
    UserEntityHttpImp
 } from '../../entities/userEntity/UserEntity';

 import { response } from '../../helpers/Response';

class UserUsecase {
    userEntity = new UserEntityHttpImp();

    constructor(userEntity) {
        this.userEntity = userEntity;
    }

    async findAll() {
        try {
            const items = await this.userEntity.findAll();
            return response.success(items)
        } catch (error) {
            return response.error(error);
        }
    }
}


const getInstance = () => {
    let instance = null;
    if (instance === null) {
        instance = new UserUsecase(new UserEntityHttpImp());
    }

    return instance;
}

const userUseCase = getInstance();

export {
    userUseCase
}