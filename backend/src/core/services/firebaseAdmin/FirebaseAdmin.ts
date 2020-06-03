import * as admin from 'firebase-admin';


class FirebaseAdmin {
    private static instance: FirebaseAdmin;
    private app: admin.app.App;

    private constructor() {
        this.app = admin.initializeApp({
            credential: admin.credential.applicationDefault(),
            databaseURL: process.env.REALTIME_DATABASE_URL
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
        return this.app.database();
    }

    public getApp() {
        return this.app;
    }
}


const firebaseAdmin: FirebaseAdmin = FirebaseAdmin.getInstance();

export {
    firebaseAdmin
}