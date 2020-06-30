import {
    UserProfile
 } from '../../entities/userProfileEntity/UserProfile';

class UserProfileUseCase {
    userProfileEntity = new UserProfile();

    constructor(userProfileEntity) {
        this.userProfileEntity = userProfileEntity;
    }

    
    setName(name) {
        this.userProfileEntity.setName(name);
    }
    
    getName() {
        return this.userProfileEntity.getName();
    }


}



 const getInstance = () => {
    let instance = null;
    if (instance === null) {
        instance = new UserProfileUseCase(new UserProfile());
    }

    return instance;
}

const userProfileUseCase = getInstance();

export {
    userProfileUseCase
}