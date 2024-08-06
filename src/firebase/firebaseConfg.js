import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import config from "../conig";

const firebaseConfig = {
    apiKey: config.firebaseApiKey,
    authDomain: config.firebaseAuthDomain,
    projectId: config.firebaseProjectId,
    storageBucket: config.firebaseStorageBucket,
    messagingSenderId: config.firebaseMessagignSenderId,
    appId: config.firebaseAppId,
    measurementId: config.firebaseMeasurementId,
};
  
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)