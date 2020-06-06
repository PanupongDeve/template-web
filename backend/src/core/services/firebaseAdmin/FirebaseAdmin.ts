import * as admin from 'firebase-admin';


class FirebaseAdmin {
    private static instance: FirebaseAdmin;
    private app: admin.app.App;

    private constructor() {
        this.app = admin.initializeApp({
            credential: admin.credential.applicationDefault(),
            projectId: "template-web-1e14d",
        });
    }

    public static getInstance(): FirebaseAdmin {
        if (!FirebaseAdmin.instance) {  
            FirebaseAdmin.instance = new FirebaseAdmin();
        }

        return FirebaseAdmin.instance;
    }

    public getAuthService() {
        return this.app.auth();
    }

    public getDatabase() {
        return this.app.firestore();
    }

    public getApp() {
        return this.app;
    }
}


const firebaseAdmin: FirebaseAdmin = FirebaseAdmin.getInstance();

export {
    firebaseAdmin
}