// import firebase from  'firebase'
import {initializeApp} from  'firebase/app'
import {getMessaging} from  'firebase/messaging'

const firebaseConfig = {
    apiKey: "AIzaSyDV4S2oUVsx7BDcGbuS_Y-GfYKxMU9UZYo",
    authDomain: "home-search-37cb6.firebaseapp.com",
    projectId: "home-search-37cb6",
    storageBucket: "home-search-37cb6.appspot.com",
    messagingSenderId: "182547544801",
    appId: "1:182547544801:web:c8e4b6c8d7b7e09b8f15a0",
    measurementId: "G-DQXWMJQ3Y6"
  };
  
//   // Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app)
//   export default firebase