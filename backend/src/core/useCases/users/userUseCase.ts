import { UserEntityFirebase, UserEntity } from '../../entities/users/UserEntity';
import { responseHelper } from '../../helpers/respoonseHelpers';

class UserUseCase {
    private static instance: UserUseCase;
    userEntity: UserEntity;

    private constructor(userEntity: UserEntity) {
        this.userEntity = userEntity
    }

    public static getInstance(): UserUseCase {
        if (!UserUseCase.instance) {
            UserUseCase.instance = new UserUseCase(new UserEntityFirebase());
        }

        return UserUseCase.instance;
    }

    async register(item) {
        
        try {
            const createdUser = await this.userEntity.createUser(item);
            return responseHelper.success(createdUser);
        } catch (error) {
            return responseHelper.error(error);
        }
    }
}


const userUseCase = UserUseCase.getInstance();


export {
    userUseCase  
}