import * as admin from 'firebase-admin';
import { Injectable } from '@nestjs/common';
import * as serviceAccount from '@/firebase-service-account.json';

@Injectable()
export class FirebaseService {
  private app: admin.app.App;

  constructor() {
    if (!admin.apps.length) {
      this.app = admin.initializeApp({
        credential: admin.credential.cert(
          serviceAccount as admin.ServiceAccount,
        ),
      });
    } else {
      this.app = admin.app(); // reuse the already-initialized app
    }
  }

  async verifyToken(idToken: string) {
    try {
      const decodedToken = await admin.auth().verifyIdToken(idToken);
      return decodedToken;
    } catch (error) {
      console.error('Error verifying Firebase ID token:', error);
      throw new Error('Invalid Firebase ID token');
    }
  }
}
