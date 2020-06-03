import { User } from './User';
import { firebaseAdmin } from '../../services/firebaseAdmin/FirebaseAdmin';

interface UserEntity {
    create(item): Promise<User>;

    mappingArrayToEntity(items): User[];
    mappingObjectToEntity(item): User;
}


abstract class UserEntityUtility implements UserEntity {
    abstract create(item);

    mappingArrayToEntity(items = []): User[] {
        const tmp: User[] = items.map(item => {
            return new User(item);
        })

        return tmp;
    }

    mappingObjectToEntity(item): User {
        const tmp: User = new User(item);
        return tmp;
    }
}


class UserAuth extends UserEntityUtility {

    getAuth() {
        return firebaseAdmin.getAuthService();
    }

    async create(item): Promise<User> {
        const auth = this.getAuth();
        const userRecord = await auth.createUser(item);
        const response = this.mappingObjectToEntity(userRecord);
        return response
    }
}

export {
    UserEntity,
    UserAuth
}