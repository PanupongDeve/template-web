import { User } from './User';
import { UserDtoFromHttp} from './UserDtoFromHttp'
import { http } from '../../services/http/http';;

class UserEntity {
    register(item){}
    
}


class UserEntityHttpImp extends UserEntity {
 

    async register(item) {
        let response = await http.post('http://localhost:4500/api/v1/users/register', item);
        if (response.success) {
            const user = new UserDtoFromHttp(response.data);
            return user;
        } else {
            throw response.data
        }
    }
    
}

export {

    UserEntityHttpImp,
    UserEntity
}