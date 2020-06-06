import { User } from './User';
import { UserDtoFromFirebaseAuth } from './UserDtoFromFirebaseAuth';
import { firebaseAdmin } from '../../services/firebaseAdmin/FirebaseAdmin';

interface UserEntity {
    createUser(item): Promise<User>;

}



class UserEntityFirebase implements UserEntity  {

    getAuth() {
        return firebaseAdmin.getAuthService();
    }

    async createUser(item): Promise<User> {
        const auth = this.getAuth();
        const userRecord = await auth.createUser(item);
        const response = new UserDtoFromFirebaseAuth(userRecord);
        return response
    }
}

export {
    UserEntity,
    UserEntityFirebase
}