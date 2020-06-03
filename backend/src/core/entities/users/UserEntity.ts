import { User } from './User';
import { UserDtoFromFirebaseAuth } from './UserDtoFromFirebaseAuth';
import { firebaseAdmin } from '../../services/firebaseAdmin/FirebaseAdmin';

interface UserEntity {
    create(item): Promise<User>;

    // mappingArrayToEntity(items): User[];
    // mappingObjectToEntity(item): User;
}


abstract class UserEntityUtility implements UserEntity {
    abstract create(item);

}


class UserAuth extends UserEntityUtility {

    getAuth() {
        return firebaseAdmin.getAuthService();
    }

    async create(item): Promise<User> {
        const auth = this.getAuth();
        const userRecord = await auth.createUser(item);
        const response = new UserDtoFromFirebaseAuth(userRecord);
        return response
    }
}

export {
    UserEntity,
    UserAuth
}