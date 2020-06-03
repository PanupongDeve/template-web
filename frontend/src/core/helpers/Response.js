

class Response {
    success(data) {
        return {
            success: true,
            data
        }
    }

    error(data) {
        return {
            success: false,
            data
        }
    }
}


const getInstance = () => {
    let instance = null;
    if (instance === null) {
        instance = new Response();
    }

    return instance;
}

const response = getInstance();

export {
    response
}