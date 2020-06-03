import  axios from 'axios';

class Http {

    async get(url, config = {}) {
        const response = await axios.get(url, config);
        return response.data;
    }

    async post(url, data, config = {}) {
        const response = await axios.post(url, data, config);
        return response.data;
    }
}



const getInstance = () => {
    let instance = null;
    if (instance === null) {
        instance = new Http();
    }

    return instance;
}

const http = getInstance();

export {
    http
}