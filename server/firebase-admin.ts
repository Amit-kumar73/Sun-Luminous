import { initializeApp, getApps, cert, applicationDefault, type App } from 'firebase-admin/app';
import { getAuth, type Auth } from 'firebase-admin/auth';
import { getFirestore, type Firestore } from 'firebase-admin/firestore';

let adminApp: App | null = null;

export function isFirebaseAdminConfigured(): boolean {
  return Boolean(
    process.env.FIREBASE_PROJECT_ID ||
    process.env.GOOGLE_APPLICATION_CREDENTIALS ||
    process.env.FIREBASE_SERVICE_ACCOUNT
  );
}

export function getFirebaseAdminApp(): App | null {
  if (adminApp) {
    return adminApp;
  }

  const existingApps = getApps();
  if (existingApps.length > 0) {
    adminApp = existingApps[0];
    return adminApp;
  }

  try {
    const serviceAccountJson = process.env.FIREBASE_SERVICE_ACCOUNT;
    if (serviceAccountJson) {
      const parsedServiceAccount = JSON.parse(serviceAccountJson);
      adminApp = initializeApp({
        credential: cert(parsedServiceAccount),
        projectId: process.env.FIREBASE_PROJECT_ID || parsedServiceAccount.project_id
      });
      return adminApp;
    }

    if (process.env.FIREBASE_PROJECT_ID && process.env.FIREBASE_CLIENT_EMAIL && process.env.FIREBASE_PRIVATE_KEY) {
      adminApp = initializeApp({
        credential: cert({
          projectId: process.env.FIREBASE_PROJECT_ID,
          clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
          privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n')
        }),
        projectId: process.env.FIREBASE_PROJECT_ID
      });
      return adminApp;
    }

    if (process.env.FIREBASE_PROJECT_ID) {
      adminApp = initializeApp({
        projectId: process.env.FIREBASE_PROJECT_ID
      });
      return adminApp;
    }

    // Try default application credentials if in GCP environment
    if (process.env.GOOGLE_APPLICATION_CREDENTIALS || process.env.K_SERVICE) {
      adminApp = initializeApp({
        credential: applicationDefault()
      });
      return adminApp;
    }
  } catch (error) {
    console.warn('Firebase Admin initialization skipped or failed:', error);
  }

  return null;
}

export function getAdminAuth(): Auth | null {
  const app = getFirebaseAdminApp();
  return app ? getAuth(app) : null;
}

export function getAdminFirestore(): Firestore | null {
  const app = getFirebaseAdminApp();
  return app ? getFirestore(app) : null;
}
