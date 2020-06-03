

class ResponseHelper {
    private static instance: ResponseHelper;
    
    private constructor(){}

    public static getInstance(): ResponseHelper {
        if (!ResponseHelper.instance) {
            ResponseHelper.instance = new ResponseHelper();
        }

        return ResponseHelper.instance;
    }


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

const responseHelper: ResponseHelper = ResponseHelper.getInstance();

export {
    responseHelper
}

