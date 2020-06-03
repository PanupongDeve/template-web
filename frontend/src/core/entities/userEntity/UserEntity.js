import { User } from './User';
import { usersMock } from '../../services/mocks/usersMock';
import { http } from '../../services/http/http';;

class UserEntity {
    create(user){}
    findAll(){}
    login(user){}
    

    mappingArrayToEntity(users){}
    mappingObjectToEntity(user){}
    
}

class UserEntityUtility extends UserEntity {

    mappingArrayToEntity(items = usersMock){
        const tmp = items.map((item) => {
            return new User(item);
        });

        return tmp;
    }

    mappingObjectToEntity(item){
        const tmp = new User(item)
        return tmp;
    }
}


class UserEntityFromMockImp extends UserEntityUtility {
 
    findAll() {
        const items = this.mappingArrayToEntity(usersMock);
        return items
    }

    login(user){}
    
}

class UserEntityHttpImp extends UserEntityUtility {
 
    async findAll() {
        let httpitems = await http.get('http://localhost:4500/users');
        const items = this.mappingArrayToEntity(httpitems);
        return items
    }

    login(user){}
    
}

export {
    UserEntityFromMockImp,
    UserEntityHttpImp,
    UserEntity
}