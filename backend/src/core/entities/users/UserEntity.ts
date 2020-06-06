import { User } from './User';
import { UserDtoFromFirebaseAuth } from './UserDtoFromFirebaseAuth';
import { UserDtoFromHttpRequest } from './UserDtoFromHttpRequest';
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
        const userFromHttpRequest: any = new UserDtoFromHttpRequest(item);
        const userRecord = await auth.createUser(userFromHttpRequest);
        const response = new UserDtoFromFirebaseAuth(userRecord);
        return response
    }
}

export {
    UserEntity,
    UserEntityFirebase
}